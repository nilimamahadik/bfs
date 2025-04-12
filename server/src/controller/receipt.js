const receipt = require("../models/receipt");
const mongoose = require("mongoose");



exports.submit_form = async (req, res) => {
    try {
        const {
            vendor_name,
            address,
            supplier_name,
            mobileNo,
            ship_to_address1,
            ship_to_district,
            transport_mode,
            transport_number,
            transport_driver_name,
            productDetails, // Already an array from frontend
            total_freight,
            advance_paid,
            to_pay,
            sc,
            hamali,
            sch,
            total_balanceamount,
            from,
            group_id,
            receiver,
            checkedValues,
            topayrate,
            total_amount,
            topayamt,
            update
        } = req.body;

        // console.log("1", req.body);

        // Parse productDetails if it's a string
        const parsed_productdetails = typeof productDetails === "string" ? JSON.parse(productDetails) : productDetails;
        // console.log("Parsed Product Details:", parsed_productdetails);
        if (update) {
            // console.log("update", update);

            const updatedReceipt = await receipt.findOneAndUpdate(
                {
                    _id: new mongoose.Types.ObjectId(update)
                },
                {
                    $set: {
                        from: from && from,
                        transport_number: transport_number && transport_number,
                        transport_driver_name: transport_driver_name && transport_driver_name,
                        transport_mode: transport_mode && transport_mode,
                        vendor_name: vendor_name && vendor_name,
                        address: address && address,
                        supplier_name: supplier_name && supplier_name,
                        mobileNo: mobileNo && mobileNo,
                        ship_to_address1: ship_to_address1 && ship_to_address1,
                        ship_to_district: ship_to_district && ship_to_district,
                        productDetails: parsed_productdetails && parsed_productdetails,
                        sc: sc && sc,
                        hamali: hamali && hamali,
                        total_balanceamount: total_balanceamount && total_balanceamount,
                        checkedValues: checkedValues && checkedValues,
                        total_amount: total_amount && total_amount,
                    }
                },
                { new: true }
            );

            // console.log("updatedReceipt", updatedReceipt);

            // Log update result
            if (updatedReceipt) {
                res.status(200).json({ message: "Receipt updated successfully", updatedReceipt });
            } else {
                res.status(500).json({ error: "Internal Server Error" });
            }


        } else {
            // Extract the first product name from the productDetails array
            let firstProduct = parsed_productdetails?.[0]?.product_name?.toLowerCase().trim();
            //console.log("Original Product Name:", firstProduct);

            // Extract the relevant part of the product name (e.g., "chambal" or "coromandel")
            if (firstProduct) {
                const match = firstProduct.match(/chambal|coromandel/i); // Match "chambal" or "coromandel" (case-insensitive)
                firstProduct = match ? match[0].toLowerCase() : firstProduct; // Use the matched value or fallback to the original
            }
            //console.log("Matched Product Name:", firstProduct);

            // Define product prefixes
            const productPrefixes = {
                chambal: "CFCL",
                coromandel: "CIL",
            };

            // Determine the prefix based on the product name
            const productPrefix = productPrefixes[firstProduct] || "GEN"; // Default to "GEN" if no match
            //console.log("Product Prefix:", productPrefix);

            // Find the last receipt for the selected product prefix
            const lastReceipt = await receipt.findOne({
                receipt_number: new RegExp(`^${productPrefix}-`, "i"),
            })
                .sort({ tran_date: -1 }) // Sort by latest transaction date
                .exec();

            // Determine the next counter
            let nextCounter = 1001; // Start from 1001
            if (lastReceipt) {
                const lastNumber = parseInt(lastReceipt.receipt_number.split("-").pop(), 10);
                nextCounter = lastNumber + 1;
            }

            // Generate the receipt number
            const receiptNo = `${productPrefix}-${nextCounter}`;
            // console.log("Generated Receipt Number:", receiptNo);

            // Create a new receipt
            const newReceipt = new receipt({
                tran_date: new Date(),
                receipt_number: receiptNo,
                vendor_name: vendor_name.trim(),
                address: address.trim(),
                from: from ? from.trim() : "",
                productDetails: parsed_productdetails,
                ship_to_address1: ship_to_address1 ? ship_to_address1.trim() : "",
                ship_to_district: ship_to_district ? ship_to_district.trim() : "",
                transport_mode: transport_mode ? transport_mode.trim() : "",
                supplier_name: supplier_name ? supplier_name.trim() : "",
                mobileNo: mobileNo,
                transport_number: transport_number ? transport_number.trim() : "",
                transport_driver_name: transport_driver_name ? transport_driver_name.trim() : "",
                total_freight: total_freight || 0,
                advance_paid: advance_paid || 0,
                to_pay: to_pay || 0,
                sc: sc || 0,
                hamali: hamali || 0,
                sch: sch || 0,
                total_balanceamount: total_balanceamount || 0,
                topayrate: topayrate ? topayrate.trim() : 0,
                total_amount: total_amount || 0,
                topayamt: topayamt || 0,
                group_id: group_id?.trim(),
                receiver: receiver ? receiver.trim() : "",
                checkedValues: checkedValues ? checkedValues.trim() : ""
            });

            // Save the receipt to the database
            const savedReceipt = await newReceipt.save();
            // console.log(savedReceipt);

            // Return success response
            return res.status(201).json({
                data: savedReceipt,
                status: "success",
                message: "Receipt Saved Successfully",
            });
        }
    } catch (error) {
        console.error("Error saving receipt:", error.message);
        return res.status(500).json({
            status: "error",
            message: "Something went wrong while saving the Lorry receipt",
        });
    }
};

exports.getallusers = async (req, res) => {

    const fromDate = req.query.fromDate ? new Date(req.query.fromDate) : null;
    const toDate = req.query.toDate ? new Date(req.query.toDate) : null;

    try {
        // Build query with date range
        let query = { group_id: req.params.id };

        // Apply date filter if provided
        if (fromDate && toDate) {
            query.createdAt = { $gte: fromDate, $lte: toDate };
        } else if (fromDate) {
            query.createdAt = { $gte: fromDate };
        } else if (toDate) {
            query.createdAt = { $lte: toDate };
        }

        const allusers = await receipt.find(query).sort({ createdAt: -1 });
        // console.log("allusers", allusers);

        return res.status(201).json({
            data: allusers,
            status: "success",
            message: "Users fetched successfully",
            count: allusers.length,
        });
    } catch (err) {
        //console.error("Error fetching users:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.getsingleusers = async (req, res) => {
    // //console.log(req.params);
    try {
        const singleusers = await receipt.findById(req.params.id)
        //  //console.log(singleusers);
        return res.status(201).json({
            data: singleusers,
            status: "success",
            message: "candidate get successfully"
        })
    }
    catch (err) {
        //console.log(err.message)
    }
}


exports.getallinfo = async (req, res) => {
    // //console.log(req.params);
    try {
        const allinfo = await receipt.find()
        // //console.log(allinfo);
        return res.status(201).json({
            allinfo
            // status:"success",
            // message:"candidate get successfully",
            // count: allusers.length
        })
    }
    catch (err) {
        //console.log(err.message)
    }
}




exports.getallreceipts = async (req, res) => {
    try {
        const { filterType, groupId } = req.params; // Get filterType & groupId from request

        if (!filterType || !groupId) {
            return res.status(400).json({ error: "Filter Type and Group ID are required!" });
        }

        let groupFormat;
        if (filterType === "today") {
            groupFormat = { $dateToString: { format: "%Y-%m-%d", date: "$tran_date" } }; // Group by Date (YYYY-MM-DD)
        } else if (filterType === "week") {
            groupFormat = { $isoWeek: "$tran_date" }; // Group by Week Number
        } else if (filterType === "month") {
            groupFormat = { $dateToString: { format: "%Y-%m", date: "$tran_date" } }; // Group by Month (YYYY-MM)
        } else if (filterType === "year") {
            groupFormat = { $year: "$tran_date" }; // Group by Year
        } else {
            return res.status(400).json({ error: "Invalid filter type!" });
        }

        const result = await receipt.aggregate([
            {
                $match: {
                    group_id: groupId,
                    deleted: { $ne: true } // Exclude receipts where deleted is true
                }
            }, // 🔍 Match group ID and exclude deleted receipts
            {
                $group: {
                    _id: groupFormat,
                    count: { $sum: 1 },
                },
            },
            { $sort: { _id: 1 } }, // 📅 Sort by date
        ]);

        const formattedData = result.map((item) => ({
            label: item._id.toString(), // X-Axis (Date, Week, Month, Year)
            value: item.count, // Y-Axis (Receipt Count)
        }));

        res.json({ filterType, groupId, data: formattedData });
    } catch (error) {
        console.error("Error fetching LR receipt count:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.regenerateReceipt = async (req, res) => {
    try {
        const { receipt_id } = req.body;

        if (!receipt_id) {
            return res.status(400).json({ error: "Receipt ID is required!" });
        }

        const existingReceipt = await receipt.findById(receipt_id);

        if (!existingReceipt) {
            return res.status(404).json({ error: "Receipt not found!" });
        }

        const groupPrefix = existingReceipt.group_id
            .split(" ") // Split by spaces
            .map(word => word[0]) // Take the first letter of each word
            .join("") // Join letters together
            .toUpperCase(); // Convert to uppercase

        const fullReceiptId = existingReceipt._id.toString(); // Full MongoDB Object ID
        const datePart = new Date().toISOString().slice(0, 10).replace(/-/g, ""); // YYYYMMDD

        const lastIndex = parseInt(existingReceipt.receipt_number.split("-").pop()) || 0;
        const newIndex = lastIndex + 1;

        const newReceiptNumber = `${groupPrefix}-${datePart}-${newIndex}`;

        const newReceipt = new receipt({
            ...existingReceipt.toObject(),
            _id: undefined, // Remove old ID so MongoDB assigns a new one
            receipt_number: newReceiptNumber,
            createdAt: new Date(), // Update creation time
        });

        await newReceipt.save();

        res.status(201).json({
            message: "Receipt regenerated successfully",
            newReceiptNumber,
            newReceipt
        });

    } catch (error) {
        //console.error("Error regenerating receipt:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};



exports.updateReceipt = async (req, res) => {


    try {
        const { id } = req.params;
        const updatedData = req.body;

        const updatedReceipt = await receipt.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedReceipt) {
            return res.status(404).json({ error: "Receipt not found!" });
        }

        res.status(200).json({ message: "Receipt updated successfully", updatedReceipt });
    } catch (error) {
        //console.error("Error updating receipt:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.stockout = async (req, res) => {
    const { id } = req.params; // Get tran_id from request params
    //   //console.log(id);

    try {
        const result = await receipt.aggregate([
            {
                $match: { group_id: id }, // Filter by tran_id
            },
            { $unwind: "$productDetails" }, // Deconstruct productDetails array
            {
                $group: {
                    _id: "$productDetails.product_name", // Group by product_name
                    count: { $sum: 1 }, // Count occurrences
                },
            },
            {
                $lookup: {
                    from: "storemanages", // Collection to join
                    localField: "_id", // Field in current aggregation (`product_name`)
                    foreignField: "name", // Field in storemanages collection
                    as: "Quantity", // Name of the new array field
                },
            },
            { $sort: { count: -1 } }, // Optional: Sort by count in descending order
        ]);

        if (result.length === 0) {
            return res.status(404).json({ status: "error", message: "No products found for this ID" });
        }

        res.status(200).json({ status: "success", products: result });
    } catch (error) {
        //console.error("Error fetching product counts:", error);
        res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
};



exports.deleteReceipt = async (req, res) => {
    // console.log(req.param);

    try {
        const deletedProduct = await receipt.findByIdAndUpdate(
            req.params.id,

            { $set: { deleted: true, deletedAt: new Date() }, deleted_By: req.params.user }, 
            { new: true } // Return the updated document
        );
        if (!deletedProduct) {
            return res.status(404).json({ message: "LR not found!" });
        }
        // console.log("deletedProduct", deletedProduct);
       
        res.json({ message: "LR deleted successfully!", deletedProduct });
    } catch (error) {
        console.error("Error deleting LR:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


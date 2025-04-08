// const storemanage = require("../models/storemanage");

const receipt = require("../models/receipt");
const storemanage = require("../models/storemanage");




exports.storemanage = async (req, res) => {


  try {
    // //console.log("Request Data:", req.body); // Log the request data

    // Create a new product document
    const newProduct = new storemanage({
      name: req.body.name,
      quantity: req.body.quantity,
      warehouse: req.body.warehouse,
      date: req.body.date,
      remark: req.body.remark,
      group_id: req.body.groupId
    });

    // Save to MongoDB
    await newProduct.save();
    //   //console.log(newProduct);


    res.status(201).json({ message: "Stock added successfully!", product: newProduct });
  } catch (error) {
    console.error("Error saving Stock:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};



exports.getallstock = async (req, res) => {
  const fromDate = req.query.fromDate ? new Date(req.query.fromDate) : null;
  // console.log("fromDate", fromDate);

  const toDate = req.query.toDate ? new Date(req.query.toDate) : null;
  // console.log("toDate", toDate);


  try {
    // Build match conditions for date range
    const matchConditions = { group_id: req.params.id };
    // console.log(matchConditions);

    // Add date range to match conditions if provided
    if (fromDate && toDate) {
      matchConditions.createdAt = {
        $gte: fromDate,
        $lte: toDate,
      };
    } else if (fromDate) {
      matchConditions.createdAt = { $gte: fromDate };
    } else if (toDate) {
      matchConditions.createdAt = { $lte: toDate };
    }

    // Fetch all stock records by group_id
    const allProducts = await storemanage.find(matchConditions).sort({ createdAt: -1 });
    // console.log(allProducts);

    // Aggregate to get product counts and join with receipt
    const result = await storemanage.aggregate([
      {
        $match: matchConditions, // Apply date and group_id filter

      },
      {
        $group: {
          _id: "$name",
          totalQuantity: {
            $sum: {
              $toInt: "$quantity",
            },
          },
          firstEntry: { $first: "$$ROOT" },
        },
      },
      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: ["$firstEntry", { quantity: "$totalQuantity" }],
          },
        },
      },
      {
        $lookup: {
          from: "receipts",
          localField: "name",
          foreignField: "productDetails.product_name",
          as: "stockout",
        },
      },
      {
        $lookup: {
          from: "productmasters",
          localField: "name",
          foreignField: "name",
          as: "manufacturer",
        },
      },
      {
        $addFields: {
          stockoutCount: { $size: "$stockout" },
          availableStock: { $subtract: ["$quantity", { $size: "$stockout" }] },
        },
      },
      { $sort: { createdAt: -1 } },
    ]);
    // console.log("rst", result);

    res.status(200).json({ products: allProducts, stockSummary: result });
  } catch (error) {
    console.error("Error fetching Stock:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};



exports.updateStock = async (req, res) => {
  try {
    // console.log("Updating Product ID:", req.params.id);
    // console.log("New Data:", req.body);

    const updatedProduct = await storemanage.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Return the updated document
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Stock not found!" });
    }

    res.json({ message: "Stock updated successfully!", updatedProduct });
  } catch (error) {
    console.error("Error updating Stock:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};



exports.deleteStock = async (req, res) => {
  try {
    // console.log("Deleting Product ID:", req.params.id);

    const deletedProduct = await storemanage.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Stock not found!" });
    }

    res.json({ message: "Stock deleted successfully!", deletedProduct });
  } catch (error) {
    console.error("Error deleting Stock:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};



exports.uploadstocks = async (req, res) => {
  try {
    const { stocks } = req.body;
    //console.log("Received Data:", stocks);

    // ✅ Ensure groupId is present in each record
    const validConsignees = stocks
      .filter(c => c.name && c.quantity && c.reorderqty && c.group_id) // ✅ Ensure groupId is present
      .map(c => ({ ...c, group_id: c.group_id.trim() })); // ✅ Trim groupId for safety

    //console.log("Valid Consignees:", validConsignees);

    if (validConsignees.length === 0) {
      return res.status(400).json({ error: "No valid records to upload! Ensure all records have groupId." });
    }

    await storemanage.insertMany(validConsignees);
    res.status(201).json({ message: "Bulk upload successful!" });
  } catch (error) {
    //console.error("Error in bulk upload:", error);
    res.status(500).json({ error: "Bulk upload failed!" });
  }
};



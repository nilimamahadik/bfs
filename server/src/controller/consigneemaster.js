


const consigneemaster = require("../models/consigneemaster");
// const productmaster = require("../models/productmaster");




exports.consigneemaster = async (req, res) => {


    try {
        // console.log("Request Data:", req.body); // Log the request data

        // Create a new product document
        const newProduct = new consigneemaster({
            name: req.body.name,
            place: req.body.place,
            district: req.body.district,
            mobileNo: req.body.mobileNo,
            maplocation: req.body.maplocation,
            group_id: req.body.groupId
        });

        // Save to MongoDB
        await newProduct.save();
        //   console.log(newProduct);


        res.status(201).json({ message: "Consignee Details added successfully!", product: newProduct });
    } catch (error) {
        console.error("Error saving product:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


exports.getallConsignee = async (req, res) => {
    try {
        // Fetch all products from MongoDB in ascending order based on createdAt
        const allProducts = await consigneemaster
            .find({ group_id: req.params.id })
            .sort({ createdAt: 1 }); // 1 for ascending order

        res.status(200).json({ products: allProducts });
    } catch (error) {
        console.error("Error fetching Consignee Details:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


exports.deleteconsignee = async (req, res) => {
    try {
        // console.log("Deleting Product ID:", req.params.id);

        const deletedProduct = await consigneemaster.findByIdAndDelete(req.params.id);

        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found!" });
        }

        res.json({ message: "Product deleted successfully!", deletedProduct });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


exports.updateConsignee = async (req, res) => {
    try {

        const updatedProduct = await consigneemaster.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // Return the updated document
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found!" });
        }

        res.json({ message: "Consignee Details updated successfully!", updatedProduct });
    } catch (error) {
        console.error("Error updating Consignee Details:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};



exports.uploadconsignee = async (req, res) => {
    try {
        const { products } = req.body;
        // console.log("Received Data:", products);

        // ✅ Validate required fields and sanitize data
        const validConsignees = products
            .filter(c => c.name && c.place && c.district && c.group_id)
            .map(c => ({
                ...c,
                group_id: c.group_id.trim(),
                mobileNo: isNaN(c.mobileNo) ? 0 : parseInt(c.mobileNo, 10), // ✅ Convert invalid mobileNo to 0
            }));

        // console.log("Valid Consignees:", validConsignees);

        if (validConsignees.length === 0) {
            return res.status(400).json({ error: "No valid records to upload! Ensure all records have required fields." });
        }

        // ✅ Insert into MongoDB
        await consigneemaster.insertMany(validConsignees, { ordered: false });

        res.status(201).json({ message: "Bulk upload successful!" });
    } catch (error) {
        console.error("Error in bulk upload:", error);
        res.status(500).json({ error: "Bulk upload failed!" });
    }
};



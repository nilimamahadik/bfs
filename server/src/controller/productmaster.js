const productmaster = require("../models/productmaster");




exports.productmaster = async (req, res) => {


    try {
        // console.log("Request Data:", req.body); // Log the request data

        // Create a new product document
        const newProduct = new productmaster({
            manufacturer: req.body.manufacturer,
            name: req.body.name,
            code: req.body.code,
            uom: req.body.uom,
            rate: req.body.rate,
            group_id: req.body.groupId
        });

        // Save to MongoDB
        await newProduct.save();
    //   console.log(newProduct);
      

        res.status(201).json({ message: "Product added successfully!", product: newProduct });
    } catch (error) {
        console.error("Error saving product:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


exports.getallproduct = async (req, res) => {
    // console.log(req.params.id);

    try {
        // Fetch all products from MongoDB
        const allProducts = await productmaster.find({ group_id: req.params.id }).sort({ createdAt: -1 });
        // console.log(allProducts);

        res.status(200).json({ products: allProducts });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        // console.log("Deleting Product ID:", req.params.id);

        const deletedProduct = await productmaster.findByIdAndDelete(req.params.id);

        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found!" });
        }

        res.json({ message: "Product deleted successfully!", deletedProduct });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


exports.updateProduct = async (req, res) => {
    try {
        // console.log("Updating Product ID:", req.params.id);
        // console.log("New Data:", req.body);

        const updatedProduct = await productmaster.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // Return the updated document
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found!" });
        }

        res.json({ message: "Product updated successfully!", updatedProduct });
    } catch (error) {
        //console.error("Error updating product:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};



exports.uploadproducts = async (req, res) => {
    try {
        const { products } = req.body;
        //console.log("Received Data:", products);

        // ✅ Ensure groupId is present in each record
        const validConsignees = products
            .filter(c => c.name && c.code && c.uom && c.group_id) // ✅ Ensure groupId is present
            .map(c => ({ ...c, group_id: c.group_id.trim() })); // ✅ Trim groupId for safety

        //console.log("Valid Consignees:", validConsignees);

        if (validConsignees.length === 0) {
            return res.status(400).json({ error: "No valid records to upload! Ensure all records have groupId." });
        }
                
        await productmaster.insertMany(validConsignees);
        res.status(201).json({ message: "Bulk upload successful!" });
    } catch (error) {
        console.error("Error in bulk upload:", error);
        res.status(500).json({ error: "Bulk upload failed!" });
    }
};



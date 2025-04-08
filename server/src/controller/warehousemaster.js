
const warehousemaster = require("../models/warehousemaster");




exports.warehousemaster = async (req, res) => {


    try {
        // //console.log("Request Data:", req.body); // Log the request data

        // Create a new product document
        const newProduct = new warehousemaster({
            name: req.body.name,
            place: req.body.place,
            capacity: req.body.capacity,
            manager: req.body.manager,
            mobileNo: req.body.mobileNo,
            group_id: req.body.groupId
        });

        // Save to MongoDB
        await newProduct.save();
        //   //console.log(newProduct);


        res.status(201).json({ message: "Warehouse Details added successfully!", product: newProduct });
    } catch (error) {
        //console.error("Error saving product:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


exports.getallwarehouse = async (req, res) => {
    // console.log(req.params.id);

    try {
        // Fetch all products from MongoDB
        const allProducts = await warehousemaster.find({ group_id: req.params.id }).sort({ createdAt: -1 });
        // console.log(allProducts);

        res.status(200).json({ products: allProducts });
    } catch (error) {
        console.error("Error fetching Warehouse Details:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.deletewarehouse = async (req, res) => {
    try {
        // console.log("Deleting Product ID:", req.params.id);

        const deletedProduct = await warehousemaster.findByIdAndDelete(req.params.id);

        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found!" });
        }

        res.json({ message: "Warehouse deleted successfully!", deletedProduct });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


exports.warehouseUpdate = async (req, res) => {
    try {

        const updatedProduct = await warehousemaster.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // Return the updated document
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Warehouse not found!" });
        }

        res.json({ message: "Warehouse Details updated successfully!", updatedProduct });
    } catch (error) {
        console.error("Error updating Warehouse Details:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};



exports.uploadwarehouse = async (req, res) => {
    try {
      const { products } = req.body;
      //console.log("Received Data:", products);
  
      // ✅ Filter and sanitize valid records
      const validConsignees = products
        .filter((c) => c.name && c.place && c.capacity && c.group_id)
        .map((c) => {
          // ✅ Trim and validate group_id
          const groupId = c.group_id ? c.group_id.trim() : "";
          
          // ✅ Convert mobileNo to a valid number or set to null if invalid
          const mobileNo = c.mobileNo && !isNaN(c.mobileNo) ? Number(c.mobileNo) : null;
  
          return {
            ...c,
            group_id: groupId,
            mobileNo, // Ensured numeric or null
          };
        });
  
      //console.log("Valid Consignees:", validConsignees);
  
      // ✅ Check if any valid records exist
      if (validConsignees.length === 0) {
        return res
          .status(400)
          .json({ error: "No valid records to upload! Ensure all records have correct groupId and mobileNo." });
      }
  
      // ✅ Insert valid records into database
      await warehousemaster.insertMany(validConsignees);
      res.status(201).json({ message: "Bulk upload successful!" });
    } catch (error) {
      //console.error("Error in bulk upload:", error);
      res.status(500).json({ error: "Bulk upload failed!" });
    }
  };
  
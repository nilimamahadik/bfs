
const transportmaster = require("../models/transportmaster");

exports.transportmaster = async (req, res) => {
    // console.log(req.body);
    
    try {
        // Create a new transport document
        const newTransport = new transportmaster({

            mobileNo: req.body.mobileNo,
            group_id: req.body.groupId,
            from: req.body.from, // New field
            truckNo: req.body.truckNo, // New field
            truckDriverName: req.body.truckDriverName, // New field
            transportMode: req.body.transportMode, // New field
        });

        // Save to MongoDB
        await newTransport.save();

        // Respond with success
        res.status(201).json({
            message: "Transport Details added successfully!",
            transport: newTransport,
        });
    } catch (error) {
        console.error("Error saving transport details:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.getallTransportmaster = async (req, res) => {
    try {
        // Fetch all products from MongoDB in ascending order based on createdAt
        const allProducts = await transportmaster
            .find({ group_id: req.params.id })
            .sort({ createdAt: 1 }); // 1 for ascending order

        res.status(200).json({ transportdetails: allProducts });
    } catch (error) {
        console.error("Error fetching Consignee Details:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};




exports.deletetransport = async (req, res) => {
    try {
        // console.log("Deleting Product ID:", req.params.id);

        const deletedProduct = await transportmaster.findByIdAndDelete(req.params.id);

        if (!deletedProduct) {
            return res.status(404).json({ message: "Tranport Details not found!" });
        }

        res.json({ message: "Tranport Details deleted successfully!", deletedProduct });
    } catch (error) {
        console.error("Error deleting Tranport Details:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


exports.updateTranportDetails = async (req, res) => {
    try {

        const updatedProduct = await transportmaster.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // Return the updated document
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Tranport Details not found!" });
        }

        res.json({ message: "Tranport Details updated successfully!", updatedProduct });
    } catch (error) {
        console.error("Error updating Tranport Details:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};



exports.uploadtransport = async (req, res) => {
    try {
        const { products } = req.body;
        // console.log("Received Data:", products);

        const validConsignees = products
            .filter(c => c.from && c.truckNo && c.truckDriverName && c.group_id)
            .map(c => ({
                ...c,
                group_id: c.group_id.trim(),
                mobileNo: isNaN(c.mobileNo) ? 0 : parseInt(c.mobileNo, 10), 
            }));


        if (validConsignees.length === 0) {
            return res.status(400).json({ error: "No valid records to upload! Ensure all records have required fields." });
        }
        await transportmaster.insertMany(validConsignees, { ordered: false });

        res.status(201).json({ message: "Bulk upload successful!" });
    } catch (error) {
        console.error("Error in bulk upload:", error);
        res.status(500).json({ error: "Bulk upload failed!" });
    }
};
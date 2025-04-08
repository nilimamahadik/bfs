const fs = require("fs");
const upload = require("../../models/partner/upload");
const csv = require("csv-parser");

exports.uploadProductsFromCSV = (req, res) => {
  // console.log(req.params);
  try {
    const csvData = [];
    // console.log(req.file);
    fs.createReadStream(req.file.path)
      .pipe(csv())
      .on("data", (row) => {
        csvData.push(row);
      })
      .on("end", async () => {
        const savedProducts = [];

        for (const row of csvData) {
          // console.log(row);

          if (
            !row.BusinessName ||
            !row.Address ||
            !row.Mobile ||
            !row.Pincode ||
            !row.City ||
            !row.State ||
            !row.Category ||
            !row.Subcategory ||
            !row.LeadStatus ||
            !row.Status
          ) {
            return res.status(400).json({
              status: "error",
              message: "Data validation failed for a row.",
            });
          }

          const product = {
            businessName: row.BusinessName,
            address: row.Address,
            mobile: row.Mobile,
            pincode: row.Pincode,
            city: row.City,
            state: row.State,
            category: row.Category,
            subcategory: row.Subcategory,
            leadStatus: row.LeadStatus,
            status: row.Status,
            p_id: req.params.id,
          };
          // console.log(product);
          // Save the product one at a time
          const savedProduct = await upload.create(product);
          if (savedProduct) {
            savedProducts.push(savedProduct);
          }
        }
        // console.log(savedProducts.length);
        // Send the response after processing all rows
        if (savedProducts.length > 0) {
          res.status(200).json({
            data: { savedProducts },
            status: "success",
            message: "Data uploaded successfully",
          });
        }
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.uploadShopData = async (req, res) => {
  try {
    // console.log(req.body);
    const response = await upload.create(req.body);
    if (response) {
      return res.status(200).json({
        data: response,
        status: "success",
        message: "Data uploaded successfully",
      });
    }
    // console.log(response);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

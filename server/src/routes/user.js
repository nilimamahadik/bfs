const express = require("express");
const {
  create_user_account,
  authenticate_user,
  UserForgetPass,
} = require("../controller/user");
const {
  create_admin_account,
  authenticate_admin,
  getallmandals,
  user_management,
  update,
  forgetPass,
  getprofile,
  deactivate,
} = require("../controller/admin");
const {
  submit_form,
  getallusers,
  getsingleusers,
  getallinfo,
  getallreceipts,
  regenerateReceipt,
  updateReceipt,
  stockout,
  deleteReceipt,

  
} = require("../controller/receipt");
const {
  uploadProductsFromCSV,
  uploadShopData,
} = require("../controller/partner/partnerupload");
const multer = require("multer");
const path = require("path");
const {
  authenticate_partner,
  forget_partner,
  create_partner_account,
  admin_action,
  adminupdate,
  getPartnerProfile,
} = require("../controller/partner/partner");
const {
  getShopsData,
  getSpecShopData,
  partnerAdminLogin,
  getPartnerAdminProfile,
} = require("../controller/partner/admin");
const { requireSignin } = require("../common-middleware");
const { getMaster } = require("../controller/master");
const { productmaster, getallproduct, deleteProduct, updateProduct, uploadproducts } = require("../controller/productmaster");
const { toggleRegenerate, getRegenerateStatus } = require("../controller/status");
const { consigneemaster, getallConsignee, updateConsignee, deleteConsignee, deleteconsignee, uploadconsignee } = require("../controller/consigneemaster");
const { warehousemaster, getallwarehouse, warehouseUpdate, deletewarehouse, uploadwarehouse } = require("../controller/warehousemaster");
const { storemanage, getallstock, updateStock, deleteStock, uploadstocks } = require("../controller/stock");
const { transportmaster, getallTransportmaster, updateTranportDetails, deletetransport, uploadtransport } = require("../controller/transportmaster");
const { Consignormaster, getallConsignor, deleteConsignor, updateConsignor, uploadConsignor } = require("../controller/consignormaster");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage });
//Temporary Update
router.post("/create_user_account", create_user_account);
router.post("/authenticate_user", authenticate_user);
router.post("/create_admin_account", create_admin_account);
router.post("/authenticate_admin", authenticate_admin);
router.post("/user_management", user_management);
router.post("/submit", upload.none(), submit_form);
router.get("/getallusers/:id", getallusers);
router.get("/getsingleusers/:id", getsingleusers);
router.patch("/update/:id", update);
router.patch("/deactivate/:id", deactivate);
router.delete("/lrdelete/:id", deleteReceipt);


// router.put('/update_user_metadata',  update_user_metadata);
router.get("/getallmandals", getallmandals);
router.get("/getallinfo", getallinfo);
router.patch("/forget_pass", forgetPass);
router.patch("/user/forget_pass", UserForgetPass);
router.post("/getprofile", getprofile);
// router.get("/getrecords",getRecords)
// http://localhost:5000/api/getallinfo/userData
router.post("/authenticate_partner", authenticate_partner);
router.post("/create_partner_account", create_partner_account);
router.patch("/forget_partner", forget_partner);
//API for partner
router.post("/partner/admin/login", partnerAdminLogin);
router.get("/adminaction", admin_action);
router.post("/shopData", requireSignin, upload.single("file"), uploadShopData);
router.post(
  "/upload-csv/:id",
  requireSignin,
  upload.single("csvFile"),
  uploadProductsFromCSV
);
router.patch("/adminupdate/:id", adminupdate);
router.get("/admin/allShops", getShopsData);
router.get("/specific/shopData/:id", getSpecShopData);
router.get("/partner/admin/profile/:id", getPartnerAdminProfile);
router.get("/profile/:id", getPartnerProfile);
router.get("/get/master", getMaster)
router.post("/productmaster", productmaster);
router.get("/products/:id", getallproduct);
router.delete("/productmaster/:id", deleteProduct);
router.patch("/productupdate/:id", updateProduct);
router.get("/getreceipt/:groupId/:filterType", getallreceipts);
router.post("/regenerate_receipt", regenerateReceipt);
router.patch("/update_receipt/:id", updateReceipt)
router.post("/toggle-regenerate",toggleRegenerate)
router.get("/get-regenerate-status", getRegenerateStatus)
router.post("/consigneemaster", consigneemaster);
router.get("/consignee/:id", getallConsignee);
router.patch("/consigneeupdate/:id", updateConsignee);
router.delete("/deleteconsignee/:id", deleteconsignee);
router.post("/uploadconsignee", uploadconsignee);
router.post("/uploadproducts", uploadproducts);
router.post("/warehousemaster", warehousemaster);
router.get("/getwarehouse/:id", getallwarehouse);
router.patch("/warehouseupdate/:id", warehouseUpdate);
router.delete("/deletewarehouse/:id", deletewarehouse);
router.post("/uploadwarehouse", uploadwarehouse);
router.post("/storemanage", storemanage);
router.get("/getallstock/:id", getallstock);
router.patch("/updatestock/:id", updateStock);
router.delete("/deletestock/:id", deleteStock);
router.post("/uploadstocks", uploadstocks);
router.get("/getstockout/:id", stockout)
router.post("/transportmaster", transportmaster)
router.get("/gettransportdetails/:id", getallTransportmaster)
router.patch("/updatetransport/:id", updateTranportDetails);
router.delete("/deletetransport/:id", deletetransport);
router.post("/uploadtransport", uploadtransport);
router.post("/consignormaster", Consignormaster);
router.get("/consignor/:id", getallConsignor);
router.patch("/consignorupdate/:id", updateConsignor);
router.delete("/deleteconsignor/:id", deleteConsignor);
router.post("/uploadConsignor", uploadConsignor);




module.exports = router;

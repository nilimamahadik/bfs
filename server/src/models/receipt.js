

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product_name: { type: String, trim: true },
  product_code: { type: String, trim: true },
  uom: { type: String, trim: true },
  weight: { type: String, trim: true },
  rate: { type: Number, trim: true },
  total_freight: { type: Number, trim: true },
  advance_paid: { type: Number, trim: true },
  to_pay: { type: Number },
  mt: { type: String, trim: true },
}, { _id: false });

const applySchema = new mongoose.Schema(
  {
    tran_id: { type: String, trim: true }, // Corrected name
    tran_date: { type: Date },
    productDetails: [productSchema],
    from: { type: String, trim: true },
    vendor_name: { type: String, trim: true },
    supplier_name: { type: String, trim: true },
    // mobileNo:{ type: Number, trim: true },
    mobileNo: { type: mongoose.Schema.Types.Mixed, default: "" },

    address: { type: String, trim: true },

    // Shipping Details
    ship_to_address1: { type: String, trim: true },
    ship_to_address2: { type: String, trim: true },
    ship_to_district: { type: String, trim: true },
    ship_to_city: { type: String, trim: true },
    ship_to_state: { type: String, trim: true },
    ship_to_pincode: { type: Number, trim: true }, // Changed to Number

    // Billing Details
    bill_to_address1: { type: String, trim: true },
    bill_to_address2: { type: String, trim: true },
    bill_to_district: { type: String, trim: true },
    bill_to_city: { type: String, trim: true },
    bill_to_state: { type: String, trim: true },
    bill_to_pincode: { type: Number, trim: true }, // Changed to Number

    // Transport Details
    transport_mode: { type: String, trim: true },
    transport_number: { type: String, trim: true },
    transport_driver_name: { type: String, trim: true },

    // Payment Details
    total_freight: { type: Number, trim: true }, // Changed to Number
    advance_paid: { type: Number, trim: true }, // Changed to Number
    to_pay: { type: Number, trim: true }, // Changed to Number

    receipt_number: { type: String, trim: true },
    invoice_number: { type: String, trim: true },
    sc: { type: Number, default: 0 },
    hamali: { type: Number, default: 0 },
    sch: { type: Number, default: 0 },
    total_balanceamount: { type: Number, default: 0 },
    group_id: { type: String, trim: true },
    receiver: { type: String, trim: true },
    regenerateEnabled: { type: Boolean, default: false },
    checkedValues: { type: String, required: true },
    topayrate: { type: Number, trim: true },
    topayamt: { type: Number, trim: true },
    total_amount: { type: Number, trim: true },
    deleted: { type: Boolean, default: false }, 
    deletedAt :{ type: Date },
    deleted_By: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("receipt", applySchema);



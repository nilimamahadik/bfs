



const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: String, required: true },
    warehouse: { type: String },
    date: { type: Date, default: Date.now },
    remark: { type: String },
    group_id: { type: String, trim: true },
}, { timestamps: true });

module.exports = mongoose.model("storemanage", StoreSchema);

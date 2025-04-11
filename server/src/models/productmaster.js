



const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    manufacturer: { type: String, required: true },
    name: { type: String, required: true },
    code: { type: String, required: true },
    uom: { type: String },
    rate: { type: String },
    active: {type: Boolean, default:true},
    group_id: { type: String, trim: true },
    
}, { timestamps: true });

module.exports = mongoose.model("productmaster", ProductSchema);

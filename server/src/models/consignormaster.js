



const mongoose = require("mongoose");

const ConsignorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    place: { type: String, required: true },
    district: { type: String ,required: true },
    mobileNo: { type: mongoose.Schema.Types.Mixed, default: "" },    
    maplocation: { type: String },
    group_id: { type: String, trim: true },
}, { timestamps: true });

module.exports = mongoose.model("consignormaster", ConsignorSchema);

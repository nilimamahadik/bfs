



const mongoose = require("mongoose");

const ConsigneeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    place: { type: String, required: true },
    district: { type: String, required: true },
    mobileNo: { type: mongoose.Schema.Types.Mixed, default: "" },
    maplocation: { type: String },
    group_id: { type: String, trim: true },
    consignee_hindi: { type: String, required: true },
    place_hindi: { type: String, required: true },
    district_hindi: { type: String, required: true },
    active: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model("consigneemaster", ConsigneeSchema);

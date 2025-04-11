



const mongoose = require("mongoose");

const WarehouseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    place: { type: String, required: true },
    capacity: { type: String  },
    manager: { type: String  },
    mobileNo: { type: Number },
    group_id: { type: String, trim: true },
    active: {type: Boolean, default:true},

}, { timestamps: true });

module.exports = mongoose.model("warehousemaster", WarehouseSchema);

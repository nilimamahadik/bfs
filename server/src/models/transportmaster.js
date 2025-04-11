const mongoose = require("mongoose");

const transportMasterSchema = new mongoose.Schema(
  {
   
    mobileNo: {
      type: String,
      required: false,
    },
  
    group_id: {
      type: String,
      required: true,
    },
    from: {
      type: String,
      required: true, // New field
    },
    truckNo: {
      type: String,
      required: true, // New field
    },
    truckDriverName: {
      type: String,
      required: true, // New field
    },
    transportMode: {
      type: String,
      required: true, // New field
    },
    active: {type: Boolean, default:true},

  },
  { timestamps: true }
);

module.exports = mongoose.model("TransportMaster", transportMasterSchema);
const mongoose = require("mongoose");

const applySchema = new mongoose.Schema(
  {
    businessName: {
      type: String,
      required: true,
      trim: true,
    },

    address: {
      type: String,

      required: true,
      trim: true,
    },
    mobile: {
      type: Number,

      required: true,
      trim: true,
    },
    pincode: {
      type: Number,

      required: true,
      trim: true,
    },
    city: {
      type: String,

      required: true,
      trim: true,
    },
    state: {
      type: String,

      required: true,
      trim: true,
    },
    category: {
      type: String,

      required: true,
      trim: true,
    },
    subcategory: {
      type: String,

      required: true,
      trim: true,
    },
    leadStatus: {
      type: String,

      required: true,
      trim: true,
    },
    status: {
      type: String,

      required: true,
      trim: true,
    },
    p_id:{
      type:String,
      required:true
    }
  },

  { timestamps: true }
);

module.exports = mongoose.model("upload", applySchema);

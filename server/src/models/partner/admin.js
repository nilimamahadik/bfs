const mongoose = require("mongoose");

const applySchema = new mongoose.Schema(
  {
    name: {
      type: String,

      required: true,
      trim: true,
    },

    phone: {
      type: Number,
      trim: true,
    },
    address: {
      type: String,

      required: true,
      trim: true,
    },
    pincode: {
      type: Number,

      required: true,
      trim: true,
    },
    email: {
      type: String,

      required: true,
      trim: true,
    },
    password: {
      type: String,

      required: true,
      trim: true,
    },

    active: {
      type: String,
      default: "pending",
      // required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      trim: true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("partnerAdmin", applySchema);

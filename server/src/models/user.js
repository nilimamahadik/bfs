const mongoose = require("mongoose")
const applySchema = new mongoose.Schema(

    {
        mandalname: {
            type: String,
            required: true,
            trim: true
        },

        name: {
            type: String,
            required: true,
            trim: true
        },
        phone: {
            type: Number,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        address: {
            type: String,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            trim: true
        },
        status: {
            type: String,
            required: true,
            trim: true
        },
        isActive:{ type: Boolean, default: false },
        code: {
            type: String,
            required: true,
            trim: true
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model('users', applySchema)
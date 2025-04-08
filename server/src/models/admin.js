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

        registration: {

            type: String,
            trim: true
        },
        phone: {
            type: String,
            trim: true
        },
        address: {
            type: String,

            required: true,
            trim: true

        },
        district: {
            type: String,

            required: true,
            trim: true

        },
        pincode: {

            type: String,

            required: true,
            trim: true

        },
        email: {

            type: String,

            required: true,
            trim: true

        },
        password: {

            type: String,

            required: true,
            trim: true

        },
        active: {

            type: String,

            required: true,
            trim: true

        },
        code: {
            type: String,
            required: true,
            trim: true
        }
    },

    { timestamps: true }

)

module.exports = mongoose.model('admin', applySchema)
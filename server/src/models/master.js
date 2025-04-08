const mongoose = require("mongoose")

const applySchema = new mongoose.Schema(

    {
        transportmodename: {
            type: Array
        },

        uom_code: {
            type: Array
        },

        uom_name: {
            type: Array
        },

    },

    { timestamps: true }

)

module.exports = mongoose.model('master', applySchema)

const mongoose = require("mongoose")

const applySchema = new mongoose.Schema(

    {
        regenerateEnabled: { type: Boolean, default: false },

    },

    { timestamps: true }

)

module.exports = mongoose.model('regen_state', applySchema)
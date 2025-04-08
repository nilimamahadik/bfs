

const regen_state = require("../models/status");

exports.toggleRegenerate = async (req, res) => {

    try {
        const { status } = req.body; // Get status (true/false) from frontend
        //console.log(status);

        // Update settings in database
        await regen_state.findOneAndUpdate({}, { regenerateEnabled: status }, { upsert: true });

        res.json({ success: true, regenerateEnabled: status });
    } catch (error) {
        res.status(500).json({ error: "Failed to update status" });
    }
};

exports.getRegenerateStatus = async (req, res) => {
    try {
        const settings = await regen_state.findOne({});
        res.json({ regenerateEnabled: settings?.regenerateEnabled || false });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch status" });
    }
};
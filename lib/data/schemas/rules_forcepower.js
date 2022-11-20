const mongoose = require ('mongoose');

const Rules_ForcePower = new mongoose.Schema({
    name: String,
    descriptorTag: [{_id: false, type: String, enum: ["Dark Side", "Light Side", "Mind-Affecting", "Telekinetic"]}],
    description: String,
    targets: String,
    actionTime: String,
    forceCheckTable: [{
        dc: Number,
        effect: String,
    }],
    special: String,
})

module.exports = mongoose.model("Rules_ForcePower", Rules_ForcePower);
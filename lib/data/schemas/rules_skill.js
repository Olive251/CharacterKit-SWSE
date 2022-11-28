const mongoose = require("mongoose");

const Rules_Skill = new mongoose.Schema({
    name: String,
    description: String,
    abilityId: Number,
    specialRules: [String],
    actions: [{name: String, description: String, trainedOnly: Boolean}]
})

//Set this way to avoid schema issues when starting/restarting app
try {
    module.exports = mongoose.model('Rules_Skill');
} catch (err) {
    module.exports = mongoose.model('Rules_Skill', Rules_Skill);
}
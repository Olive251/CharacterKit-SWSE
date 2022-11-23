const mongoose = require("mongoose");

const Rules_Skill = new mongoose.Schema({
    name: String,
    description: String,
    specialRules: [String],
    actions: [{name: String, description: String, trainedOnly: Boolean}]
})

if (!mongoose.models.Rules_Skill)
{
    mongoose.model("Rules_Skill", Rules_Skill);
}

export default mongoose.models.Rules_Skill 
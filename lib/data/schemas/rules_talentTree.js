const mongoose = require("mongoose");
const Rules_Talent = require("./talent.js");


const Rules_TalentTree = new mongoose.Schema({
    name: String,
    description: String,
    talents: [Rules_Talent],
})

module.exports = mongoose.model("Rules_TalentTree", Rules_TalentTree);
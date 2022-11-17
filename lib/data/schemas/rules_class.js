const mongoose = require("mongoose");
const Rules_Bonus = require("./rules_bonus.js");

const classRulesTable = new mongoose.Schema({
    _id: false,
    row: {
        classLevel: Number,
        baseAttackBonus: Number,
        classFeatures: [String],
    }
})

const classHP = new mongoose.Schema({
    _id: false,
    starting: Number,
    hitDi: String,
})

const classStartingFeats = new mongoose.Schema({
    _id: false,
    feat: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Feat'},
})

const classSkills = new mongoose.Schema({
    _id: false,
    numTrainedSkills: String,
    classSkills: [{type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}],
})

const Rules_Class = new mongoose.Schema({
    name: String,
    classTable: [classRulesTable],
    hp: classHP,
    startingFeats: [classStartingFeats],
    skills: classSkills,

})

module.exports = mongoose.model("Rules_Class", Rules_Class);
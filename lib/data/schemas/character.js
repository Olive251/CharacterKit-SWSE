const mongoose = require('mongoose');

const Character_BasicInfo = new mongoose.Schema({
    _id: false,
    name: String,
    pronouns: String,
    gender: String,
    age: Number,
    height: String,
    destiny: String,
})
const Character_Abilities = new mongoose.Schema({
    _id: false,
    strength: Number,
    dexterity: Number,
    constitution: Number,
    intelligence: Number,
    wisdom: Number,
    charisma: Number,
})
const Character_HeroClassLvl = new mongoose.Schema({
    _id: false,
    className: String,
    level: Number,
    rules: {type: mongoose.Schema.Types.ObjectId, ref: 'Rules_HeroClass'},
})
const Character_HP = new mongoose.Schema({
    _id: false,
    rolled: Number,
    current: Number,
    condition: Number,
})
const Character_Feat = new mongoose.Schema({
    _id: false,
    name: String,
    rules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Feat'},
})
const Character_Talent = new mongoose.Schema({
    _id: false,
    name: String,
    talentRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Talent'}
})
const Character_ForcePower = new mongoose.Schema({
    _id: false,
    name: String,
    forcePowerRules: {type: mongoose.Schema.Types.ObjectId, ref: 'Rules_ForcePower'}
})
const Character_Defenses = new mongoose.Schema({
    _id: false,
    fortitude: Number,
    reflex: Number,
    will: Number,
})
const Character_Skills = new mongoose.Schema({
    //MODIFIED FROM ORIGINAL SE RULESET
    //  house rules to make fewer skills for the sake of increasing individual character utility
    _id: false,
    acrobatics: {skillName: 'Acrobatics', trained: Boolean, skillFocus: Number, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	athletics: {skillName: 'Athletics', trained: Boolean, skillFocus: Number, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	deception: {skillName: 'Deception', trained: Boolean, skillFocus: Number, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	gatherInfo: {skillName: 'Gather Info', trained: Boolean, skillFocus: Number, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	initiative: {skillName: 'Initiative', trained: Boolean, skillFocus: Number, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	knowledge: [{type: String, trained: Boolean, skillFocus: Number, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}}], 
	mechanics: {skillName: 'Mechanics', trained: Boolean, skillFocus: Number, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	perception: {skillName: 'Perception', trained: Boolean, skillFocus: Number, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	persuasion: {skillName: 'Persuasion', trained: Boolean, skillFocus: Number, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	pilot: {skillName: 'Pilot', trained: Boolean, skillFocus: Number, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	ride: {skillName: 'Ride', trained: Boolean, skillFocus: Number, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	stealth: {skillName: 'Stealth', trained: Boolean, skillFocus: Number, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	survival: {skillName: 'Survival', trained: Boolean, skillFocus: Number, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	treatInjury: {skillName: 'Treat Injury', trained: Boolean, skillFocus: Number, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	useComputer: {skillName: 'Use Computer', trained: Boolean, skillFocus: Number, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	useTheForce: {skillName: 'Initiative', trained: Boolean, skillFocus: Number, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
})

const Character = new mongoose.Schema({
    basicInfo: Character_BasicInfo,
    forcePoints: Number,
    destinyPoints: Number,
    darksideScore: Number,
    abilities: Character_Abilities,
    heroClass: [Character_HeroClassLvl],
    status: Character_HP,
    defenses: Character_Defenses,
    feats: [Character_Feat],
    talents: [Character_Talent],
    skills: Character_Skills,
    forcePowers: [Character_ForcePower]
})

module.exports = mongoose.model("Character", Character);
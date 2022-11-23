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
    strength: { score: Number, abilityID: {type: Number, default: 0} },
    dexterity: { score: Number, abilityID: {type: Number, default: 1} },
    constitution: { score: Number, abilityID: {type: Number, default: 2} },
    intelligence: { score: Number, abilityID: {type: Number, default: 3} },
    wisdom: { score: Number, abilityID: {type: Number, default: 4} },
    charisma: { score: Number, abilityID: {type: Number, default: 5} },
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
const Character_Skills = new mongoose.Schema({
    //MODIFIED FROM ORIGINAL SE RULESET
    //  house rules to make fewer skills for the sake of increasing individual character utility
    _id: false,
    acrobatics: {skillName: {type: String, default: 'Acrobatics'}, trained: Boolean, skillFocus: Number, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	athletics: {skillName: {type: String, default: 'Athletics'}, trained: Boolean, skillFocus: Number, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	deception: {skillName: {type: String, default: 'Deception'}, trained: Boolean, skillFocus: Number, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	gatherInfo: {skillName: {type: String, default: 'Gather Info'}, trained: Boolean, skillFocus: Number, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	initiative: {skillName: {type: String, default: 'Initiative'}, trained: Boolean, skillFocus: Number, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	knowledge: [{detailName: String, trained: Boolean, skillFocus: Number, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}}], 
	mechanics: {skillName: {type: String, default: 'Mechanics'}, trained: Boolean, skillFocus: Number, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	perception: {skillName: {type: String, default: 'Perception'}, trained: Boolean, skillFocus: Number, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	persuasion: {skillName: {type: String, default: 'Persuasion'}, trained: Boolean, skillFocus: Number, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	pilot: {skillName: {type: String, default: 'Pilot'}, trained: Boolean, skillFocus: Number, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	ride: {skillName: {type: String, default: 'Ride'}, trained: Boolean, skillFocus: Number, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	stealth: {skillName: {type: String, default: 'Stealth'}, trained: Boolean, skillFocus: Number, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	survival: {skillName: {type: String, default: 'Survival'}, trained: Boolean, skillFocus: Number, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	treatInjury: {skillName: {type: String, default: 'Treat Injury'}, trained: Boolean, skillFocus: Number, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	useComputer: {skillName: {type: String, default: 'Use Computer'}, trained: Boolean, skillFocus: Number, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	useTheForce: {skillName: {type: String, default: 'Use The Force'}, trained: Boolean, skillFocus: Number, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
})

const Character = new mongoose.Schema({
    basicInfo: Character_BasicInfo,
    forcePoints: Number,
    destinyPoints: Number,
    darksideScore: Number,
    abilities: Character_Abilities,
    heroClass: [Character_HeroClassLvl],
    status: Character_HP,
    feats: [Character_Feat],
    talents: [Character_Talent],
    skills: Character_Skills,
    forcePowers: [Character_ForcePower]
})

module.exports = mongoose.model('Character') || mongoose.model("Character", Character);
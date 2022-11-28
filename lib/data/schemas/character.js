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
    //  Skills have a "skillAbility" which corresponds to the abilityID attribute of the character abilities
    //      this is used to determine the skill bonus of each skill
    _id: false,
    acrobatics: {skillName: {type: String, default: 'Acrobatics'}, skillAbility: {type:Number, default: 1}, trained: Boolean, skillFocus: Boolean, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	athletics: {skillName: {type: String, default: 'Athletics'}, skillAbility: {type:Number, default: 0}, trained: Boolean, skillFocus: Boolean, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	deception: {skillName: {type: String, default: 'Deception'}, skillAbility: {type:Number, default: 5}, trained: Boolean, skillFocus: Boolean, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	gatherInfo: {skillName: {type: String, default: 'Gather Info'}, skillAbility: {type:Number, default: 5}, trained: Boolean, skillFocus: Boolean, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	initiative: {skillName: {type: String, default: 'Initiative'}, skillAbility: {type:Number, default: 1}, trained: Boolean, skillFocus: Boolean, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	knowledge: [
        {detailName: {type: String, default: 'Bureaucracy'}, skillAbility: {type:Number, default: 3}, trained: Boolean, skillFocus: Boolean, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
        {detailName: {type: String, default: 'Galactic Lore'}, skillAbility: {type:Number, default: 3}, trained: Boolean, skillFocus: Boolean, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
        {detailName: {type: String, default: 'Life Sciences'}, skillAbility: {type:Number, default: 3}, trained: Boolean, skillFocus: Boolean, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
        {detailName: {type: String, default: 'Physical Science'}, skillAbility: {type:Number, default: 3}, trained: Boolean, skillFocus: Boolean, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
        {detailName: {type: String, default: 'Social Science'}, skillAbility: {type:Number, default: 3}, trained: Boolean, skillFocus: Boolean, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
        {detailName: {type: String, default: 'Tactics'}, skillAbility: {type:Number, default: 3}, trained: Boolean, skillFocus: Boolean, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
        {detailName: {type: String, default: 'Technology'}, skillAbility: {type:Number, default: 3}, trained: Boolean, skillFocus: Boolean, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}}
    ], 
	mechanics: {skillName: {type: String, default: 'Mechanics'}, skillAbility: {type:Number, default: 3}, trained: Boolean, skillFocus: Boolean, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	perception: {skillName: {type: String, default: 'Perception'}, skillAbility: {type:Number, default: 4}, trained: Boolean, skillFocus: Boolean, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	persuasion: {skillName: {type: String, default: 'Persuasion'}, skillAbility: {type:Number, default: 5}, trained: Boolean, skillFocus: Boolean, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	pilot: {skillName: {type: String, default: 'Pilot'}, skillAbility: {type:Number, default: 1}, trained: Boolean, skillFocus: Boolean, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	ride: {skillName: {type: String, default: 'Ride'}, skillAbility: {type:Number, default: 0}, trained: Boolean, skillFocus: Boolean, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	stealth: {skillName: {type: String, default: 'Stealth'}, skillAbility: {type:Number, default: 1}, trained: Boolean, skillFocus: Boolean, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	survival: {skillName: {type: String, default: 'Survival'}, skillAbility: {type:Number, default: 2}, trained: Boolean, skillFocus: Boolean, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	treatInjury: {skillName: {type: String, default: 'Treat Injury'}, skillAbility: {type:Number, default: 4}, trained: Boolean, skillFocus: Boolean, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	useComputer: {skillName: {type: String, default: 'Use Computer'}, skillAbility: {type:Number, default: 3}, trained: Boolean, skillFocus: Boolean, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
	useTheForce: {skillName: {type: String, default: 'Use The Force'}, skillAbility: {type:Number, default: 5}, trained: Boolean, skillFocus: Boolean, skillRules: {type: mongoose.Schema.Types.ObjectId, ref:'Rules_Skill'}},
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

//Set this way to avoid schema issues when starting/restarting app
try {
    module.exports = mongoose.model('Character');
} catch (err) {
    module.exports = mongoose.model('Character', Character);
}
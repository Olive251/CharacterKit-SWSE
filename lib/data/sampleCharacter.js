const mongoose = require('mongoose');
const characterModel = require('./schemas/character');

let sampleCharacter = {
    basicInfo:{
        name: "Imia Brae",
        pronouns: "she/her",
        gender: "alpha-wimbo",
        age: 24,
        height: "5\'11\"",
        destiny: "Unknown"
    },
    forcePoints: 8,
    desitinyPoints: 0,
    darksideScore: 5,
    heroClass:[{
        className: "Soldier",
        level: 6
    }],
    status: {
        rolled: 60,
        current: 89,
        condition: 0
    },
    abilities: {
        strength: 14,
        dexterity: 16,
        constitution: 15,
        intelligence: 10,
        wisdom: 16,
        charisma: 18
    },
    skills: {
        acrobatics: {skillName: 'Acrobatics', trained: false, skillFocus: 0 },
        athletics: {skillName: 'Athletics', trained: true, skillFocus: 0 },
        deception: {skillName: 'Deception', trained: false, skillFocus: 0 },
        gatherInfo: {skillName: 'Gather Info', trained: true, skillFocus: 0 },
        initiative: {skillName: 'Initiative', trained: false, skillFocus: 0 },
        knowledge: [{detailName: 'Knowledge'}],
        mechanics: {skillName: 'Mechanics', trained: false, skillFocus: 0 },
        perception: {skillName: 'Perception', trained: false, skillFocus: 0 },
        persuasion: {skillName: 'Persuasion', trained: true, skillFocus: 0 },
        pilot: {skillName: 'Pilot', trained: false, skillFocus: 0 },
        ride: {skillName: 'Ride', trained: false, skillFocus: 0 },
        stealth: {skillName: 'Stealth', trained: false, skillFocus: 0 },
        survival: {skillName: 'Survival', trained: false, skillFocus: 0 },
        treatInjury: {skillName: 'Treat Injury', trained: false, skillFocus: 0 },
        useComputer: {skillName: 'Use Computer', trained: false, skillFocus: 0 },
        useTheForce: {skillName: 'Use The Force', trained: true, skillFocus: 1 }
    },
    feats:[
        {name: "Cleave"}, {name: "Might Swing"}, {name:"Follow Through"}
    ],
    talents: [
        {name: "Burning Assault"}, {name: "Jet Pack Training"}, {name: "Consumed by Darkness"}
    ],
    forcePowers: [
        {name: "Dark Rage"},
        {name: "Absorb Energy"},
        {name: "Force Shield"},
        {name: "Move Object"},
        {name: "Far Seeing"}
    ]
}

module.exports= {sampleCharacter};
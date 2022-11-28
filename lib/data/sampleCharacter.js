// const mongoose = require('mongoose');

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
        rolled: 77,
        current: 89,
        condition: 0
    },
    abilities: {
        strength: {score: 14},
        dexterity: {score: 16},
        constitution: {score: 15},
        intelligence: {score: 10},
        wisdom: {score: 16},
        charisma: {score: 18}
    },
    skills: {
        acrobatics: {skillName: 'Acrobatics', trained: false, skillFocus: false },
        athletics: {skillName: 'Athletics', trained: true, skillFocus: false },
        deception: {skillName: 'Deception', trained: false, skillFocus: false },
        gatherInfo: {skillName: 'Gather Info', trained: true, skillFocus: false },
        initiative: {skillName: 'Initiative', trained: false, skillFocus: false },
        knowledge: [{detailName: 'Knowledge'}],
        mechanics: {skillName: 'Mechanics', trained: false, skillFocus: false },
        perception: {skillName: 'Perception', trained: false, skillFocus: false },
        persuasion: {skillName: 'Persuasion', trained: true, skillFocus: false },
        pilot: {skillName: 'Pilot', trained: false, skillFocus: false },
        ride: {skillName: 'Ride', trained: false, skillFocus: false },
        stealth: {skillName: 'Stealth', trained: false, skillFocus: false },
        survival: {skillName: 'Survival', trained: false, skillFocus: false },
        treatInjury: {skillName: 'Treat Injury', trained: false, skillFocus: false },
        useComputer: {skillName: 'Use Computer', trained: false, skillFocus: false },
        useTheForce: {skillName: 'Use The Force', trained: true, skillFocus: true }
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

export default sampleCharacter;
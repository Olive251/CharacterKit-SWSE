const Rules_Class = require('./schemas/rules_class.js');

async function buildCharacterClasses() {
    mongoose.connect(procces.env.DB_CONN,
        () => { console.log("connected to database..."); },
        (err) => console.error(`Problem connecting to the database\n${err}`)
    )

    const soldier = await Rules_Class.create({
        name: "Soldier",
        classTable: [
            {classLevel: 1, baseAttackBonus: 1, classFeatures: ["Defense Bonuses", "Starting Feats", "Talent",]},
            {classLevel: 2, baseAttackBonus: 2, classFeatures: ["Bonus Feat(Soldier)"]},
            {classLevel: 3, baseAttackBonus: 3, classFeatures: ["Talent"]},
            {classLevel: 4, baseAttackBonus: 4, classFeatures: ["Bonus Feat(Soldier)"]},
            {classLevel: 5, baseAttackBonus: 5, classFeatures: ["Talent"]},
            {classLevel: 6, baseAttackBonus: 6, classFeatures: ["Bonus Feat(Soldier)"]},
            {classLevel: 7, baseAttackBonus: 7, classFeatures: ["Talent"]},
            {classLevel: 8, baseAttackBonus: 8, classFeatures: ["Bonus Feat(Soldier)"]},
            {classLevel: 9, baseAttackBonus: 9, classFeatures: ["Talent"]},
            {classLevel: 10, baseAttackBonus: 10, classFeatures: ["Bonus Feat(Soldier)"]},
            {classLevel: 11, baseAttackBonus: 11, classFeatures: ["Talent"]},
            {classLevel: 12, baseAttackBonus: 12, classFeatures: ["Bonus Feat(Soldier)"]},
            {classLevel: 13, baseAttackBonus: 13, classFeatures: ["Talent"]},
            {classLevel: 14, baseAttackBonus: 14, classFeatures: ["Bonus Feat(Soldier)"]},
            {classLevel: 15, baseAttackBonus: 15, classFeatures: ["Talent"]},
            {classLevel: 16, baseAttackBonus: 16, classFeatures: ["Bonus Feat(Soldier)"]},
            {classLevel: 17, baseAttackBonus: 17, classFeatures: ["Talent"]},
            {classLevel: 18, baseAttackBonus: 18, classFeatures: ["Bonus Feat(Soldier)"]},
            {classLevel: 19, baseAttackBonus: 19, classFeatures: ["Talent"]},
            {classLevel: 20, baseAttackBonus: 20, classFeatures: ["Bonus Feat(Soldier)"]},
        ],
        hp: {starting: 30, hitDi: "1d10"},
        startingFeats: [],
        skills: {
            numTrainedSkills: 3
        }
    })
    await soldier.save(), () => {console.log("Soldier class saved to database...")};
       

    mongoose.connection.close(()=> {
        console.log("Disconnected from database...");
    });
}


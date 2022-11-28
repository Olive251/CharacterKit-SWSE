const {SwseDB} = require('../swseDB')
import sampleCharacter from '../data/sampleCharacter'
const mongoose = require('mongoose');

class CharacterHelper {

    constructor() {
        this._db = new SwseDB();
        this._db.initialize();
    }

    async updateSampleCharacter() {
        console.log(`updateSampleCharacter called`);
        await this._db.updateCharacter({sampleCharacter}, process.env.SAMPLE_CHARACTER_ID)
        .catch((err) => {
            console.log("Unable to update sample Character")
            console.log(err)
        });
    }

    async setSampleCharacter() {
        console.log(`setSampleCharacter() called....`);
        console.log(sampleCharacter);
        await this._db.addCharacter(sampleCharacter).catch((err) => {
            console.log('Unable to create sample character...');
            console.log(err);
        })
    }
    
    clearCharacterModels() {
        delete mongoose.modelSchemas.Character;
        delete mongoose.modelSchemas.Rules_Skill
    }
}


export default CharacterHelper;
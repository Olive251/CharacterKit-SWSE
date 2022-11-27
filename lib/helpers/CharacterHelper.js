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
        await this._db.updateCharacter({sampleCharacter}, '6379a819caad5fbb2c49bb26')
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
    
    clearCharacterModel() {
        delete mongoose.models.Character;
        delete mongoose.modelSchemas.Character;
    }
}


export default CharacterHelper;
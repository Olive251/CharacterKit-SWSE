const SwseDB = require('../swseDB')
import sampleCharacter from '../data/sampleCharacter'
const mongoose = require('mongoose');

class CharacterHelper {

    constructor() { 
        this._db = new SwseDB();
    }

    async initialize(){
        try{
            await this.clearCharacterModels();
         } 
         catch (err) {
             console.log("Unable to clear older schemas");
         }
        await this._db.initialize();
        
    }

    async updateSampleCharacter() {
        console.log(`updateSampleCharacter called`);
        let character = await this._db.updateCharacter({sampleCharacter}, process.env.SAMPLE_CHARACTER_ID)
        .catch((err) => {
            console.log("Unable to update sample Character")
            console.log(err)
        });

        return character;
    }

    async setSampleCharacter() {
        console.log(`setSampleCharacter() called....`);
        await this._db.addCharacter(sampleCharacter).catch((err) => {
            console.log('Unable to create sample character...');
            console.log(err);
        })
    }
    
    async clearCharacterModels() {
        delete mongoose.modelSchemas.Character;
        delete mongoose.modelSchemas.Rules_Skill
    }
}


export default CharacterHelper;
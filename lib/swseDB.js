const mongoose = require('mongoose');
const {Character} = require('../lib/data/schemas/character')

module.exports = class SwseDB {

  constructor(){
    this._Character = null;
  };

  async initialize(connectionString) {
    const db = await mongoose.connect(connectionString)
  };

  closeDB(){
    mongoose.connection.close();
  }

  async listCharacters() {
    this._Character =  Character;
    const rv = await this._Character.find({});
    return rv;
  }
  async addCharacter(data) {
    this._Character = new Character(data);
    this._Character.save();
  }
  async updateCharacter(data) {
    return this._Character.updateOne({ _id: id }, { $set: data }).exec();
  }
  getCharacterById(id) {
    this._Character =  Character;
    return this._Character.findOne({ _id: id }).exec();
  }
  

};


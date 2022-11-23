const mongoose = require('mongoose');
import Rules_Skill from '../lib/data/schemas/rules_skill'
import {Character} from '../lib/data/schemas/character';

class SwseDB {

  constructor(){
    this._Skill = mongoose.models.Rules_Skill;
    this._Character = mongoose.models.Character;
    this._Cached = global.mongoose;
    if (!this._Cached){
      this._Cached = global.mongoose = { conn: null, promise: null };
    }
  };
//Character ==============================================================================//
  async initialize(connectionString = process.env.DB_CONN) {

    if (this._Cached.conn) {
      return this._Cached.conn
    }

    if (!this._Cached.promise) {
      const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        bufferCommands: false
      }

      this._Cached.promise = mongoose.connect(connectionString, opts).then(mongoose => {
        return mongoose
      })
    }

    this._Cached.conn = await this._Cached.promise
    return this._Cached.conn
  };
  closeDB(){
    mongoose.connection.close();
  }
  async listCharacters() {
    this._Character =  mongoose.models.Character;
    const rv = await this._Character.find({});
    return rv;
  }
  async addCharacter(data) {
    this._Character = mongoose.models.Character(data);
    this._Character.save();
  }
  async updateCharacter(data, id) {
    return this._Character.updateOne({ _id: id }, { $set: data }).exec();
  }
  async getCharacterById(id) {
    const character = await this._Character.findOne({ _id: id }).exec();
    return character
  }
//==========================================================================================//

//Skills ===================================================================================//
  async addSkill(data) {
    this._Skill = mongoose.models.Rules_Skill(data);
    this._Skill.save();
  }
  async updateSkill(id, data) {
    return this._Skill.updateOne({ _id: id }, { $set: data }).exec();
  }
  async getSkillByName(name) {
    const skill = await this._Skill.findOne({name: name}).exec();
    return skill;
  }
  async getSkillById(id) {
    console.log("get skill id called with id: " + id)
    const skill = await this._Skill.findById(id);
    return skill;
  }
  async getAllSkills() {
    const skills = await this._Skill.find({});
    return skills;
  }
//==========================================================================================//

};

export default SwseDB;
module.exports = SwseDB;   
const mongoose = require('mongoose');
//const {Character} = require('../lib/data/schemas/character')
import {Character} from '../lib/data/schemas/character';

module.exports = class SwseDB {

  constructor(){
    this._Character = mongoose.models.Character;
    this._Cached = global.mongoose;
    if (!this._Cached){
      this._Cached = global.mongoose = { conn: null, promise: null };
    }
  };

  async initialize(connectionString) {

    if (this._Cached.conn) {
      return this._Cached.conn
    }

    if (!this._Cached.promise) {
      const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        bufferCommands: false,
        bufferMaxEntries: 0,
        useFindAndModify: true,
        useCreateIndex: true
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
  async getCharacterById(id) {
    const rv = await this._Character.find({ _id: id }).exec();
    return rv
  }

};


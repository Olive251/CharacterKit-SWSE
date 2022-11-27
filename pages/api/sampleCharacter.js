const {SwseDB} = require('../../lib/swseDB')
import CharacterHelper from '../../lib/helpers/CharacterHelper'
import mongoose from 'mongoose';


let db = new SwseDB();
let characterHelper = new CharacterHelper();
const DBC = process.env.DB_CONN


export default async function handler(req, res) {

    await db.initialize(DBC).catch((err) => {
        console.log("Unable to connect to DB");
        console.log(err);
    });

    try {
        
        await db.getCharacterById('637e94e7f01dd700dad586bc')
        .then((data) => {
          res.status(200).json(data);
      })
    } catch (error) {
        console.log(error)
          res.status(400).json({error: error.message})
    }
}
  
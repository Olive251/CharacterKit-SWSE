import SwseDB from '../../lib/swseDB';
import {sampleCharacter} from '../../lib/data/sampleCharacter';
import mongoose from 'mongoose';

let db = new SwseDB();
const DBC = process.env.DB_CONN


export default async function handler(req, res) {

    await db.initialize(DBC).catch((err) => {
        console.log("Unable to connect to DB");
        console.log(err);
    });

    try {
        await db.getCharacterById('6379a819caad5fbb2c49bb26')
        .then((data) => {
          res.status(200).json(data);
      })
    } catch (error) {
        console.log(error)
          res.status(400).json({error: error.message})
    }
}
  
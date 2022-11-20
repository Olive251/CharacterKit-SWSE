import SwseDB from '../../lib/swseDB'

let db = new SwseDB();
const DBC = process.env.DB_CONN


export default async function handler(req, res) {

    await db.initialize(DBC).catch((err) => {
        console.log("Unable to connect to DB");
        console.log(err);
    });

    try {
        await db.getCharacterById('637861cb8b05c74005dd0dae')
        .then((data) => {
            console.log(data);
          res.status(200).json(data);
      })
    } catch (error) {
        console.log(error)
          res.status(400).json({error: error.message})
    }
}
  
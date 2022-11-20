import SwseDB from '../../lib/swseDB'

let db = new SwseDB();
db.initialize(process.env.DB_CONN).catch((err) => {
    console.log("Unable to connect to DB");
    console.log(err);
})

export default function handler(req, res) {
    try {
        db.getCharacterById('637861cb8b05c74005dd0dae')
        .then((data) => {
          res.status(200).json(data);
      })
    } catch (error) {
          res.status(400).json({error: error.message})
    }
}
  
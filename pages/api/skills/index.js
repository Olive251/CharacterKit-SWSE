import SkillSetter from '../../../lib/helpers/setSkills'
import SwseDB from '../../../lib/swseDB'

//let skillsDB = new SkillSetter();
let db = new SwseDB();

//This is the base api/skills page
export default async function handler(req, res) {
    try {

      await db.initialize();

      await db.getAllSkills()
      .then((data) => {
        res.status(200).json(data);
      });
             
    } 
    catch (error) {
      console.log(error);
      res.status(400).json({error: error.message});
    }
}
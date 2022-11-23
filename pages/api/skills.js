import SkillSetter from '../../lib/helpers/setSkills'

let skillsDB = new SkillSetter();


export default async function handler(req, res) {



    try {
        await skillsDB.setUseTheForce()
        .then((data) => {
          res.status(200).json(data);
      })
    } catch (error) {
        console.log(error)
          res.status(400).json({error: error.message})
    }
}
import SwseDB from '../swseDB'


class SkillSetter {
    _DB:SwseDB;

    constructor() {
        this._DB = new SwseDB();
    }

    async skillExists(name){
        await this._DB.initialize();

        let check = await this._DB.getSkillByName(name).catch(
            (err) => {
                console.log(`Unable to confirm if ${name} already exists in Skills_Rules...`)
                console.log(err);
            }
        );

        if (check && check.name === name) {
            return true;
        } else return false;
    }

    async setUseTheForce(){
        let skill = {
            name: 'Use The Force',
            ability: 'charisma',
            description: 'You draw upon The Force to help you recover from injuries, gain special insights, or perform other remarkable acts. You must have the Force Sensitivity feat to be Trained in this skill.',
            specialRules: ['Requires Force Sensitivity Feat to make Use The Force checks'],
            actions: [
                {
                    name: "Force Trance",
                    description: "As a Full-Round Action, you can enter a Force Trance with a DC 10 Use the Force check. In this state, you remain fully aware of your surroundings. Each hour you remain in the trance, you regain a number of Hit Points equal to your Character Level. You can emerge from the trance as a Swift Action. If you remain in a Force Trance for 4 consecutive hours, you emerge from the trance fully rested (as though you'd rested for 8 hours",
                    trainedOnly: true
                },
                {
                    name: "Move Light Object",
                    description: "",
                    trainedOnly: true
                },
                {
                    name: "Search Your Feelings",
                    description: "",
                    trainedOnly: false
                },
                {
                    name: "Sense Force",
                    description: "",
                    trainedOnly: true
                },
                {
                    name: "Sense Surroundings",
                    description: "",
                    trainedOnly: false
                },
                {
                    name: "Telepathy",
                    description: "",
                    trainedOnly: false
                }
            ]
        }

        if (await this.skillExists(skill.name)){
            this._DB.updateSkill('637a8725a4f2981899a25c53', skill)
            .then(() => {`Skill updated: ${skill}`});
        } else {
            this._DB.addSkill(skill);
        }
    }
}

export default SkillSetter;
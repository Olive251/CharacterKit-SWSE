import styles from '../../styles/CharacterSheet.module.css';
import {useState, useEffect} from 'react';

const SkillsRow = ({character, skill, index}) => {

    
    const [abilityMod] = useState();
    //TODO be able to calculate total level from multiple class sources
    const [halfLvl] = useState(Math.floor(character.heroClass[0].level/2))
    //TODO - fully set up database to continue.
    //  Need to have skills connected to abilities
    //  Skill training should come to feats or classes instead of integral part
    const [skillBonus] = useState();

    return(
    <tr key={index+1}>
        <td className={styles.boldCell}>{skill.skillName}</td>
        <td></td>
        <td>{halfLvl}</td>
        <td></td>
        <td className={styles.skillCardBubble}>       </td>
        <td className={styles.skillCardBubble}>       </td>
        <td className={styles.skillCardBubble}>       </td>
    </tr>
    )
}

const SkillsBody = ({character}) => {

    var skillArr = [];
    var skills = character.skills;
    Object.keys(skills).forEach((key, index) => {
        skillArr.push(skills[key]);
    })
    
    var spliceEntry;
    skillArr.map((skill, index) => { 

        if (Array.isArray(skill)){

            spliceEntry = index;

            skill.map(knSkill => {   
                console.log(knSkill);             
                skillArr.splice(index, 0, knSkill);
            })
        }
    });

    skillArr.splice(spliceEntry,1);

    const [_skill] = useState([...new Set(skillArr)]);
    
    return (
        <tbody>
            {_skill.map((skill, index) => {
                if (skill.skillName)
                    return(<SkillsRow character={character} skill={skill} index={index}/>)
            })}
        </tbody>
    )
    
}

const SkillsCard = ({character}) => {
    
    const [_character] = useState(character);

    return (
        <table className={styles.longCard}id={styles.skillCard}>
            <thead>
                <tr key={0}>
                    <th>Skill</th>
                    <th>Skill Bonus</th>
                    <th>1/2 Level</th>
                    <th>Abilitiy Mod</th>
                    <th>Trained</th>
                    <th>Skill Focus</th>
                    <th>Misc</th>
                </tr>                
            </thead>            
            <SkillsBody character={_character}/>
        </table>
    )
}

export default SkillsCard;
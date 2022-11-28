//TODOs
//  -Change SkillsRow component to pull training and focus from feats instead of stored skill data
//      -blocker: feat data needs to be added
//  -Get misc bonus from equipment bonuses
//      -blocker: equipment data needs to be working

import styles from '../../styles/CharacterSheet.module.css';
import {useState, useEffect} from 'react';
import {atom, useAtom, Provider} from "jotai";
import { getModifier } from '../../lib/helpers/getModifier';

const SkillBubble = ({fill}) => {
    console.log(fill)
    const [style, setStyle] = useState()

    useEffect(() => {
        if (fill === true) setStyle(styles.skillCardBubbleFilled);
        else setStyle(styles.skillCardBubble);
    }, [])

    return (
        <td className={`${style}`}>       </td>
    )
}


const SkillsRow = ({character, skill, index}) => {

    const [abilityMod, setAbilityMod] = useState();
    const [halfLvl] = useState(Math.floor(character.heroClass[0].level/2))
    const [skillBonus, setSkillBonus] = useState();

    useEffect( () => {
        var bonus = 0;
        if (skill.trained) bonus += 5;
        if (skill.skillFocus) bonus += 5;
        bonus += halfLvl;

        const abilities = Object.entries(character.abilities);
        abilities.forEach(([key, value]) => {
            if (value.abilityID == skill.skillAbility){
                setAbilityMod( getModifier(value.score));
            }
        })

        bonus += abilityMod;

        setSkillBonus(bonus);
    }, [])

    return(
    <tr key={index+1}>
        <td className={styles.boldCell}>{skill.skillName}</td>
        <td className={styles.skillBonusCell}>{skillBonus}</td>
        <td>{halfLvl}</td>
        <td>{abilityMod}</td>
        <SkillBubble fill={skill.trained}/>
        <SkillBubble fill={skill.skillFocus}/>
        <td></td>
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
                skillArr.splice(index, 0, knSkill);
            })
        }
    });

    skillArr.splice(spliceEntry,1);

    const [_skill] = useState([...new Set(skillArr)]);
    
    return (
        <>
        <tbody>
            {_skill.map((skill, index) => {
                if (skill.skillName)
                    return(<SkillsRow character={character} skill={skill} index={index}/>)
            })}
        </tbody>
        </>
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
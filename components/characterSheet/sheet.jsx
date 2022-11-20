import styles from '../../styles/CharacterSheet.module.css';
import BasicInfo from './BasicInfo';
import HeroClassLvl from './heroClassLvl';
import HP from './hp';
import AbilitiesCard from './AbilitiesCard';
import SkillsCard from './SkillsCard';
//import {atom, useAtom, Provider} from "jotai";

const Sheet = ({character}) => {

    if (character != undefined)
    {
        return (
            <div className={styles.sheet}>
                
    
                <BasicInfo basicInfo={character.basicInfo}/>
                <AbilitiesCard abilities={character.abilities}/>
                <HeroClassLvl heroClass={character.heroClass}/>
                
                <HP status={character.status}/>
                
                <SkillsCard character={character}/>
    
            </div>
        )
    } else {
        return (
            <div>
                <h2>PROBLEM LOADING SAMPLE SET</h2>
            </div>
        )
    }

    
}

export default Sheet;
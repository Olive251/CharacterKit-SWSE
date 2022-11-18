import styles from '../../styles/CharacterSheet.module.css';
import BasicInfo from './BasicInfo';
import HeroClassLvl from './heroClassLvl';
import HP from './hp';
import AbilitiesCard from './AbilitiesCard';
import SkillsCard from './SkillsCard';
//import {atom, useAtom, Provider} from "jotai";

const Sheet = ({character}) => {

    const basicInfo = character.basicInfo;

    return (
        <div className={styles.sheet}>
            

            <BasicInfo basicInfo={basicInfo}/>
            <AbilitiesCard abilities={character.abilities}/>
            <HeroClassLvl heroClass={character.heroClass}/>
            
            <HP status={character.status}/>
            
            <SkillsCard character={character}/>

            
        </div>
    )
}

export default Sheet;
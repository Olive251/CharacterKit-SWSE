import styles from '../../styles/CharacterSheet.module.css';
import BasicInfo from './BasicInfo';
import HeroClassLvl from './heroClassLvl';
import StatCard from './StatCard';
import AbilitiesCard from './AbilitiesCard';
import SkillsCard from './SkillsCard';


const Sheet = ({character}) => {

    
    return (
        <div className={styles.sheet}>
            

            <BasicInfo basicInfo={character.basicInfo}/>
            <AbilitiesCard abilities={character.abilities}/>
            <HeroClassLvl heroClass={character.heroClass}/>
            
            <StatCard character={character}/>
            
            <SkillsCard character={character}/>

        </div>
    )
    

    
}

export default Sheet;
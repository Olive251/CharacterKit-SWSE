import styles from '../../styles/CharacterSheet.module.css';
import {useState, useEffect} from 'react';
import BasicInfo from './BasicInfo';
import HeroClassLvl from './heroClassLvl';
import HP from './hp';
import AbilitiesCard from './AbilitiesCard';

const Sheet = ({character}) => {
    
    const basicInfo = character.basicInfo;
    const abilities = character.abilities;

    return (
        <div className={styles.sheet}>
            <AbilitiesCard abilities={character.abilities}/>
            
            <BasicInfo basicInfo={basicInfo}/>

            <HeroClassLvl heroClass={character.heroClass}/>

            <HP hp={character.hp}/>

            
        </div>
    )
}

export default Sheet;
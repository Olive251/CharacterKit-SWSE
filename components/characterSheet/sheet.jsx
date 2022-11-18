import styles from '../../styles/CharacterSheet.module.css';
import {useState, useEffect} from 'react';
import BasicInfo from './BasicInfo';
import HeroClassLvl from './heroClassLvl';
import HP from './hp';
import AbilitiesCard from './AbilitiesCard';
//import {atom, useAtom, Provider} from "jotai";

const Sheet = ({character}) => {
    console.log(character);

    
    const basicInfo = character.basicInfo;
    const abilities = character.abilities;

    return (
        <div className={styles.sheet}>
            

            <BasicInfo basicInfo={basicInfo}/>
            <AbilitiesCard abilities={character.abilities}/>
            <HeroClassLvl heroClass={character.heroClass}/>
            <HP hp={character.hp}/>

            
        </div>
    )
}

export default Sheet;
import styles from '../../styles/CharacterSheet.module.css';
import {useState, useEffect} from 'react';
import BasicInfo from './BasicInfo';
import HeroClassLvl from './heroClassLvl';
import HP from './hp';

const Sheet = ({character}) => {
    
    const basicInfo = character.basicInfo;

    return (
        <div className={styles.sheet}>
            <BasicInfo basicInfo={basicInfo}/>

            <HeroClassLvl heroClass={character.heroClass}/>

            <HP hp={character.hp}/>
        </div>
    )
}

export default Sheet;
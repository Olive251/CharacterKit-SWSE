import styles from '../../styles/CharacterSheet.module.css';
import {useState, useEffect} from 'react';
import HitPointsCard from './hitPointsCard';


const HP = ({hp}) => {
    let HP = hp;
    return (
        <div className={styles.section}>
            <HitPointsCard hp={HP}/>

            
        </div>
    )
}

export default HP;
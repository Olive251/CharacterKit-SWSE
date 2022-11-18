import styles from '../../styles/CharacterSheet.module.css';
import {useState, useEffect} from 'react';
import HitPointsCard from './hitPointsCard';
import ConditionTracker from './ConditionTracker';


const HP = ({hp}) => {
    let HP = hp;
    let condition = hp.condition;

    return (
        <div className={styles.section}>
            <HitPointsCard hp={HP}/>
            <ConditionTracker condition={condition}/>
        </div>
    )
}

export default HP;
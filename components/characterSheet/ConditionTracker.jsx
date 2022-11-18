import styles from '../../styles/CharacterSheet.module.css';
import {useState, useEffect} from 'react';

const ConditionTracker = ({condition}) => {    

    return(
        <div className={styles.conditionTracker}>
            
            <div className={styles.conditionCard}>
            <h3>Normal</h3>
            <button onClick={()=> {

            }}> </button>
        </div>
        </div>
    )
}

export default ConditionTracker;
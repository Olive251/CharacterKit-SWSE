import styles from '../../styles/CharacterSheet.module.css';
import {useState, useEffect} from 'react';

const ConditionTracker = ({condition}) => {    

    return(
        <div className={styles.conditionTracker}>
            
            <div className={styles.conditionCard}>
            <h3>Normal</h3>
            <button onClick={()=> { console.log("set condition: Normal")}}> </button>
            </div>
            
            <div className={styles.conditionCard}>
                <h3>-1</h3>
                <button onClick={()=> { console.log("set condition: -1")}}> </button>
            </div>

            <div className={styles.conditionCard}>
                <h3>-2</h3>
                <button onClick={()=> { console.log("set condition: -2") }}> </button>
            </div>

            <div className={styles.conditionCard}>
                <h3>-5</h3>
                <button onClick={()=> { console.log("set condition: -5") }}> </button>
            </div>

            <div className={styles.conditionCard}>
                <h3>-10</h3>
                <button onClick={()=> { console.log("set condition: -10") }}> </button>
            </div>

            <div className={styles.conditionCard}>
                <h3>Helpless</h3>
                <p>Unconscious</p>
                <button onClick={()=> { console.log("set condition: Helpless") }}> </button>
            </div>
        </div>
        
    )
}

export default ConditionTracker;
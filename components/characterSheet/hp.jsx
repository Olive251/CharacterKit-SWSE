import styles from '../../styles/CharacterSheet.module.css';
import {useState, useEffect} from 'react';
import {atom, useAtom, Provider} from "jotai";

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

const HitPointsCard = ({hp}) => {

    const [currentHP, setCurrentHP] = useState(hp.current);
    const [healthMod, setHealthMod] = useState(0);

    const handleChange = (e) => {
        setHealthMod(e.target.value)
    }

    return (
        <div className={styles.hpCard}>

            <h4>Hit Points</h4>
            
            <div className={styles.currentHPDisplay}>
                <table>
                    <thead>
                        <tr>
                            <th>Current</th>
                            <th>Max</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{currentHP}</td>
                            <td>{hp.maxHP}</td>
                        </tr>
                    </tbody>
                </table>
            </div>            
            <br/>

            <button onClick={() => {
                setCurrentHP(currentHP - healthMod);
            }}>Damage</button>

            <form action="">
                <input type="text" id='modifyCurrentHp' name="modify current HP" value={healthMod} onChange={handleChange}/>
            </form>


            <button onClick={() => {
                setCurrentHP(parseInt(currentHP) + parseInt(healthMod));
            }}>Heal</button>
            
        </div>
    )
}

const HP = ({status}) => {
    
    const [_status, setStatus] = useState(status)
    
    //useEffect(() => {setCondition(hp.condition)},[])

    return (
        <div className={styles.section}>
            <HitPointsCard hp={_status}/>
            <ConditionTracker condition={_status.condition}/>
        </div>
    )
}

export default HP;
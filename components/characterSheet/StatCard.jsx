//TODO
//  -add functionality to condition tracker
//      -On click should modify all bonuses on character sheet and show colored aura representing level down on the tracker

import styles from '../../styles/CharacterSheet.module.css';
import {useState, useEffect} from 'react';
import {atom, useAtom, useSetAtom} from "jotai";
import {sampleCharacter, setCondition} from '../../lib/store'
const {getModifier} = require('../../lib/helpers/getModifier')


const ConditionTracker = ({condition}) => {    


    return(
        <div className={styles.conditionTracker}>
            
            <div className={styles.conditionCard}>
            <h3>Normal</h3>
            <button onClick={()=> { console.log("set condition: Normal")}}> </button>
            </div>
            
            <div className={styles.conditionCard}>
                <h3>-1</h3>
                <button onClick={()=> {
                    console.log("set condition: -1");
                    console.log(`Character condition is ${characterAtom[0].status.condition}`)
                }}> 
                </button>
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

const HitPointsCard = ({hp, hpBonus}) => {

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
                            <td>{hp.rolled + hpBonus}</td>
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

const StatCard = ({character}) => {
    
    const [_status] = useState(character.status)
    const [_hpBonus] = useState(getModifier(character.abilities.constitution.score) * character.heroClass[0].level);

    return (
        <div className={styles.section}>
            <HitPointsCard hp={_status} hpBonus={_hpBonus}/>
            <ConditionTracker condition={_status.condition}/>
        </div>
    )
}

export default StatCard;
import styles from '../../styles/CharacterSheet.module.css';
import {useState, useEffect} from 'react';

const HitPointsCard = ({hp}) => {

    const [currentHP, setCurrentHP] = useState(hp.current);
    const [healthMod, setHealthMod] = useState(0);

    const handleChange = (e) => {
        setHealthMod(e.target.value)
    }

    //TODO change current HP display into a table
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

export default HitPointsCard;
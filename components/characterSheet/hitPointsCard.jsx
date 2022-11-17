import styles from '../../styles/CharacterSheet.module.css';
import {useState, useEffect} from 'react';

const HitPointsCard = ({hp}) => {

    const [currentHP, setCurrentHP] = useState(hp.current);
    const [healthMod, setHealthMod] = useState(0);

    const handleChange = (e) => {
        setHealthMod(e.target.value)
    }

    return (
        <div className={styles.hpCard}>
            
            <div className={styles.currentHPDisplay}>
                <h3>{currentHP}/{hp.maxHP}</h3>
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
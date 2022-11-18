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

            <h4>Hit Points</h4>
            
            <div className={styles.currentHPDisplay}>
                <p>CURRENT</p><br/>
                <h3>{currentHP}</h3><br/><h3>/</h3><br/><h3>{hp.maxHP}</h3>
                <br/><p>MAX</p>
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
import styles from '../../styles/CharacterSheet.module.css';
import {useState, useEffect} from 'react';



const HitPointsCard = ({hp}) => {

    const [currentHP, setCurrentHP] = useState(hp.current);
    useEffect( ()=> {
        
    });

    return (
        <div className={styles.hpCard}>
            
            <div className={styles.currentHPDisplay}>
                <h3>{currentHP}/{hp.maxHP}</h3>
            </div>            
            <br/>

            <button onClick={(e) => {
                setCurrentHP(currentHP - 1);
            }}>Damage</button>

            <input type="text" id='modifyCurrentHp' name="modify current HP"/>


            <button onClick={(e) => {
                setCurrentHP(currentHP + 1);
            }}>Heal</button>
            
        </div>
    )
}

export default HitPointsCard;
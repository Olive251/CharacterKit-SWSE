import styles from '../../styles/CharacterSheet.module.css';
import {useState, useEffect} from 'react';

const  getModifier = (score) => {
    //
    var modifier;
    
    if (score >= 10) {
        score = score -10;
        modifier = Math.floor(score/2);
    }
    return modifier;
}

const AbilitiesCard = (abilities) => {
    
    var abilities = abilities.abilities;

    const [strength, setStrength] = useState();
    const [strMod, setStrMod] = useState();

    const [dexterity, setDex] = useState();
    const [dexMod, setDexMod] = useState();

    useEffect( () => {
        setStrength(abilities.strength);
        let mod = getModifier(abilities.strength);
        setStrMod(mod);

        setDex(abilities.dexterity);
        mod = getModifier(abilities.dexterity);
        setDexMod(mod);
    }, [])

    return (
        <div className={styles.abilitiesCard}>
            <table>
                <thead>
                    <tr>
                        <th> </th>
                        <th>Score</th>
                        <th>Modifier</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={styles.boldCell}>Strength</td>
                        <td>{strength}</td>
                        <td>{strMod}</td>
                    </tr>
                    <tr>
                        <td className={styles.boldCell}>Dexterity</td>
                        <td>{dexterity}</td>
                        <td>{dexMod}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AbilitiesCard;
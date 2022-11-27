import styles from '../../styles/CharacterSheet.module.css';
import {useState, useEffect} from 'react';
import {getModifier} from '../../lib/helpers/getModifier'


const AbilitiesCard = (abilities) => {
    
    var abilities = abilities.abilities;

    const [strength, setStrength] = useState();
    const [strMod, setStrMod] = useState();

    const [dexterity, setDex] = useState();
    const [dexMod, setDexMod] = useState();

    const [constitution, setCon] = useState();
    const [conMod, setConMod] = useState();

    const [intelligence, setInt] = useState();
    const [intMod, setIntMod] = useState();

    const [wisdom, setWis] = useState();
    const [wisMod, setWisMod] = useState();

    const [charisma, setCha] = useState();
    const [chaMod, setChaMod] = useState();

    useEffect( () => {
        setStrength(abilities.strength.score);
        let mod = getModifier(abilities.strength.score);
        setStrMod(mod);

        setDex(abilities.dexterity.score);
        mod = getModifier(abilities.dexterity.score);
        setDexMod(mod);

        setCon(abilities.constitution.score);
        mod = getModifier(abilities.constitution.score);
        setConMod(mod);

        setInt(abilities.intelligence.score);
        mod = getModifier(abilities.intelligence.score);
        setIntMod(mod);

        setWis(abilities.wisdom.score);
        mod = getModifier(abilities.wisdom.score);
        setWisMod(mod);

        setCha(abilities.charisma.score);
        mod = getModifier(abilities.charisma.score);
        setChaMod(mod);
    }, [])

    return (
        <div className={styles.longCard} id={styles.abilitiesCard}>
            <h3>Abilities</h3>
            <table>
                <thead>
                    <tr>
                        <th></th>
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
                    <tr>
                        <td className={styles.boldCell}>Constitution</td>
                        <td>{constitution}</td>
                        <td>{conMod}</td>
                    </tr>
                    <tr>
                        <td className={styles.boldCell}>Intelligence</td>
                        <td>{intelligence}</td>
                        <td>{intMod}</td>
                    </tr>
                    <tr>
                        <td className={styles.boldCell}>Wisdom</td>
                        <td>{wisdom}</td>
                        <td>{wisMod}</td>
                    </tr>
                    <tr>
                        <td className={styles.boldCell}>Charisma</td>
                        <td>{charisma}</td>
                        <td>{chaMod}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AbilitiesCard;
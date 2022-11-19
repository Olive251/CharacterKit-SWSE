import styles from '../../styles/CharacterSheet.module.css';
import {useState, useEffect} from 'react';
import {getModifier} from '../../helpers/getModifier'


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
        setStrength(abilities.strength);
        let mod = getModifier(abilities.strength);
        setStrMod(mod);

        setDex(abilities.dexterity);
        mod = getModifier(abilities.dexterity);
        setDexMod(mod);

        setCon(abilities.constitution);
        mod = getModifier(abilities.constitution);
        setConMod(mod);

        setInt(abilities.intelligence);
        mod = getModifier(abilities.intelligence);
        setIntMod(mod);

        setWis(abilities.wisdom);
        mod = getModifier(abilities.wisdom);
        setWisMod(mod);

        setCha(abilities.charisma);
        mod = getModifier(abilities.charisma);
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
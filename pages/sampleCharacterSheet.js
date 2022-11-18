import Head from 'next/head';
import styles from '../styles/CharacterSheet.module.css';
import Sheet from '../components/characterSheet/sheet';
import {useState, useEffect} from 'react';

const CharacterSheet = () => {

    const [character, setCharacter] = useState({
        basicInfo:{
            name: "Imia Brae",
            pronouns: "she/her",
            gender: "alpha-wimbo",
            age: 24,
            height: "5\'11\"",
            destiny: "Unknown",
        },
        heroClass:[{
            className: "Soldier",
            level: 6,
        },],
        hp: {
            maxHP: 89,
            current: 89,
            condition: 0,
        },
    });

    return(
        <div className={styles.container}>
            <Head>
                    <title>{`${character.basicInfo.name} - Character Sheet`}</title>
                    <meta name= "SWSE Character Sheet" content= "Character Sheet"/>
                    <link rel="icon" href="/favicon.ico" />
            </Head>
        <main>
            <Sheet character={character}/>
        </main>        
        </div>
    )
}

export default CharacterSheet;
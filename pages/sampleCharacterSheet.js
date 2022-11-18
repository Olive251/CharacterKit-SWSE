import Head from 'next/head';
import styles from '../styles/CharacterSheet.module.css';
import Sheet from '../components/characterSheet/sheet';
import {atom, useAtom, Provider} from "jotai";
import {useState, useEffect} from 'react';

const orig_sampleCharacter = atom({
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
    abilities: {
        strength: 14,
        dexterity: 16,
        constitution: 15,
        intelligence: 10,
        wisdom: 16,
        charisma: 18,
    },
    skills: {
        acrobatics: {trained: false, skillFocus: 0 },
        athletics: {trained: true, skillFocus: 0 },
        deception: {trained: false, skillFocus: 0 },
        gatherInfo: {trained: true, skillFocus: 0 },
        initiative: {trained: false, skillFocus: 0 },
        knowledge: [{}],
        mechanics: {trained: false, skillFocus: 0 },
        perception: {trained: false, skillFocus: 0 },
        persuasion: {trained: true, skillFocus: 0 },
        pilot: {trained: false, skillFocus: 0 },
        ride: {trained: false, skillFocus: 0 },
        stealth: {trained: false, skillFocus: 0 },
        survival: {trained: false, skillFocus: 0 },
        treatInjury: {trained: false, skillFocus: 0 },
        useComputer: {trained: false, skillFocus: 0 },
        useTheForce: {trained: true, skillFocus: 1 },
    },
});
const sampleCharacter = atom((get) => get(orig_sampleCharacter));

const CharacterSheet = () => {

    const [character, setCharacter] = useAtom(sampleCharacter);

    return(
        <div className={styles.container}>
            <Head>
                    <title>{`${character.basicInfo.name} - Character Sheet`}</title>
                    <meta name= "SWSE Character Sheet" content= "Character Sheet"/>
                    <link rel="icon" href="/favicon.ico" />
            </Head>
            <Provider>
                <Sheet character={character}/>
            </Provider>        
        </div>
    )
}

export default CharacterSheet;
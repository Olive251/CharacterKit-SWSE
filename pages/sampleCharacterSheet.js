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
    status: {
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
        acrobatics: {skillName: 'Acrobatics', trained: false, skillFocus: 0 },
        athletics: {skillName: 'Athletics', trained: true, skillFocus: 0 },
        deception: {skillName: 'Deception', trained: false, skillFocus: 0 },
        gatherInfo: {skillName: 'Gather Info', trained: true, skillFocus: 0 },
        initiative: {skillName: 'Initiative', trained: false, skillFocus: 0 },
        knowledge: [{skillName: 'Knowledge'}],
        mechanics: {skillName: 'Mechanics', trained: false, skillFocus: 0 },
        perception: {skillName: 'Perception', trained: false, skillFocus: 0 },
        persuasion: {skillName: 'Persuasion', trained: true, skillFocus: 0 },
        pilot: {skillName: 'Pilot', trained: false, skillFocus: 0 },
        ride: {skillName: 'Ride', trained: false, skillFocus: 0 },
        stealth: {skillName: 'Stealth', trained: false, skillFocus: 0 },
        survival: {skillName: 'Survival', trained: false, skillFocus: 0 },
        treatInjury: {skillName: 'Treat Injury', trained: false, skillFocus: 0 },
        useComputer: {skillName: 'Use Computer', trained: false, skillFocus: 0 },
        useTheForce: {skillName: 'Use The Force', trained: true, skillFocus: 1 },
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
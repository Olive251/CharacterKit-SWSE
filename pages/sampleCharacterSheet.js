import Head from 'next/head';
import styles from '../styles/CharacterSheet.module.css';
import Sheet from '../components/characterSheet/sheet';
import {atom, useAtom, Provider} from "jotai";
import {Suspense} from 'react';

const orig_sampleCharacter = atom(async(get) => {

    try{
        const response = await fetch('http://localhost:3000/api/sampleCharacter');
        const data = await response.json();

        return data

    }catch (err) {
        console.log("Problem loading sample character data...");
        console.log(err);
    }
    
});
    
const sampleCharacter = atom((get) => get(orig_sampleCharacter));

const CharacterSheet = () => {

    const [character] = useAtom(sampleCharacter);

    return(
        <div className={styles.container}>
            <Head>
                    <title>{`${character.basicInfo.name} (Sample) - Character Sheet`}</title>
                    <meta name= "SWSE Character Sheet" content= "Character Sheet"/>
                    <link rel="icon" href="/favicon.ico" />
            </Head>
            <Provider>
                <Suspense loading="Loading...">
                    <Sheet character={character}/>
                </Suspense>
            </Provider> 
                   
        </div>
    )
}

export default CharacterSheet;
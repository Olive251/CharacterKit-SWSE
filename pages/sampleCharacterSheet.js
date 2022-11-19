import Head from 'next/head';
import styles from '../styles/CharacterSheet.module.css';
import Sheet from '../components/characterSheet/sheet';
import {atom, useAtom, Provider} from "jotai";
import {Suspense} from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
console.log(API_URL)

const orig_sampleCharacter = atom(async(get) => {
    const response = await fetch(`${API_URL}sampleCharacter`);
    const data = await response.json();
    //let d2 = JSON.stringify(data)
    //console.log(data);

    return data;
});
    
const sampleCharacter = atom((get) => get(orig_sampleCharacter));

const CharacterSheet = () => {

    const [character, setCharacter] = useAtom(orig_sampleCharacter);

    //console.log(orig_sampleCharacter);

    return(
        <div className={styles.container}>
            <Head>
                    <title>{`${character.basicInfo.name} - Character Sheet`}</title>
                    <meta name= "SWSE Character Sheet" content= "Character Sheet"/>
                    <link rel="icon" href="/favicon.ico" />
            </Head>
            <Provider>
                <Suspense loading="Loading...">
                    {/* {console.log(character)} */}
                    <Sheet character={character}/>
                </Suspense>
            </Provider> 
                   
        </div>
    )
}

export default CharacterSheet;
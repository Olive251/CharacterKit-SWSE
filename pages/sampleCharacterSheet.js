import Head from 'next/head';
import styles from '../styles/CharacterSheet.module.css';
import Sheet from '../components/characterSheet/sheet';
import {useAtom, Provider as JotaiProvider} from "jotai";
import {Suspense} from 'react';
import {sampleCharacter} from '../lib/store'



const CharacterSheet = () => {

    const [character] = useAtom(sampleCharacter);

    return(
        <div className={styles.container}>
            <Head>
                    <title>{`${character.basicInfo.name} (Sample) - Character Sheet`}</title>
                    <meta name= "SWSE Character Sheet" content= "Character Sheet"/>
                    <link rel="icon" href="/favicon.ico" />
            </Head>
            <JotaiProvider>
                <Suspense loading="Loading...">
                    <Sheet character={character}/>
                </Suspense>
            </JotaiProvider> 
                   
        </div>
    )
}

export default CharacterSheet;
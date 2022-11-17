import Head from 'next/head';
import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import ClassSelector from '../../components/characterBuilder/classSelector';
import UserInput from '../../components/characterBuilder/userInput';

const BuilderStep1 = () => {

    //const []

    return (
        <div className = {styles.container}>
            <Head>
                <title>SWSE Character Builder</title>
                <meta name= "SWSE Character Builder" content= "Character builder for SWSE ttrpg"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1>Character Builder</h1>

                <form className = {styles.characterBuilderForm} action="" method="post">
                    <div className={styles.characterBuilderInputZone}>
                        
                        <UserInput label="Character name"/>
                        <UserInput label="Gender"/>
                        <UserInput label="Pronouns"/>
                        
                    </div>
                    <br/>
                    <br/>
                    <ClassSelector/>
                </form>
            </main>
        </div>
    )
}

export default BuilderStep1;
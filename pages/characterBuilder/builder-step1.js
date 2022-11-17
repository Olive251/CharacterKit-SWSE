import Head from 'next/head';
import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

const BuilderStep1 = () => {

    return (
        <div className = {styles.container}>
            <Head>
                <title>SWSE Character Builder</title>
                <meta name= "SWSE Character Builder" content= "Character builder for SWSE ttrpg"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1>Character Builder</h1>
                
            </main>
        </div>
    )
}

export default BuilderStep1;
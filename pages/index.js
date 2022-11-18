import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import MainMenu from '../components/MainMenu';
import dbConnect from '../lib/dbConnect';
import {useState, useEffect} from 'react';

export default function Home() {
  
  useEffect( () => {
    //dbConnect();
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>SWSE Character Kit</title>
        <meta name="SWSE Character Kit" content="Organize your SWSE characters with my SWSE Character Kit!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my SWSE Charcter Kit!
        </h1>

        <p className={styles.description}>
          Get started this toolkit by selecting an option from the menu below:
        </p>

        <MainMenu/>

      </main>
    </div>
  )
}

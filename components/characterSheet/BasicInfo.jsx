import Image from 'next/image';
import styles from '../../styles/CharacterSheet.module.css';
import {useState, useEffect} from 'react';

const BasicInfo = ({basicInfo}) => {
    
    return (
        <div className={styles.section}>
            <h2>{basicInfo.name}</h2>
            <p>Age: {basicInfo.age}</p>
            <p>Gender: {basicInfo.gender}</p>
            <p>Pronouns: {basicInfo.pronouns}</p>
            <p>Height: {basicInfo.height}</p>
            <p>Destiny: {basicInfo.destiny}</p>
        </div>
    )
}

export default BasicInfo;
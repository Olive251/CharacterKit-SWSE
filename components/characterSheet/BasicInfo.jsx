import Image from 'next/image';
import styles from '../../styles/CharacterSheet.module.css';
import {useState, useEffect} from 'react';

const BasicInfo = ({basicInfo}) => {
    
    return (
        <div className={styles.section}>
            <h2>{basicInfo.name}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Pronouns</th>
                        <th>Height</th>
                        <th>Destiny</th>
                    </tr>
                    <tr>
                        <td>{basicInfo.age}</td>
                        <td>{basicInfo.gender}</td>
                        <td>{basicInfo.pronouns}</td>
                        <td>{basicInfo.height}</td>
                        <td>{basicInfo.destiny}</td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default BasicInfo;
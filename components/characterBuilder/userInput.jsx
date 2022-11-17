import styles from '../../styles/Home.module.css';
import {useState, useEffect} from 'react';
const cc = require('../../helpers/makeCamelCase');

const UserInput = ({label}) => {

    const [id, setid] = useState();

    useEffect( () => {
        setid(cc.makeCamelCase(label));
    }, [])

    return(
        <div className={styles.userInput}>
            <label htmlFor={label}>{label + ":"}</label>
            <input type='text' id={id} name={label} required />
        </div>
    )
}

export default UserInput;
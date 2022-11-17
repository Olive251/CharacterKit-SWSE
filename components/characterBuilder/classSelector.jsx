import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import ClassSelectorCard from './classSelectorCard'

const ClassSelector = () => {

    //get array of class data from db
    //for each build a class card

    return(
        
        <div className={styles.selector}>  

            <div className={styles.row}>
                <h2>Select Your Starting Class</h2>
            </div>   

            <ClassSelectorCard
                className = {"Jedi"}
                classDescription={"The Jedi were long considered the guardians of peace and justice in the galaxy. They learn to wield lightsabers and master The Force."}
            />

            <ClassSelectorCard
                className = {"Noble"}
                classDescription={"The Noble inspires confidence as a natural born leader, shrewd bargainer and negotiator."}
            />

            <ClassSelectorCard
                className = {"Scoundrel"}
                classDescription={"The Scoundrel is a rogue who succeeds with skill and stealth instead of brute force."}
            />

            <ClassSelectorCard
                className = {"Scout"}
                classDescription={"The Scout is a cunning, skillful explorer trained to perform operations in the wild reaches of the galaxy."}
            />

            <ClassSelectorCard
                className = {"Soldier"}
                classDescription={"A warrior with exceptional combat capabilities and unequaled skill with weaponry."}
            />
            
        </div>
                
    )
}

export default ClassSelector;
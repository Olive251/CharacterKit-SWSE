import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import ClassSelectorCard from './classSelectorCard'

const ClassSelector = () => {

    //get array of class data from db
    //for each build a class card

    return(
        <div>
            <h2>Select Class</h2>

            <div className={styles.grid}>
                <ClassSelectorCard
                    className = {"Soldier"}
                    classDescription={"The Soldier combines discipline with martial skills to become the best warriors in the galaxy"}
                />
            </div>
        </div>        
    )
}

export default ClassSelector;
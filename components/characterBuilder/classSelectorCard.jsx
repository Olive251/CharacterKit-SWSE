import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';


const ClassSelectorCard = ({className, classDescription}) => {
   

    return(
        <div className={`${styles.characterBuilderCard}`}>
            <div className={styles.cardTitle}>
                <h3>{className}</h3>
                <hr/>
            </div>
            <div className = {styles.characterBuilderCardInfo}>                
                <p>{classDescription}</p>
            </div>
            <div className={styles.cardExpandDetails}>
                <p>Class Details</p> 
            </div>           
        </div>
    )
}

export default ClassSelectorCard;
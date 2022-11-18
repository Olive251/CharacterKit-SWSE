import styles from '../../styles/CharacterSheet.module.css';
import {useState, useEffect} from 'react';
import HitPointsCard from './hitPointsCard';
import ConditionTracker from './ConditionTracker';

const HP = ({hp}) => {
    
    const [condition, setCondition] = useState();

    useEffect(() => {setCondition(hp.condition)},[])

    return (
        <div className={styles.section}>
            <HitPointsCard hp={hp}/>
            <ConditionTracker condition={condition}/>
        </div>
    )
}

export default HP;
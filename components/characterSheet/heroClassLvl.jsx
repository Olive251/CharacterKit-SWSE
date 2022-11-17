import styles from '../../styles/CharacterSheet.module.css';

const HeroClassLvl = ({heroClass}) => {

    return (
        <div className={styles.section}>
            <table>
                <thead>
                    <tr>
                        <th>Class</th>
                        <th>Level</th>
                    </tr>
                </thead>
                <tbody>                    
                    {heroClass.map((hc, index) => {
                        return(
                        <tr key={index}>
                            <td>{hc.className}</td>
                            <td>{hc.level}</td>
                        </tr>
                        )                        
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default HeroClassLvl;
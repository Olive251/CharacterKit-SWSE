import styles from '../styles/Home.module.css';
import MainMenuCard from './MainMenuCard.jsx';

const MainMenu = () => {

    return(
        <div className={styles.grid}>
            <MainMenuCard
                title = "About the Project"
                text = "Learn about the past, present, and future of the SWSE Toolkit"
                _href = "/about"
            />

            <MainMenuCard
                title = "Character Builder"
                text = "Build your own SWSE character using the Character Kit Builder!"
                _href = '/characterBuilder/builder-step1'
            />

            <MainMenuCard
                title = "Sample Character"
                text = "Have a look at an example of a SWSE Toolkit character sheet looks like"
                _href = '/sampleCharacterSheet'
            />
        </div>
    )
}

export default MainMenu;
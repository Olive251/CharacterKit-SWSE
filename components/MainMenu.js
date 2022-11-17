import styles from '../styles/Home.module.css';
import MainMenuCard from './MainMenuCard.js';

const MainMenu = () => {

    return(
        <div class={styles.grid}>
            <MainMenuCard
                title = "About the Project"
                text = "Learn about the past, present, and future of the SWSE Toolkit"
                _href = "/"
            />

            <MainMenuCard
                title = "Character Builder"
                text = "Build your own SWSE character using the Character Kit Builder!"
                _href = '/characterBuilder1'
            />
        </div>
    )
}

export default MainMenu;
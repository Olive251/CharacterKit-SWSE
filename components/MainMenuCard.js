import styles from '../styles/Home.module.css';
import Link from 'next/link';

const defaultProps = {
    title: 'Title',
    text: 'details',
    _href: null
}

const MainMenuCard = ({title, text, _href}) => {

    if (_href === null)
    {
        _href = defaultProps._href;
    }

    return(
        <Link href= {_href}>
        <div className = {styles.card}>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
        </Link>
    )
}

export default MainMenuCard;
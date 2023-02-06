import Link from "next/link";
import styles from './styles.module.css';

function Header() {
    return (
        <header>
            <p className={styles.p}>Serhat BALKI</p>
            <div className={styles.header}>
            <Link href='/'className={styles.logo} >
                <span>BLOG</span>
            </Link>
            <nav>
                <Link href='https://github.com/gbalki' target='_blank'>About</Link>
            </nav>
            </div>
        </header>
    )
}

export default Header;
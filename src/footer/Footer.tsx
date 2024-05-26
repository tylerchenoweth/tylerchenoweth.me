import { useRouter } from 'next/navigation'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <hr></hr>
            <p> &copy; 2024 Tyler Chenoweth</p>
        </footer>
    )
}
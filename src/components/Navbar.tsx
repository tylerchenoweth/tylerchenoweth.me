'use-client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'

import styles from './Navbar.module.css';
// import globalStyles from '../app/';

export default function Navbar() {
    return(
        <nav className={styles.navbar}>
            <div className={styles.navLogo}>
                <img src="/CooperFox.PNG"></img>
            </div>
            <div className={styles.navLinkGroup}>
                <Link className={styles.navLink} href="#home">Home</Link>              
                <Link className={styles.navLink} href="#about">About</Link>            
                <Link className={styles.navLink} href="#skills">Skills</Link>
            </div>  
        </nav>
    );
}
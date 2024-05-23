'use-client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import styles from './Navbar.module.css'

export default function Navbar() {
    return(
        <nav className={styles.navbar}>
            
            <div className={styles.navItem}>
                <Link className={styles.navLink} href="#home">Home</Link>
            </div>
            
            <div className={styles.navItem}>
                <Link className={styles.navLink} href="#skills">Skills</Link>
            </div>
            <div className={styles.navItem}>
                <Link className={styles.navLink} href="#about">About</Link>
            </div>
            <div className={styles.navItem}> 
                <Link className={styles.navLink} href="#first-section">My first section</Link>
            </div>
            <div className={styles.navItem}>
                <Link className={styles.navLink} href="#second-section">My second section</Link>
            </div>
            
        </nav>
    );
}
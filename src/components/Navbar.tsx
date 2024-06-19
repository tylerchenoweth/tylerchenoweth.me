'use-client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'

import styles from './Navbar.module.css';
// import globalStyles from '../app/';
import {CooperSVG} from "@/components/Cooper";

export default function Navbar() {
    return(
        <nav className={styles.navbar}>
            <div className={styles.navLogo}>
                <CooperSVG />
            </div>
            <div className={styles.navLinkGroup}>
            <Link className={styles.navLink} href="#home"><b>Home</b></Link>              
            <Link className={styles.navLink} href="#about"><b>About</b></Link>            
            <Link className={styles.navLink} href="#skills"><b>Skills</b></Link>
            </div>  
        </nav>
    );
}
import Image from "next/image";
import Link from 'next/link';

import styles from "./About.module.css";


export default function About() {
    return (
        <div id="about" className={styles.aboutCard} >
            <div className={styles.imgDiv}>
                <Image src="/CooperFox.PNG" alt="Logo" width={300} height={300}/>
            </div>
            <div className={styles.detailsDiv}>
                <div className={styles.detailsInnerDiv}>
                    <h1>About</h1>
                    <p>Just pay me to build cool shit and dont ask any questions</p>
                </div>
                
                    <Link className={styles.resumeLink} href="/TylerChenowethResumeMay2024.pdf">
                        <div >
                            View Resume
                        </div>
                    </Link>
                
            </div>
            
        </div>
    )
}
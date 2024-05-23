import Image from "next/image";
import Link from 'next/link'

import styles from "./about.module.css";

export default function About() {
    return (
        <div id="about" className={styles.me}>
            <div className={styles.imgDiv}>
                <Image src="/CooperFox.PNG"  alt="Logo" width={300} height={300}/>
            </div>
            <div className={styles.detailsDiv}>
                <div className={styles.detailsInnerDiv}>
                    <h1>About</h1>
                    <p>Just pay me to build cool shit and dont ask any questions</p>
                </div>
                <div className={styles.resumeLink}>
                    <Link href="/TylerChenowethResumeMay2024.pdf">
                        View Resume
                    </Link>
                </div>
            </div>
            
        </div>
    )
}
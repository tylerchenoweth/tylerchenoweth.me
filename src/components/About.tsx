import Image from "next/image";
import Link from 'next/link';

import styles from "./About.module.css";


export default function About() {
    return (
        <div id="about" className={styles.aboutCard} >
            <div className={styles.imgDiv}>
                <Image src="/gengar.png" alt="Logo" width={300} height={300} />
            </div>
            <div className={styles.detailsDiv}>
                <div className={styles.detailsInnerDiv}>
                    <h1>About</h1>
                    <hr></hr>
                    <p>Just pay me to build cool shit and dont ask any questions</p>
                </div>
                <div className={styles.linkWrapper}>
                    <Link className={styles.resumeLink} href="/Current_Resume.pdf">
                        <h1>View Resume</h1>
                    </Link>
                </div>
            </div>

            {/* This was a test div for the gradient border */}
            {/* <div className={styles.container}>
                <div className={styles.content}>
                    <p>Container with gradient border using border-image.</p>
                </div>
            </div> */}



        </div>
    )
}

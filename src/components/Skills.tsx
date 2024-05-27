
import styles from "./Skills.module.css"


export default function Skills() {
    return (
        <section id="skills">
            <h1>Skills</h1>
            <hr></hr>
            <div className={styles.skillsSection}>
                <div className={styles.skillCard}>

                    <div>
                        <h1>Front-end</h1>
                    </div>
                    <div>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Next.js</li>
                            <li>Typescript</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.skillCard}>
                    <div className={styles.skillContent}>
                        <div>
                            <h1>Back-end</h1>
                        </div>
                        <div>
                            <ul>
                                <li>Python</li>
                                <li>Django</li>
                                <li>PostgreSQL</li>
                                <li>MySQL</li>
                                <li>Java</li>
                                <li>C++</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.skillCard}>
                    <div>
                        <h1>Tools</h1>
                    </div>
                    <div>
                        <ul>
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>GitLab</li>
                            <li>VS Code</li>
                            <li>AWS</li>
                            <li>Docker</li>
                            <li>Raspberry Pi</li>

                        </ul>
                    </div>
                </div>
            </div>
            
        </section>
    )
}
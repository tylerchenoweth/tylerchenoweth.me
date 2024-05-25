
import styles from "./Skills.module.css"


export default function Skills() {
    return (
        <section className={styles.skillsSection}>
            <div>
                <h1>Front-end</h1>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Next.js</li>
                    <li>Typescript</li>
                </ul>
            </div>
            <div>
                <h1>Back-end</h1>
                <ul>
                    <li>Python</li>
                    <li>Django</li>
                    <li>PostgreSQL</li>
                    <li>MySQL</li>
                    <li>Java</li>
                    <li>C++</li>
                </ul>
            </div>
            <div>
                <h1>Tools</h1>
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
            
        </section>
    )
}

'use client'; 

import styles from "./Skills.module.css"

import React from 'react';
import {Icon} from '@iconify/react';
import homeIcon from '@iconify/icons-mdi/home';




// import {HTML5, CSS3} from './Icons';

import {
    HTML5, CSS3, JavaScript, NextDotjs, TypeScript,
    Python, Django, PostgreSQL, MySQL, Java, Cplusplus,
    Git, GitHub, GitLab, VSCode, AWS, Docker, RaspberryPi
} from './Icons'; 








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
                    <div className={styles.skillCardList}>
                        <ul>
                            <li>HTML <HTML5 /></li>
                            <li>CSS <CSS3 /></li>
                            <li>JavaScript <JavaScript /></li>
                            <li>Next.js <NextDotjs /></li>
                            <li>Typescript <TypeScript /></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.skillCard}>
                    <div className={styles.skillContent}>
                        <div>
                            <h1>Back-end</h1>
                        </div>
                        <div className={styles.skillCardList}>
                            <ul>
                                <li>Python <Python /></li>
                                <li>Django <Django /></li>
                                <li>PostgreSQL <PostgreSQL /></li>
                                <li>MySQL <MySQL /></li>
                                <li>Java <Java /></li>
                                <li>C++ <Cplusplus /></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.skillCard}>
                    <div>
                        <h1>Tools</h1>
                    </div>
                    <div className={styles.skillCardList}>
                        <ul>
                            <li>Git <Git /></li>
                            <li>GitHub <GitHub /></li>
                            <li>GitLab <GitLab /></li>
                            <li>VS Code <VSCode /></li>
                            <li>AWS <AWS /></li>
                            <li>Docker <Docker /></li>
                            <li>Raspberry Pi <RaspberryPi /></li>

                        </ul>
                    </div>
                </div>
            </div>
            
        </section>
    )
}
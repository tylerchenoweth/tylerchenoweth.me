// import {Icon} from '@iconify/react';
// import homeIcon from '@iconify/icons-mdi/home';

// import html5Icon from '@iconify/icons-simple-icons/html5';
// import css3Icon from '@iconify/icons-simple-icons/css3';

// export const HTML5 = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
//         <path fill="currentColor" fill-rule="evenodd" d="m1.5 0l1.547 18l6.943 2l6.961-2.002L18.5 0zm13.773 4.272l-.097 1.119l-.043.496H6.99l.195 2.26h7.755l-.052.594l-.5 5.812l-.032.373L10 16.178l-.01.004l-4.36-1.256l-.297-3.467h2.136l.151 1.762l2.37.663h.002l2.374-.665l.247-2.863H5.237l-.523-6.084l-.05-.593h10.66z" />
//     </svg>
// )

// export const CSS3 = () => (
// <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
// 	<path fill="currentColor" d="m64 32l35 403.22L255.77 480L413 435.15L448 32Zm290.68 334.9L256.07 395l-98.46-28.24l-6.75-77.76h48.26l3.43 39.56l53.59 15.16l.13.28l53.47-14.85l5.64-64.15H203l-4-50h120.65l4.35-51H140l-4-49h240.58Z" />
// </svg>
// )

import styles from "./Skills.module.css"

import React from 'react';
import { Icon } from '@iconify-icon/react';

export const Alert = () => {
    return (
        <div className="alert">
            <Icon icon="mdi-light:alert" />
            Important notice with alert icon!
        </div>
    );
}

export const HTML5 = () => {
    return (
        <div className={styles.skillsIcon}>
            <Icon icon="simple-icons:html5" />
        </div>
    );
}

export const CSS3 = () => {
    return (
        <div className={styles.skillsIcon}>
            <Icon icon="simple-icons:css3" />
        </div>
    );
}

export const JavaScript = () => {
    return (
        <div className={styles.skillsIcon}>
            <Icon icon="simple-icons:javascript" />
        </div>
    );
}

export const NextDotjs = () => {
    return (
        <div className={styles.skillsIcon}>
            <Icon icon="simple-icons:nextdotjs" />
        </div>
    );
}

export const TypeScript = () => {
    return (
        <div className={styles.skillsIcon}>
            <Icon icon="simple-icons:typescript" />
        </div>
    );
}





export const Python = () => {
    return (
        <div className={styles.skillsIcon}>
            <Icon icon="simple-icons:python" />
        </div>
    );
}

export const Django = () => {
    return (
        <div className={styles.skillsIcon}>
            <Icon icon="simple-icons:django" />
        </div>
    );
}

export const PostgreSQL = () => {
    return (
        <div className={styles.skillsIcon}>
            <Icon icon="simple-icons:postgresql" />
        </div>
    );
}

export const MySQL = () => {
    return (
        <div className={styles.skillsIcon}>
            <Icon icon="simple-icons:mysql" />
        </div>
    );
}

export const Java = () => {
    return (
        <div className={styles.skillsIcon}>
            <Icon icon="devicon-plain:java" />
        </div>
    );
}

export const Cplusplus = () => {
    return (
        <div className={styles.skillsIcon}>
            <Icon icon="simple-icons:cplusplus" />
        </div>
    );
}





export const Git = () => {
    return (
        <div className={styles.skillsIcon}>
            <Icon icon="simple-icons:git" />
        </div>
    );
}

export const GitHub = () => {
    return (
        <div className={styles.skillsIcon}>
            <Icon icon="simple-icons:github" />
        </div>
    );
}

export const GitLab = () => {
    return (
        <div className={styles.skillsIcon}>
            <Icon icon="simple-icons:gitlab" />
        </div>
    );
}

export const VSCode = () => {
    return (
        <div className={styles.skillsIcon}>
            <Icon icon="simple-icons:visualstudiocode" />
        </div>
    );
}

export const AWS = () => {
    return (
        <div className={styles.skillsIcon}>
            <Icon icon="simple-icons:amazonaws" />
        </div>
    );
}

export const Docker = () => {
    return (
        <div className={styles.skillsIcon}>
            <Icon icon="simple-icons:docker" />
        </div>
    );
}

export const RaspberryPi = () => {
    return (
        <div className={styles.skillsIcon}>
            <Icon icon="simple-icons:raspberrypi" />
        </div>
    );
}
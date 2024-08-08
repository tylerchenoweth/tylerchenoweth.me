// components/ScrollingImage.js

import React from 'react';
import styles from './ScrollingImage.module.css';

const ScrollingImage = () => {
    return (
        <div className={styles.container}>
            <img src="/MountainsBackground.svg" alt="Mountains Background" className={styles.scrollingImage} />
            <img src="/MountainsBackground-2.svg" alt="Mountains Background" className={styles.scrollingImage} />
            <img src="/MountainsBackground.svg" alt="Mountains Background" className={styles.scrollingImage} />
            <img src="/MountainsBackground.svg" alt="Mountains Background" className={styles.scrollingImage} />
        </div>
    );
};

export default ScrollingImage;

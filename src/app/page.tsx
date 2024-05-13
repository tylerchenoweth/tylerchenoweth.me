import Image from "next/image";
import styles from "./page.module.css";

import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.center}>
          <h1>Tyler's Resume</h1>
        </div>
        <div className={styles.center}>
          <h2> 
            <Link href="/TylerChenowethResumeOct2023.pdf">
            <a>Link: My Resume</a>
            </Link>
          </h2>
        </div>
        <div className={styles.center}>
          <p>Wesbite under construction</p>
        </div>
      </div>
    </main>
  );
}

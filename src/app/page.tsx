import Image from "next/image";
import styles from "./page.module.css";

import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className={styles.basicDiv}>
        <h1>Tyler's Resume</h1>
      </div>
      <div className={styles.basicDiv}>
        <h2> 
          <Link href="/TylerChenowethResumeOct2023.pdf">
          My Resume 
          </Link>
        </h2>
      </div>
      <div className={styles.basicDiv}>
        <p>Wesbite under construction</p>
      </div>
    </main>
  );
}

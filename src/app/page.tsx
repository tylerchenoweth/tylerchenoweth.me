import Image from "next/image";
import styles from "./page.module.css";

import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.basicDiv}>
        <h1>Hi, I am Tyler Chenoweth</h1>
        <p>
          I am currently building this website using Next.js to show my resume and portfolio.
        </p>
        <p>
          In the meantime you can find my resume by clicking the link below.
        </p>
        <h2> 
        My Resume:&nbsp;
          <Link href="/TylerChenowethResumeMay2024.pdf">
             Click Here!
          </Link>
        </h2>
        <br/><br/><br/><br/><br/>
        <img src="/ChevyColoradoRendered.avif"></img>
      </div>
    </main>
  );
}

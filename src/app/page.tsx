import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Tyler's Resume</h1>
      <embed 
        src="./TylerChenowethResumeOct2023.pdf" 
        type="application/pdf" 
        width="100%" 
        height="700px" 
      />
    </main>
  );
}

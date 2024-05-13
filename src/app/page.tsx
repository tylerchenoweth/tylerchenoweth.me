import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <embed 
        src="./TylerChenowethResumeOct2023.pdf" 
        type="application/pdf" 
        width="100%" 
        height="100%" 
      />
    </main>
  );
}

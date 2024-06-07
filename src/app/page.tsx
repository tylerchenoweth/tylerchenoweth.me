import Image from "next/image";
import Link from 'next/link'

import styles from "./page.module.css";

import Skills from "@/components/Skills";
import About from "@/components/About";
import CooperSVG from "@/components/Cooper";

export default function Home() {
  return (

    
    // This basically works
    <div className={styles.mainDiv}>
      
   
      <main className={styles.intro}>
        <h1>Hi, Im Tyler Chenoweth</h1>
        <p>I am a Full-Stack Developer based in Tampa, FL</p>
      </main>
      <hr></hr>
      <About/>

      <Skills/>
      <hr></hr>
      
      <CooperSVG />

      
      
      <p>hey! down here!</p>
      <br></br><br></br><br></br><br></br>
    </div>
    
  );
}

import Image from "next/image";
import Link from 'next/link'

import styles from "./page.module.css";

import Skills from "@/components/Skills";
import About from "@/components/About";

export default function Home() {
  return (

    
    // This basically works
    <div className={styles.mainDiv}>
      
   
      <main>
        <h1>Hi, Im Tyler Chenoweth</h1>
        <p>I am a Full-Stack Developer based in Tampa, FL</p>
      </main>
      <hr></hr>
      <About/>
      <hr></hr>
      <Skills/>
      <hr></hr>
      
      

      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <section id="first-section">SECTION 1</section>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>

      <main id="second-section">SECTION 2</main>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      
      <p>hey! down here!</p>
      <br></br><br></br><br></br><br></br>
    </div>
  );
}

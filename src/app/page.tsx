import Image from "next/image";
import Link from 'next/link'



import styles from "./page.module.css";

import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import About from "@/components/About";

import 
{ CooperSVG, CooperNewDesign, CooperSvgParameters} 
  from "@/components/Cooper";
// import CooperSvgBlack from "@/components/Cooper";

export default function Home() {



  return (

    
    // This basically works
    <div >
      
      <Navbar/>
      <div>
            <div className={`${styles.animationTrail} ${styles.fadecontent}` }>
                        <div className={styles.JumbotronText}>
                            <h1>Hi, Im Tyler Chenoweth</h1>
                            <p>I am a Full-Stack Developer based in Tampa, FL</p>
                        </div>
                        <div className={styles.Tree}>
                            {/* <h1>We're Moving</h1> */}
                            <svg width="500" height="300" viewBox="0 0 1400 1400">
                                <polygon points="600,1290 240,1290 360,1060 285,1060 430,790 350,790 485,540 420,540 638,135 860,540 790,540 925,790 845,790 990,1060 915,1060 1035,1290 675,1290 675,1510 600,1510" fill="Green" />
                            </svg>
                        </div>
                        
                        <div className={styles.Tree}>
                            {/* <h1>We're Moving</h1> */}
                            <svg width="500" height="300" viewBox="0 0 1400 1400">
                                <polygon points="600,1290 240,1290 360,1060 285,1060 430,790 350,790 485,540 420,540 638,135 860,540 790,540 925,790 845,790 990,1060 915,1060 1035,1290 675,1290 675,1510 600,1510" fill="Green" />
                            </svg>
                        </div>

                        <div className={`${styles.Tree} ${styles.Tree2}`}>
                            {/* <h1>We're Moving</h1> */}
                            <svg width="500" height="300" viewBox="0 0 1400 1400">
                                <polygon points="600,1290 240,1290 360,1060 285,1060 430,790 350,790 485,540 420,540 638,135 860,540 790,540 925,790 845,790 990,1060 915,1060 1035,1290 675,1290 675,1510 600,1510" fill="Green" />
                            </svg>
                        </div>

                        <div className={`${styles.Tree} ${styles.Tree3}`}>
                            {/* <h1>We're Moving</h1> */}
                            <svg width="500" height="300" viewBox="0 0 1400 1400">
                                <polygon points="600,1290 240,1290 360,1060 285,1060 430,790 350,790 485,540 420,540 638,135 860,540 790,540 925,790 845,790 990,1060 915,1060 1035,1290 675,1290 675,1510 600,1510" fill="Green" />
                            </svg>
                        </div>

                        <div className={`${styles.Tree} ${styles.Tree4}`}>
                            {/* <h1>We're Moving</h1> */}
                            <svg width="500" height="300" viewBox="0 0 1400 1400">
                                <polygon points="600,1290 240,1290 360,1060 285,1060 430,790 350,790 485,540 420,540 638,135 860,540 790,540 925,790 845,790 990,1060 915,1060 1035,1290 675,1290 675,1510 600,1510" fill="Green" />
                            </svg>
                        </div>

        
                        <div className={styles.trainSvg}>
                            <img src="./TrainSvgBlackFill.svg" width={500} height={200} />
                        </div>
                        <div className={styles.mountainDiv}>
                            {/* <img src="./MountainsBackground.svg" width={500} height={200} /> */}
                            {/* <h1>Fucking fukc</h1> */}
                        </div>
                        
                        
                        
            </div>
            
            <div className={styles.railroadAnimation}>
                <div className={styles.railroad}>
                
                </div>
            </div>

        </div>
      <div className={styles.mainDiv}>

      
        <hr></hr>
        
        <About/>
        <Skills/>
        <hr></hr>
        
        {/* <CooperSVG />
        <CooperNewDesign />

        <CooperSvgParameters CooperStyle="Outline" />
        <CooperSvgParameters CooperStyle="OutlineWhiskers" />
        <CooperSvgParameters CooperStyle="Filled" />
        <CooperSvgParameters CooperStyle="FilledWhiskers" /> */}
    
        
        <p>hey! down here!</p>
        <br></br><br></br><br></br><br></br>
      </div>
    </div>
    
  );
}

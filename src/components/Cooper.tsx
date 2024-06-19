'use-client'

import styles from './Cooper.module.css'

export function CooperSVG() {
    return(
        <div className={styles.svgContainer}>
            <svg width="600" height="600" viewBox="0 0 1200 1200">
                

                {/* <polygon 
                    points="0,0 1200,0 1200,1200 0,1200"
                    style={{fill: `url(#grad1);`}} 
                /> */}

                {/* head */}
                <polygon points = 
                    "
                        10,525 
                        215,92 
                        281,378 
                        404,386 
                        520,106 
                        601,377 
                        861,562 
                        567,731 
                        394,1180 
                        
                    "
                    style={{fill:'white', stroke:'black', strokeWidth: 15 }}
                />

                {/* left eye */}
                <ellipse cx="486" cy="435" r="15" rx="25" ry="30" fill="black" stroke='none'/>
                {/* right eye */}
                <ellipse cx="723" cy="413" r="15" rx="25" ry="29" fill="black" stroke='none' />

                {/* nose */}
                <polygon points=
                "
                    851,562
                    797,524
                    778,554
                    801,590
                    851,562
                "
                style={{fill:'black', stroke:'black', strokeWidth: 15 }}
                />

                {/* mouth */}
                <polygon points=
                "
                    491,634
                    703,654
                "

                style={{fill:'black', stroke:'black', strokeWidth: 15 }}
                />

                {/* whiskers left */}
                <line x1="411" y1="532"  x2="271" y2="502" style={{stroke:'black', strokeWidth:'10'}} />
                <line x1="411" y1="562"  x2="271" y2="562" style={{stroke:'black', strokeWidth:'10'}} />
                <line x1="411" y1="592"  x2="271" y2="622" style={{stroke:'black', strokeWidth:'10'}} />

                {/* whiskers right */}
                <line x1="911" y1="532"  x2="1051" y2="502" style={{stroke:'black', strokeWidth:'10'}} />
                <line x1="911" y1="562"  x2="1051" y2="562" style={{stroke:'black', strokeWidth:'10'}} />
                <line x1="911" y1="592"  x2="1051" y2="622" style={{stroke:'black', strokeWidth:'10'}} />
                
            </svg>
        </div>
    );
}


export function CooperNewDesign() {
    return(
        <div className={styles.svgContainer}>
            <svg width="600" height="600" viewBox="0 0 1200 1200">
                

                {/* <polygon 
                    points="0,0 1200,0 1200,1200 0,1200"
                    style={{fill: `url(#grad1);`}} 
                /> */}

                {/* head */}
                <polygon points = 
                    "
                        10,525 
                        215,92 
                        281,378 
                        404,386 
                        520,106 
                        601,377 
                        861,562 
                        567,731 
                        394,1180 
                        
                    "
                    style={{fill:'white', stroke:'none', strokeWidth: 15 }}
                />

                <polygon points = 
                    "
                        10,525 
                        215,92 
                        281,378 
                        404,386 
                        520,106 
                        601,377 
                        861,562 
                        567,731 
                        394,1180 

                        567,731
                        861,562
                        601,377 
                        520,106
                        404,386
                        281,378
                        215,92
                        10,525
                    "
                    style={{fill:'none', stroke:'black', strokeWidth: 15 }}
                />

                {/* left eye */}
                <ellipse cx="486" cy="435" r="15" rx="25" ry="30" fill="black" stroke='none'/>
                {/* right eye */}
                <ellipse cx="723" cy="413" r="15" rx="25" ry="29" fill="black" stroke='none' />

                {/* nose */}
                <polygon points=
                "
                    851,562
                    797,524
                    778,554
                    801,590
                    851,562
                "
                style={{fill:'black', stroke:'black', strokeWidth: 15 }}
                />

                {/* mouth */}
                <polygon points=
                "
                    491,634
                    703,654
                "

                style={{fill:'black', stroke:'black', strokeWidth: 15 }}
                />

                {/* whiskers left */}
                <line x1="411" y1="532"  x2="271" y2="502" style={{stroke:'black', strokeWidth:'10'}} />
                <line x1="411" y1="562"  x2="271" y2="562" style={{stroke:'black', strokeWidth:'10'}} />
                <line x1="411" y1="592"  x2="271" y2="622" style={{stroke:'black', strokeWidth:'10'}} />

                {/* whiskers right */}
                <line x1="911" y1="532"  x2="1051" y2="502" style={{stroke:'black', strokeWidth:'10'}} />
                <line x1="911" y1="562"  x2="1051" y2="562" style={{stroke:'black', strokeWidth:'10'}} />
                <line x1="911" y1="592"  x2="1051" y2="622" style={{stroke:'black', strokeWidth:'10'}} />
                
            </svg>
        </div>
    );
}





export function cooperEyes() {
    
}






export function CooperSvgNoBottom(cooperBody, cooperSecondBody, cooperWhiskers) {

    return (
        <svg width="600" height="600" viewBox="0 0 1200 1200">

                <polygon points = 
                    "
                        10,525 
                        215,92 
                        281,378 
                        404,386 
                        520,106 
                        601,377 
                        861,562 
                        567,731 
                        394,1180 
                        
                    "
                    style={{...cooperSecondBody.cooperSecondBody}}
                />

                {/* head */}
                <polygon points = 
                    "
                        10,525 
                        215,92 
                        281,378 
                        404,386 
                        520,106 
                        601,377 
                        861,562 
                        567,731 
                        394,1180 

                        567,731
                        861,562
                        601,377 
                        520,106
                        404,386
                        281,378
                        215,92
                        10,525
                    "
                    style={{fill:'none', stroke:'black', strokeWidth: 15 }}
                />

                {/* left eye */}
                <ellipse cx="486" cy="435" r="15" rx="25" ry="30" fill="black" stroke='none'/>
                {/* right eye */}
                <ellipse cx="723" cy="413" r="15" rx="25" ry="29" fill="black" stroke='none' />

                {/* nose */}
                <polygon points=
                "
                    851,562
                    797,524
                    778,554
                    801,590
                    851,562
                "
                style={{fill:'black', stroke:'black', strokeWidth: 15 }}
                />

                {/* mouth */}
                <polygon points=
                "
                    491,634
                    703,654
                "

                style={{fill:'black', stroke:'black', strokeWidth: 15 }}
                />

                {/* whiskers left */}
                <line x1="411" y1="532"  x2="271" y2="502" style={{...cooperWhiskers.cooperWhiskers}} />
                <line x1="411" y1="562"  x2="271" y2="562" style={{...cooperWhiskers.cooperWhiskers}} />
                <line x1="411" y1="592"  x2="271" y2="622" style={{...cooperWhiskers.cooperWhiskers}} />

                {/* whiskers right */}
                <line x1="911" y1="532"  x2="1051" y2="502" style={{...cooperWhiskers.cooperWhiskers}} />
                <line x1="911" y1="562"  x2="1051" y2="562" style={{...cooperWhiskers.cooperWhiskers}} />
                <line x1="911" y1="592"  x2="1051" y2="622" style={{...cooperWhiskers.cooperWhiskers}} />

        </svg>
    )
}



export function CooperSvgDiamond(cooperBody, cooperSecondBody, cooperWhiskers) {

    return (
        <svg width="600" height="600" viewBox="0 0 1200 1200">

                {/* head */}
                <polygon points = 
                    "
                        10,525 
                        215,92 
                        281,378 
                        404,386 
                        520,106 
                        601,377 
                        861,562 
                        567,731 
                        394,1180 
                        
                    "
                    style={{ ...cooperBody.cooperBody }}
                />

                {/* left eye */}
                <ellipse cx="486" cy="435" r="15" rx="25" ry="30" fill="black" stroke='none'/>
                {/* right eye */}
                <ellipse cx="723" cy="413" r="15" rx="25" ry="29" fill="black" stroke='none' />

                {/* nose */}
                <polygon points=
                "
                    851,562
                    797,524
                    778,554
                    801,590
                    851,562
                "
                style={{fill:'black', stroke:'black', strokeWidth: 15 }}
                />

                {/* mouth */}
                <polygon points=
                "
                    491,634
                    703,654
                "

                style={{fill:'black', stroke:'black', strokeWidth: 15 }}
                />


                
                {/* whiskers left */}
                <line x1="411" y1="532"  x2="271" y2="502" style={{...cooperWhiskers.cooperWhiskers}} />
                <line x1="411" y1="562"  x2="271" y2="562" style={{...cooperWhiskers.cooperWhiskers}} />
                <line x1="411" y1="592"  x2="271" y2="622" style={{...cooperWhiskers.cooperWhiskers}} />

                {/* whiskers right */}
                <line x1="911" y1="532"  x2="1051" y2="502" style={{...cooperWhiskers.cooperWhiskers}} />
                <line x1="911" y1="562"  x2="1051" y2="562" style={{...cooperWhiskers.cooperWhiskers}} />
                <line x1="911" y1="592"  x2="1051" y2="622" style={{...cooperWhiskers.cooperWhiskers}} />

        </svg>
    )
}



export function CooperSvgSquare(cooperBody, cooperSecondBody, cooperWhiskers) {

    return (
        <svg width="600" height="600" viewBox="0 0 1200 1200">

                {/* head */}
                <polygon points = 
                    "
                        10,525 
                        215,92 
                        281,378 
                        404,386 
                        520,106 
                        601,377 
                        861,562 
                        567,731 
                        394,1180
                        10,1180 
                        
                    "
                    style={{...cooperBody.cooperBody}}
                />

                {/* left eye */}
                <ellipse cx="486" cy="435" r="15" rx="25" ry="30" fill="black" stroke='none'/>
                {/* right eye */}
                <ellipse cx="723" cy="413" r="15" rx="25" ry="29" fill="black" stroke='none' />

                {/* nose */}
                <polygon points=
                "
                    851,562
                    797,524
                    778,554
                    801,590
                    851,562
                "
                style={{fill:'black', stroke:'black', strokeWidth: 15 }}
                />

                {/* mouth */}
                <polygon points=
                "
                    491,634
                    703,654
                "

                style={{fill:'black', stroke:'black', strokeWidth: 15 }}
                />

                {/* whiskers left */}
                <line x1="411" y1="532"  x2="271" y2="502" style={{...cooperWhiskers.cooperWhiskers}} />
                <line x1="411" y1="562"  x2="271" y2="562" style={{...cooperWhiskers.cooperWhiskers}} />
                <line x1="411" y1="592"  x2="271" y2="622" style={{...cooperWhiskers.cooperWhiskers}} />

                {/* whiskers right */}
                <line x1="911" y1="532"  x2="1051" y2="502" style={{...cooperWhiskers.cooperWhiskers}} />
                <line x1="911" y1="562"  x2="1051" y2="562" style={{...cooperWhiskers.cooperWhiskers}} />
                <line x1="911" y1="592"  x2="1051" y2="622" style={{...cooperWhiskers.cooperWhiskers}} />

        </svg>
    )
}





export function CooperSvgParameters({CooperStyle}) {

    let cooperBody = {};
    let cooperSecondBody = {};
    let cooperWhiskers = {};
    
    if(CooperStyle == "Outline") {
        cooperBody = {fill: "None", stroke: "Black", strokeWidth: 15};
        cooperSecondBody = {stroke: "None", fill: "None"};
        cooperWhiskers = {stroke: "None", strokeWidth:'10'};
    }
    else if(CooperStyle == "OutlineWhiskers") {
        cooperBody = {fill: "None", stroke: "Black", strokeWidth: 15};
        cooperSecondBody = {stroke: "None", fill: "None"};
        cooperWhiskers = {stroke: "Black", strokeWidth:'10'};
    }
    else if(CooperStyle == "Filled") {
        cooperBody = {fill: "White", stroke: "Black", strokeWidth: 15};
        cooperSecondBody = {stroke: "None", fill: "White"};
        cooperWhiskers = {stroke: "None", strokeWidth:'10'};
    }
    else if(CooperStyle == "FilledWhiskers") {
        cooperBody = {fill: "White", stroke: "Black", strokeWidth: 15};
        cooperSecondBody = {stroke: "None", fill: "White"};
        cooperWhiskers = {stroke: "Black", strokeWidth:'10'};
    }
    
    const svgWidth = 1200;
    const svgHeight = 600;


    // console.log(cooperSecondBody);
    // console.log("Before passing ^^^");

    return (
        <div className={styles.svgContainer}>

            

            {/* No bottom design */}
            {CooperSvgNoBottom({cooperBody}, {cooperSecondBody}, {cooperWhiskers})}
            {CooperSvgDiamond({cooperBody}, {cooperSecondBody}, {cooperWhiskers})}
            {CooperSvgSquare({cooperBody}, {cooperSecondBody}, {cooperWhiskers})}
            
            
        </div>
    );
}


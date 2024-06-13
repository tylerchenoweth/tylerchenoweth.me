'use-client'


export function CooperSVG() {
    return(
        <svg width="1200" height="600" viewbox="0 0 1200 1200">
            

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


        </svg>
    );
}



// export function CooperSvgWhite() {
//     return(
//         <svg width="1200" height="600" viewbox="0 0 1200 1200">
            

//             {/* <polygon 
//                 points="0,0 1200,0 1200,1200 0,1200"
//                 style={{fill: `url(#grad1);`}} 
//             /> */}

//             {/* head */}
//             <polygon points = 
//                 "
//                     10,525 
//                     215,92 
//                     281,378 
//                     404,386 
//                     520,106 
//                     601,377 
//                     861,562 
//                     567,731 
//                     394,1180 
                    
//                 "
//                 style={{fill:'none', stroke:'white', strokeWidth: 15 }}
//             />

//             {/* left eye */}
//             <ellipse cx="486" cy="435" r="15" rx="25" ry="30" fill="white" stroke='none'/>
//             {/* right eye */}
//             <ellipse cx="723" cy="413" r="15" rx="25" ry="29" fill="white" stroke='none' />

//             {/* nose */}
//             <polygon points=
//             "
//                 851,562
//                 797,524
//                 778,554
//                 801,590
//                 851,562
//             "
//             style={{fill:'white', stroke:'white', strokeWidth: 15 }}
//             />

//             {/* mouth */}
//             <polygon points=
//             "
//                 491,634
//                 703,654
//             "

//             style={{fill:'white', stroke:'white', strokeWidth: 15 }}
//             />


//         </svg>
//     );
// }

// export function CooperSvgBlack() {
//     return(
//         <svg width="1200" height="600" viewbox="0 0 1200 1200">
            

//             {/* <polygon 
//                 points="0,0 1200,0 1200,1200 0,1200"
//                 style={{fill: `url(#grad1);`}} 
//             /> */}

//             {/* head */}
//             <polygon points = 
//                 "
//                     10,525 
//                     215,92 
//                     281,378 
//                     404,386 
//                     520,106 
//                     601,377 
//                     861,562 
//                     567,731 
//                     394,1180 
                    
//                 "
//                 style={{fill:'none', stroke:'black', strokeWidth: 15 }}
//             />

//             {/* left eye */}
//             <ellipse cx="486" cy="435" r="15" rx="25" ry="30" fill="black" stroke='none'/>
//             {/* right eye */}
//             <ellipse cx="723" cy="413" r="15" rx="25" ry="29" fill="black" stroke='none' />

//             {/* nose */}
//             <polygon points=
//             "
//                 851,562
//                 797,524
//                 778,554
//                 801,590
//                 851,562
//             "
//             style={{fill:'black', stroke:'black', strokeWidth: 15 }}
//             />

//             {/* mouth */}
//             <polygon points=
//             "
//                 491,634
//                 703,654
//             "

//             style={{fill:'black', stroke:'black', strokeWidth: 15 }}
//             />


//         </svg>
//     );
// }

// export function CooperSvgSquare() {
//     return(
//         <svg width="1200" height="600" viewbox="0 0 1200 1200">
            

//             {/* <polygon 
//                 points="0,0 1200,0 1200,1200 0,1200"
//                 style={{fill: `url(#grad1);`}} 
//             /> */}

//             {/* head */}
//             <polygon points = 
//                 "
//                     10,525 
//                     215,92 
//                     281,378 
//                     404,386 
//                     520,106 
//                     601,377 
//                     861,562 
//                     567,731 
//                     394,1180
//                     0,1180 
                    
//                 "
//                 style={{fill:'none', stroke:'black', strokeWidth: 15 }}
//             />

//             {/* left eye */}
//             <ellipse cx="486" cy="435" r="15" rx="25" ry="30" fill="black" stroke='none'/>
//             {/* right eye */}
//             <ellipse cx="723" cy="413" r="15" rx="25" ry="29" fill="black" stroke='none' />

//             {/* nose */}
//             <polygon points=
//             "
//                 851,562
//                 797,524
//                 778,554
//                 801,590
//                 851,562
//             "
//             style={{fill:'black', stroke:'black', strokeWidth: 15 }}
//             />

//             {/* mouth */}
//             <polygon points=
//             "
//                 491,634
//                 703,654
//             "

//             style={{fill:'black', stroke:'black', strokeWidth: 15 }}
//             />


//         </svg>
//     );
// }


// export function CooperSvgLoop() {
//     return(
//         <svg width="1200" height="600" viewbox="0 0 1200 1200">
            

//             {/* <polygon 
//                 points="0,0 1200,0 1200,1200 0,1200"
//                 style={{fill: `url(#grad1);`}} 
//             /> */}

//             {/* head */}
//             <polygon points = 
//                 "
//                     10,525 
//                     215,92 
//                     281,378 
//                     404,386 
//                     520,106 
//                     601,377 
//                     861,562 
//                     567,731 
//                     394,1180 

//                     567,731
//                     861,562
//                     601,377 
//                     520,106
//                     404,386
//                     281,378
//                     215,92
//                     10,525
//                 "
//                 style={{fill:'none', stroke:'black', strokeWidth: 15 }}
//             />

//             {/* left eye */}
//             <ellipse cx="486" cy="435" r="15" rx="25" ry="30" fill="black" stroke='none'/>
//             {/* right eye */}
//             <ellipse cx="723" cy="413" r="15" rx="25" ry="29" fill="black" stroke='none' />

//             {/* nose */}
//             <polygon points=
//             "
//                 851,562
//                 797,524
//                 778,554
//                 801,590
//                 851,562
//             "
//             style={{fill:'black', stroke:'black', strokeWidth: 15 }}
//             />

//             {/* mouth */}
//             <polygon points=
//             "
//                 491,634
//                 703,654
//             "

//             style={{fill:'black', stroke:'black', strokeWidth: 15 }}
//             />


//         </svg>
//     );
// }
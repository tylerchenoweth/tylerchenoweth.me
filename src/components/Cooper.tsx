'use-client'

export default function CooperSVG() {
    return(
        <svg width="1200" height="600" viewbox="0 0 1200 1200">
            

            {/* <polygon 
                points="0,0 1200,0 1200,1200 0,1200"
                style={{fill: `url(#grad1);`}} 
            /> */}

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
                    10,1180"
                style={{fill:'none', stroke:'black', strokeWidth: 15 }}
            />

            <ellipse cx="486" cy="435" r="15" rx="25" ry="30" fill="black" />
            <ellipse cx="723" cy="413" r="15" rx="25" ry="29" fill="black" />

            <polygon points=
            "
                851,562
                797,524
                778,554
                801,590
                851,562
            "
            />

            <polygon points=
            "
                491,634
                693,654
            "
            style={{fill:'white', stroke:'black', strokeWidth: 15 }}
            />


        </svg>
    );
}
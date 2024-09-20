import * as d3 from "d3";
import {useRef, useEffect, useState} from "react";


function randomArray(hght, len) {
    let ret = [];
    for (let i = 0; i < len; i++) {
        let ins = [];
        for (let j = 0; j < hght; j++) {
            ins.push(Math.random());
        }
        ret.push(ins);
    }
    return ret;
}




function Display2DArrayValues({arr}) {
    return (
        <div>
            {arr.map((insarr, i) =>
                <div key={i}>
                    {insarr.map((arrval, j) =>
                        <p key={j}>{arrval}</p>
                    )}
                    <br></br>
                </div>
            )}
        </div>
    )
}


export default function LinePlot() {



    const [data, setData] = useState(randomArray(5, 10))

    return (
        <div>
            <svg>
                <circle
                    cx="150"
                    cy="77"
                    r="40"
                />
            </svg>


        <Display2DArrayValues arr={data} />
        </div>

    );
}

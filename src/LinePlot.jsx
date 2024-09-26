import * as d3 from "d3";
import {useRef, useEffect, useState} from "react";
import Chart from './Chart.jsx'


function randomArray(hght, len) {
    let ret = [];
    for (let i = 0; i < len; i++) {
        let ins = {};
        for (let j = 0; j < hght; j++) {
            ins["val"+j] = 10*Math.random();
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
                    <p>{insarr["val0"]}, {insarr["val1"]}</p>
                </div>
            )}
        </div>
    )
}



export default function LinePlot() {



    const [data, setData] = useState(randomArray(5, 10))

    return (
        <>
            <Chart data={data} xvalue="val0" yvalue="val1" />

            <br></br>

            <p>Listed data:</p>
            <Display2DArrayValues arr={data} />
        </>

    );
}

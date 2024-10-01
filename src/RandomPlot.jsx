import * as d3 from "d3";
import {useRef, useEffect, useState} from "react";
import Chart from './Chart.jsx'


function randomArray(hght, len) {
    let ret = [];
    for (let i = 0; i < len; i++) {
        let ins = {};
        ins["Name"] = "Random Point " + i;
        for (let j = 0; j < hght; j++) {
            ins["val"+j] = Number((10*Math.random()).toFixed(3));
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
                    <p>
                    {Object.entries(insarr).map((insvals, j) =>
                        <div style={{display: 'inline'}}>{j != 0 ? ', ' : ''}{insvals[0]}: {insvals[1]}</div>
                    )}
                    </p>
                </div>
            )}
        </div>
    )
}



export default function RandomPlot() {



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

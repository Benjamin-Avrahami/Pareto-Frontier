
import { useState } from "react";

import Chart from './Chart.jsx'


function DataValue({ value, onValueChange }) {
    return (
        <label>
            <input value={value} onChange={e => onValueChange(e.target.value)}/>
        </label>
    )
}


function initialHeaders(len) {
    let initarr = Array(len).fill('');
    if (len >= 1) {
        initarr[0] = 'Name';
    }
    return initarr;
}

// Keys are category0, category1, etc. to avoid user duplication of headers messing up dictionary and
// for performance reasons (renaming a column does not have to be reflected in every row)
function getKeyName(colnum) {
    return 'category' + colnum;
}

function initialDataValues(rows, columns) {
    let initValues = Array(rows).fill({});
    for (let i = 0; i < initValues.length; i++) {
        for (let j = 0; j < columns; j++) {
            initValues[i][getKeyName(j)] = '';
        }
    }
    return initValues;
}


function DataEntry({ rows, columns }) {
    const [headers, setHeaders] = useState(initialHeaders(columns));
    const [data, setData] = useState(initialDataValues(rows, columns));



    function changeHeaderValue(i, newval) {
        const newHeaders = [...headers];
        newHeaders[i] = newval;
        setHeaders(newHeaders);
    }

    function changeDataValue(i, j, newval) {
        const newData = [...data];
        const newDataRow = {...data[i]};
        newDataRow[getKeyName(j)] = newval;
        newData[i] = newDataRow;
        setData(newData);
    }

    return (
        <>
        <Chart data={data} xvalue="category1" yvalue="category2" />


        <div>
            {headers.map((header, i) =>
                <div key={getKeyName(i)} style={{display: 'inline'}}>
                    <DataValue value={headers[i]} onValueChange={(newval) => changeHeaderValue(i, newval)} />
                </div>
            )}
            <br></br>
            <br></br>
            {data.map((datarow, i) =>
                <div key={i}>
                    {headers.map((header, j) =>
                        <div key={getKeyName(j)} style={{display: 'inline'}}>
                            <DataValue value={data[i][getKeyName(j)]} onValueChange={(newval) => changeDataValue(i, j, newval)} />
                        </div>
                    )}
                </div>
            )}
        </div>
        </>
    )


}


export default DataEntry;

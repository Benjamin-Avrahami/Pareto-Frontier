import PlotFigure from "./PlotFigure.jsx";
import * as Plot from "@observablehq/plot";



function Chart({data, xvalue, yvalue}) {
    return (
        <>
        <PlotFigure
            options={{
                grid: true,
                marks: [
                    Plot.ruleX([0]),
                    Plot.ruleY([0]),
                    Plot.dot(data, {x: xvalue, y: yvalue})
                ]
            }}
        />
        </>
    );
}

export default Chart;

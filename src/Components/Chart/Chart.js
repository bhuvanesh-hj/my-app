import React from "react";
import "./Chart.css";
import ChartBar from "./Chartbar";
const Chart = (props) => {
    const dataPointsvalue=props.dataPoints.map(dataPoint=>dataPoint.value)
    const totalMaxValue=Math.max(...dataPointsvalue)
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.lable}
          value={datapoint.value}
          lable={datapoint.lable}
          maxValue={totalMaxValue}
        />
      ))}
    </div>
  );
};

export default Chart;

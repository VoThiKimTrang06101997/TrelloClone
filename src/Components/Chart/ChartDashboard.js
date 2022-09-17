import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./ChartDashboard.css";

function ChartDashBoard() {
  const [state, setState] = useState({
    options: {
      colors: ["#E91E63", "#FF9800"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
      },
    },
    series: [
      {
        name: "Doing",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "Completed",
        data: [3, 60, 35, 80, 49, 70, 20, 81],
      },
    ],
  });
  return (
    <div className="App">
      <h1 style={{'color': 'red'}}>
        WorkLoad Charts <i className="fas fa-user"></i>{" "}
      </h1>
      <div className="row">
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="450"
          />
        </div>
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="line"
            width="450"
          />
        </div>
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="area"
            width="450"
          />
        </div>
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="radar"
            width="450"
          />
        </div>
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="histogram"
            width="450"
          />
        </div>
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="scatter"
            width="450"
          />
        </div>
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="heatmap"
            width="450"
          />
        </div>
      </div>
    </div>
  );
}

export default ChartDashBoard;

// bar
// line
// area
// radar
// histogram
// scatter
// heatmap

import React from 'react';
import BuyerStates from './BuyerStates';
import TaskReview from './TaskReview'
import { Chart } from "react-google-charts";

export const data = [
    ["Category", "Earnings ($)", { role: "style" }],
    ["Total Task", 280, "color: #4caf50"], // Green
    ["Total Pending Task", 200, "color: #2196f3"], // Blue
    ["Total Payments", 700, "color: #ff9800"], // Orange
  ];
  
  export const options = {
    title: "Worker Performance Overview",
    titleTextStyle: {
      color: "#333",
      fontSize: 18,
      bold: true,
    },
    chartArea: { width: "70%", height: "70%" },
    legend: { position: "none" }, // Hide legend for a cleaner look
    hAxis: {
      title: "Metrics",
      titleTextStyle: { italic: false, color: "#666", fontSize: 14 },
    },
    vAxis: {
      title: "Values",
      titleTextStyle: { italic: false, color: "#666", fontSize: 14 },
      minValue: 0, // Ensures the y-axis starts at 0
    },
    bar: { groupWidth: "60%" }, // Bar width customization
    colors: ["#4caf50", "#2196f3", "#ff9800"], // Colors for bars
    backgroundColor: "#f9f9f9", // Chart background color
  };
const BuyerHome = () => {
    return (
        <div>
            <BuyerStates></BuyerStates>
            <div className="w-full flex justify-center items-center">
      <div className="chart-container" style={{ display: "flex", marginBottom: "40px" }}>
        <Chart chartType="ColumnChart" width="60%" height="400px" data={data} options={options} />
      </div>
      </div>
            <TaskReview></TaskReview>
        </div>
    );
};

export default BuyerHome;
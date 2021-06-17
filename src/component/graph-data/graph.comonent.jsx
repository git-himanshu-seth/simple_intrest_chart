import React from "react";
import { BarChart, Bar,Pie, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

// import "./growth-graph.styles.css";

const Chart = ({ data }) => {
    console.log('data',data)
  return (
    <div className="growthGraph">
      <BarChart width={700} height={400} data={data}>
        <XAxis dataKey="labels" stroke="#8884d8" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar
          dataKey="data"
          fill="#8884d8"
          barSize={20}
          label={{ position: "top" }}
        />
      </BarChart>
    </div>
  );
};

export default Chart;
import React from "react";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  data: any;
};

// const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];

const Chart: React.FC<Props> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart
        data={data}
        margin={{ top: 5, bottom: 5, left: 35, right: 35 }}>
        <Line type="monotone" dataKey="confirmed" stroke="#8884d8" />
        <Line type="monotone" dataKey="deaths" stroke="#8884d8" />
        <Line type="monotone" dataKey="recovered" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;

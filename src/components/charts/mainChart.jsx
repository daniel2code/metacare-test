import React from "react";

import {
  LineChart,
  ResponsiveContainer,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const pdata = [
  {
    name: "Jan",
    student: 11,
    fees: 10,
  },
  {
    name: "Feb",
    student: 15,
    fees: 20,
  },
  {
    name: "Mar",
    student: 5,
    fees: 20,
  },
  {
    name: "Apr",
    student: 10,
    fees: 40,
  },
  {
    name: "May",
    student: 9,
    fees: 50,
  },
  {
    name: "Jun",
    student: 10,
    fees: 50,
  },

  {
    name: "Jul",
    student: 10,
    fees: 30,
  },

  {
    name: "Aug",
    student: 10,
    fees: 20,
  },
];

const Index = () => {
  return (
    <>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={pdata}>
          {/* <CartesianGrid stroke="#ccc" /> */}
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={"preserveStartEnd"} />
          <YAxis></YAxis>
          {/* <Legend /> */}
          {/* <Tooltip /> */}
          <Line
            dataKey="fees"
            type="monotone"
            stroke="red"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default Index;

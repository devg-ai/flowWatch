import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function WeekPage() {
  // Initial static data
  const [data, setData] = useState([
    { name: "Mon", value: 800 },
    { name: "Tue", value: 700 },
    { name: "Wed", value: 900 },
    { name: "Thu", value: 650 },
    { name: "Fri", value: 1000 },
    { name: "Sat", value: 1100 },
    { name: "Sun", value: 950 },
  ]);

  // Simulate dynamic data update every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) =>
      prevData.map((item) => ({
        ...item,
        value: Math.floor(item.value * (0.9 + Math.random() * 0.2)), // +/-10%
      }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-6">
    <h2 className="text-3xl font-bold text-blue-700 mb-6">📆 Weekly Water Usage</h2>
    <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-3xl">
    <ResponsiveContainer width="100%" height={400}>
    <BarChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="value" fill="#0077b6" />
    </BarChart>
    </ResponsiveContainer>
    </div>
    </div>
  );
}

export default WeekPage;

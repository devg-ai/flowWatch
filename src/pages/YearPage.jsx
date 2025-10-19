import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function YearPage() {
  const [data, setData] = useState([
    { name: "Jan", value: 1200 },
    { name: "Feb", value: 1350 },
    { name: "Mar", value: 1500 },
    { name: "Apr", value: 1100 },
    { name: "May", value: 1600 },
    { name: "Jun", value: 1750 },
    { name: "Jul", value: 1900 },
    { name: "Aug", value: 1700 },
    { name: "Sep", value: 1400 },
    { name: "Oct", value: 1550 },
    { name: "Nov", value: 1650 },
    { name: "Dec", value: 1800 },
  ]);

  // Optional: simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) =>
      prevData.map((item) => ({
        ...item,
        value: Math.floor(item.value * (0.9 + Math.random() * 0.2)), // +/-10%
      }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-6">
    <h2 className="text-3xl font-bold text-blue-700 mb-6">🌍 Yearly Water Usage Overview</h2>
    <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-4xl">
    <ResponsiveContainer width="100%" height={400}>
    <LineChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Line type="monotone" dataKey="value" stroke="#0077b6" strokeWidth={3} />
    </LineChart>
    </ResponsiveContainer>
    </div>
    </div>
  );
}

export default YearPage;

import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function MonthPage() {
  const [data, setData] = useState([
    { name: "Week 1", value: 3200 },
    { name: "Week 2", value: 2800 },
    { name: "Week 3", value: 3500 },
    { name: "Week 4", value: 3000 },
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
    <h2 className="text-3xl font-bold text-blue-700 mb-6">📊 Monthly Water Usage</h2>
    <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-3xl">
    <ResponsiveContainer width="100%" height={400}>
    <AreaChart data={data}>
    <defs>
    <linearGradient id="colorFlow" x1="0" y1="0" x2="0" y2="1">
    <stop offset="5%" stopColor="#0077b6" stopOpacity={0.8} />
    <stop offset="95%" stopColor="#0077b6" stopOpacity={0} />
    </linearGradient>
    </defs>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Area
    type="monotone"
    dataKey="value"
    stroke="#0077b6"
    fillOpacity={1}
    fill="url(#colorFlow)"
    strokeWidth={3}
    />
    </AreaChart>
    </ResponsiveContainer>
    </div>
    </div>
  );
}

export default MonthPage;

import React from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from "recharts";

const data = [
  { name: "Shower", value: 400 },
{ name: "Toilet", value: 300 },
{ name: "Machine", value: 200 },
{ name: "Dishwasher", value: 278 },
];

const DayPage = () => (
  <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
  <h2 className="text-3xl font-bold text-blue-700 mb-6">💧 Daily Usage Chart</h2>
  <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-6">
  <ResponsiveContainer width="100%" height={400}>
  <LineChart data={data}>
  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
  <XAxis dataKey="name" stroke="#0077b6" />
  <YAxis stroke="#0077b6" />
  <Tooltip />
  <Line type="monotone" dataKey="value" stroke="#0077b6" strokeWidth={3} dot={{ r: 6 }} />
  </LineChart>
  </ResponsiveContainer>
  </div>
  </div>
);

export default DayPage;

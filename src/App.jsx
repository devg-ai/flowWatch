import { useEffect, useState } from "react";

function App() {
  const [waterData, setWaterData] = useState(null);

  useEffect(() => {
    // 👇 Replace the link below with your actual Render backend URL
    fetch("https://flowwatch-backend.onrender.com/api/data")
    .then((res) => res.json())
    .then((data) => setWaterData(data))
    .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 text-center p-10">
    <h1 className="text-4xl font-bold text-blue-700 mb-6">💧 FlowWatch</h1>
    {waterData ? (
      <div className="bg-white shadow-md rounded-2xl p-6 w-80">
      <p className="text-2xl text-gray-700 font-semibold">
      Current Water Usage:
      </p>
      <p className="text-3xl text-blue-600 font-bold mt-2">
      {waterData.value} L
      </p>
      <p className="text-sm text-gray-500 mt-3">
      Updated at:{" "}
      {new Date(waterData.timestamp).toLocaleTimeString()}
      </p>
      </div>
    ) : (
      <p className="text-gray-500">Loading data...</p>
    )}
    </div>
  );
}

export default App;

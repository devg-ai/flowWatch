import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import DayPage from "./pages/DayPage";
import WeekPage from "./pages/WeekPage";
import MonthPage from "./pages/MonthPage";
import YearPage from "./pages/YearPage";

function App() {
  const [flowValue, setFlowValue] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://flowwatch-backend.onrender.com/api/data");
        const data = await res.json();
        setFlowValue(data.value || data.currentValue || 0);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 2000);
    return () => clearInterval(interval);
  }, []);
  if (flowValue === null) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-blue-50">
      <div className="flex flex-col items-center">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-blue-500"></div>
      <p className="mt-4 text-blue-700 font-semibold text-lg">Loading live data...</p>
      </div>
      </div>
    );
  }

  return (
    <Router>
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-6">
    <h1 className="text-4xl font-bold text-blue-700 mb-8">💧 FlowWatch Dashboard</h1>

    <div className="flex space-x-4 mb-6">
    <Link to="/day" className="btn">Day</Link>
    <Link to="/week" className="btn">Week</Link>
    <Link to="/month" className="btn">Month</Link>
    <Link to="/year" className="btn">Year</Link>
    </div>

    <div className="bg-white p-10 rounded-2xl shadow-xl text-center w-80 mb-6">
    <h2 className="text-2xl text-gray-700 font-semibold mb-3">Current Water Flow</h2>
    <p className="text-5xl font-bold text-blue-600">{flowValue} L</p>
    </div>

    <Routes>
    <Route path="/day" element={<DayPage />} />
    <Route path="/week" element={<WeekPage />} />
    <Route path="/month" element={<MonthPage />} />
    <Route path="/year" element={<YearPage />} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;

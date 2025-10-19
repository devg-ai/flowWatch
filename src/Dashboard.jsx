import React from "react";
import { useNavigate } from "react-router-dom";
import dashboardImage from "./assets/FlowWatch(3).png";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen bg-blue-100 flex items-center justify-center overflow-y-auto">
    <img
    src={dashboardImage}
    alt="FlowWatch Dashboard"
    className="w-[400px] md:w-[500px] rounded-2xl shadow-lg"
    />

    <button
    onClick={() => navigate("/graph")}
    className="absolute top-[18%] left-[43%] w-[60px] h-[30px] bg-transparent cursor-pointer"
    >
    {/* Clickable area to go to graph */}
    </button>
    </div>
  );
}

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";

ChartJS.register(ArcElement, Tooltip);

const FriendshipAnalytics = () => {
  const stats = [
    { label: "Text", value: 30, color: "#7c3aed" },
    { label: "Call", value: 35, color: "#1f3d36" },
    { label: "Video", value: 35, color: "#34d399" },
  ];

  const data = {
    labels: stats.map((s) => s.label),
    datasets: [
      {
        data: stats.map((s) => s.value),
        backgroundColor: stats.map((s) => s.color),
        borderWidth: 0,
        spacing: 5,       // gap between colors
        borderRadius: 10, // smooth edges
      },
    ],
  };

  const options = {
    cutout: "72%", // ✅ balanced thickness (NOT too thin, NOT too thick)
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-gray-100 min-h-screen p-10">
      
      {/* TITLE OUTSIDE LEFT */}
      <div className="max-w-5xl mx-auto mb-6">
        <h1 className="text-5xl font-bold">
          Friendship Analytics
        </h1>
      </div>

      {/* CARD */}
      <div className="bg-white rounded-2xl p-12 max-w-5xl mx-auto shadow-md">
        
        {/* SUBTITLE INSIDE LEFT */}
        <p className="text-green-900 text-2xl mb-8">
          By Interaction Type
        </p>

        {/* CHART CENTER */}
        <div className="flex justify-center mb-10">
          <div className="w-64 h-64">
            <Doughnut data={data} options={options} />
          </div>
        </div>

        {/* LEGEND BELOW */}
        <div className="flex justify-center gap-10 text-sm">
          {stats.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ background: item.color }}
              ></span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FriendshipAnalytics;
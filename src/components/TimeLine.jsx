import { useEffect, useState } from "react";

function Timeline() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("timeline")) || [];
    setData(stored);
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md">

      <h1 className="text-xl font-bold mb-6">Timeline</h1>

      {data.length === 0 ? (
        <p className="text-gray-500">No activity yet</p>
      ) : (
        <div className="space-y-4">
          {data.map((item) => (
            <div key={item.id} className="p-4 border rounded-lg flex gap-3 items-center">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="font-bold">
                  {item.type} with {item.person}
                </p>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default Timeline;
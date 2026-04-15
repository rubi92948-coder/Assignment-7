import { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

function Timeline() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("timeline")) || [];
    setData(stored);
  }, []);

  const filteredData =
    filter === "All"
      ? data
      : data.filter((item) => item.type === filter);

  const handleSelect = (type) => {
    setFilter(type);
    setOpen(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md">

      {/* TITLE */}
      <h1 className="text-2xl font-bold">Timeline</h1>

      {/* FILTER (LEFT SIDE UNDER TITLE) */}
      <div className="relative mt-2 mb-6">

        {/* BUTTON */}
        <button
  onClick={() => setOpen(!open)}
  className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm bg-white shadow-sm"
>
  Filter timeline

  <FiChevronDown
    className={`transition-transform duration-200 ${
      open ? "rotate-180" : ""
    }`}
  />
</button>

        {/* DROPDOWN */}
        {open && (
          <div className="absolute left-0 mt-2 w-44 bg-white border rounded-lg shadow-lg z-10">

            {["All", "Call", "Text", "Video"].map((type) => (
              <button
                key={type}
                onClick={() => handleSelect(type)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100
                  ${filter === type ? "font-bold text-green-900" : ""}`}
              >
                {type}
              </button>
            ))}

          </div>
        )}
      </div>

      {/* CONTENT */}
      {filteredData.length === 0 ? (
        <p className="text-gray-500">No activity yet</p>
      ) : (
        <div className="space-y-4">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="p-4 border rounded-lg flex gap-3 items-center"
            >
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

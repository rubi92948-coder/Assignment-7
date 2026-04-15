import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// assets icons
import callIcon from "../assets/call.png";
import messageIcon from "../assets/text.png";
import videoIcon from "../assets/video.png";

// icons
import { FiBell, FiArchive, FiTrash2, FiEdit3 } from "react-icons/fi";

// toast notification
import { toast } from "react-toastify";

function FriendDetail() {
  const { id } = useParams();
  const { state } = useLocation();

  const [friend, setFriend] = useState(state ?? null);
  const [loading, setLoading] = useState(!state);

  const [timeline, setTimeline] = useState(() => {
    return JSON.parse(localStorage.getItem("timeline")) || [];
  });

  useEffect(() => {
    if (!state) {
      fetch("/friend.json")
        .then((res) => res.json())
        .then((data) => {
          const selectedFriend = data.find((f) => f.id === Number(id));
          setFriend(selectedFriend);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [id, state]);

  const getNextDue = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + Number(days || 30));
    return date.toDateString();
  };

  const addToTimeline = (type) => {
    if (!friend) return;

    const newItem = {
      id: Date.now(),
      type,
      person: friend.name,
      date: new Date().toDateString(),
      icon:
        type === "Call"
          ? "📞"
          : type === "Text"
          ? "💬"
          : "🎥",
    };

    const updated = [newItem, ...timeline];

    setTimeline(updated);
    localStorage.setItem("timeline", JSON.stringify(updated));

    toast.success(`${type} sent to ${friend.name}`);
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!friend) return <p className="text-center mt-10">Friend not found</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6">

        {/* LEFT SIDE */}
        <div className="w-full md:w-1/3 flex flex-col gap-4">

          {/* INFO CARD */}
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">

            <img
              src={friend.picture || "/default-avatar.png"}
              alt={friend.name}
              className="w-24 h-24 mx-auto rounded-full"
            />

            <h1 className="mt-4 text-xl font-bold">{friend.name}</h1>            

            <div className="flex flex-col gap-2 mt-3 items-center">
              <span className="bg-red-100 text-red-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                Overdue
              </span>
              <span className="bg-green-100 text-green-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                Family                 
              </span>              
            </div>

            <p className="text-sm text-gray-600 mt-3">
              {friend.bio || "University friend and study partner."}
            </p>
            <p className="text-sm text-gray-500 mt-1">{friend.email}</p>
          </div>

          {/* ACTION */}
          <div className="bg-white p-4 rounded-2xl shadow-md space-y-3">
            <button className="w-full flex items-center justify-center gap-2 py-2 border rounded-lg text-sm">
              <FiBell /> Snooze 2 Weeks
            </button>

            <button className="w-full flex items-center justify-center gap-2 py-2 border rounded-lg text-sm">
              <FiArchive /> Archive
            </button>

            <button className="w-full flex items-center justify-center gap-2 py-2 border rounded-lg text-sm text-red-500">
              <FiTrash2 /> Delete
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 space-y-6">

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Days Since Contact", val: friend.days_since_contact },
              { label: "Goal (Days)", val: friend.goal || 30 },
              { label: "Next Due", val: getNextDue(friend.goal || 30) }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-4 rounded-xl text-center shadow-sm">
                <p className="text-2xl font-bold">{stat.val}</p>
                <p className="text-xs text-gray-500 uppercase">{stat.label}</p>
              </div>
            ))}
          </div>

         {/* GOAL CARD */}
<div className="bg-white p-5 rounded-xl shadow-sm">
  <div className="flex justify-between items-center">
    <h3 className="font-bold text-gray-800">
      Relationship Goal
    </h3>

    <button className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition">
  Edit
</button>
  </div>

  <p className="text-gray-500 text-sm mt-2">
    Current goal: {friend.goal || 30} days
  </p>
</div>

          {/* QUICK CHECK-IN CARD */}
<div className="bg-white p-5 rounded-xl shadow-sm">
  <h3 className="font-bold text-sm mb-4">Quick Check-In</h3>

  <div className="grid grid-cols-3 gap-4">

    <button
      onClick={() => addToTimeline("Call")}
      className="flex flex-col items-center justify-center py-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
    >
      <img src={callIcon} className="w-6" />
      <p className="text-sm mt-2">Call</p>
    </button>

    <button
      onClick={() => addToTimeline("Text")}
      className="flex flex-col items-center justify-center py-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
    >
      <img src={messageIcon} className="w-6" />
      <p className="text-sm mt-2">Text</p>
    </button>

    <button
      onClick={() => addToTimeline("Video")}
      className="flex flex-col items-center justify-center py-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
    >
      <img src={videoIcon} className="w-6" />
      <p className="text-sm mt-2">Video</p>
    </button>

  </div>
</div>

          {/* RECENT */}
          <div>
            <h3 className="font-bold text-sm mb-3">Recent Interactions</h3>

            <div className="space-y-3">
              {timeline.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-3 rounded-lg shadow-sm flex justify-between"
                >
                  <p className="text-sm">
                    {item.icon} {item.type} with {item.person}
                  </p>
                  <span className="text-xs text-gray-400">{item.date}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default FriendDetail;
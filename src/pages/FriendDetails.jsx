import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// assets icons
import callIcon from "../assets/call.png";
import messageIcon from "../assets/text.png";
import videoIcon from "../assets/video.png";

// other icons
import { FiBell, FiArchive, FiTrash2 } from "react-icons/fi";

function FriendDetail() {
  const { id } = useParams();
  const { state } = useLocation();

  const [friend, setFriend] = useState(state ?? null);
  const [loading, setLoading] = useState(!state);

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
  }, [id]);

  const getNextDue = (days) => {
    const today = new Date();
    const nextDate = new Date();
    nextDate.setDate(today.getDate() + days);
    return nextDate.toDateString();
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!friend) return <p className="text-center mt-10">Friend not found</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6">

        {/* LEFT SIDE */}
        <div className="w-full md:w-1/3 flex flex-col gap-4">

          {/* INFO CARD */}
          <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center">

            <img
              src={friend.picture || "/default-avatar.png"}
              alt={friend.name}
              className="w-24 h-24 rounded-full bg-gray-200"
            />

            <h1 className="mt-4 text-xl font-bold">
              {friend.name}
            </h1>

            {/* STATUS */}
            <div className="flex flex-col gap-2 mt-3 items-center">

              <span className="bg-red-100 text-red-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                Overdue
              </span>

              <span className="bg-green-100 text-green-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                Family
              </span>

            </div>

            {/* BIO */}
            <p className="text-sm text-gray-600 mt-3">
              {friend.bio || "University friend and study partner."}
            </p>

            {/* NOTES */}
            {friend.notes && (
              <p className="text-sm text-gray-500 italic mt-2">
                "{friend.notes}"
              </p>
            )}

            <p className="text-xs text-gray-400 mt-2">
              Preferred: {friend.preferred || "email"}
            </p>

          </div>

          {/* ACTION CARD */}
          <div className="bg-white p-4 rounded-2xl shadow-md space-y-3">

            <button className="w-full flex items-center justify-center gap-2 py-2 border rounded-lg text-sm hover:bg-gray-50 transition">
              <FiBell /> Snooze 2 Weeks
            </button>

            <button className="w-full flex items-center justify-center gap-2 py-2 border rounded-lg text-sm hover:bg-gray-50 transition">
              <FiArchive /> Archive
            </button>

            <button className="w-full flex items-center justify-center gap-2 py-2 border rounded-lg text-sm text-red-500 hover:bg-red-50 transition">
              <FiTrash2 /> Delete
            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 bg-white p-6 rounded-2xl shadow-md">

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Days Since Contact", val: friend.days_since_contact },
              { label: "Goal (Days)", val: friend.goal || 30 },
              { label: "Next Due", val: getNextDue(friend.goal || 30) }
            ].map((stat, i) => (
              <div key={i} className="bg-gray-50 p-4 rounded-xl text-center shadow-sm">
                <p className="text-2xl font-bold text-gray-800">{stat.val}</p>
                <p className="text-[10px] text-gray-500 uppercase">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* GOAL */}
          <div className="mt-6 bg-gray-50 p-4 rounded-xl flex justify-between items-center shadow-sm">
            <div>
              <p className="font-bold text-sm">Relationship Goal</p>
              <p className="text-xs text-gray-500">
                Connect every {friend.goal || 30} days
              </p>
            </div>
            <button className="text-xs border px-4 py-1 rounded hover:bg-gray-100 transition">
              Edit
            </button>
          </div>

          {/* QUICK CHECK-IN (ASSETS ICONS) */}
          <div className="mt-6">
            <h3 className="font-bold text-sm mb-3">Quick Check-In</h3>

            <div className="grid grid-cols-3 gap-4">

              <button className="bg-gray-50 p-4 rounded-xl flex flex-col items-center gap-2 shadow-sm hover:shadow-md transition">
                <img src={callIcon} alt="Call" className="w-6 h-6" />
                <span className="text-sm">Call</span>
              </button>

              <button className="bg-gray-50 p-4 rounded-xl flex flex-col items-center gap-2 shadow-sm hover:shadow-md transition">
                <img src={messageIcon} alt="Text" className="w-6 h-6" />
                <span className="text-sm">Text</span>
              </button>

              <button className="bg-gray-50 p-4 rounded-xl flex flex-col items-center gap-2 shadow-sm hover:shadow-md transition">
                <img src={videoIcon} alt="Video" className="w-6 h-6" />
                <span className="text-sm">Video</span>
              </button>

            </div>
          </div>

          {/* RECENT */}
          <div className="mt-6">
            <h3 className="font-bold text-sm mb-3">Recent Interactions</h3>

            <div className="space-y-3">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex justify-between items-center text-sm bg-gray-50 p-3 rounded-lg shadow-sm">
                  <p>💬 Asked for career advice</p>
                  <span className="text-gray-400 text-xs">Jan 28, 2026</span>
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
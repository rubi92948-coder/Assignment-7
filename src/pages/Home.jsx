import { useEffect, useState } from "react";
import FriendCard from "../components/FriendCard";

function Home() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/friends.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <h1 className="text-center mt-10 text-xl text-gray-600">
        Loading...
      </h1>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-12 md:px-20 lg:px-28">

      {/* Banner */}
      <div className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Friends to keep close in your life
        </h1>

        <p className="text-gray-500 mt-3 text-sm md:text-base">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
          relationships that matter most.
        </p>

        <button className="mt-5 bg-green-900 hover:bg-green-800 text-white px-5 py-2 rounded-lg transition">
          + Add a Friend
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 pb-10 border-b border-gray-200">

        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition text-center">
          <h2 className="text-3xl text-green-900 font-bold">
            {friends.length}
          </h2>
          <p className="text-gray-500 text-sm mt-2">Total Friends</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition text-center">
          <h2 className="text-3xl text-green-900 font-bold">
            {friends.filter(f => f.status === "on-track").length}
          </h2>
          <p className="text-gray-500 text-sm mt-2">On Track</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition text-center">
          <h2 className="text-3xl text-green-900 font-bold">
            {friends.filter(f => f.status === "almost due").length}
          </h2>
          <p className="text-gray-500 text-sm mt-2">Need Attention</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition text-center">
          <h2 className="text-3xl text-green-900 font-bold">
            {friends.length * 2}
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Interactions This Month
          </p>
        </div>

      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Your Friends
      </h2>

      {/* Friends Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>

    </div>
  );
}

export default Home;
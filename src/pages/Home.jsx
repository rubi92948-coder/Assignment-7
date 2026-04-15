import { useEffect, useState } from "react";
import FriendCard from "../components/FriendCard";
import Loader from "../components/Loader";

function Home() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/friends.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch friends:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
      {/* Banner */}
      <div className="text-center py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Friends to keep close in your life
        </h1>

        <p className="text-gray-500 mt-4 text-sm md:text-base leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <button className="mt-6 bg-green-900 hover:bg-green-800 text-white px-6 py-3 rounded-xl transition font-medium shadow-sm">
          + Add a Friend
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 pb-10 border-b border-gray-200">
        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition text-center">
          <h2 className="text-3xl font-bold text-green-900">
            {friends.length}
          </h2>
          <p className="text-gray-500 text-sm mt-2">Total Friends</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition text-center">
          <h2 className="text-3xl font-bold text-green-900">
            {friends.filter((friend) => friend.status === "on-track").length}
          </h2>
          <p className="text-gray-500 text-sm mt-2">On Track</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition text-center">
          <h2 className="text-3xl font-bold text-green-900">
            {
              friends.filter(
                (friend) => friend.status === "almost due"
              ).length
            }
          </h2>
          <p className="text-gray-500 text-sm mt-2">Need Attention</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition text-center">
          <h2 className="text-3xl font-bold text-green-900">
            {friends.filter((friend) => friend.status === "overdue").length}
          </h2>
          <p className="text-gray-500 text-sm mt-2">Overdue</p>
        </div>
      </div>

      {/* Title */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Your Friends
        </h2>        
      </div>

      {/* Friends Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
}

export default Home;
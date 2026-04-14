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
    return <h1 className="text-center mt-10 text-xl">Loading...</h1>;
  }

  return (
    <div className="px-8 md:px-20 lg:px-40">

      {/* Banner */}
      <div className="text-center py-10">
        <h1 className="text-5xl font-bold text-gray-800">
          Friends to keep close in your life
        </h1>

        <p className="text-gray-500 mt-2">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
          relationships that matter most.
        </p>

        <button className="mt-4 bg-green-900 text-white px-4 py-2 rounded-lg">
          + Add a Friend
        </button>
      </div>

      {/* summery card */}

     <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 pb-10 border-b border-gray-200">

  <div className="bg-white p-4 rounded shadow text-center hover:shadow-xl transition-shadow">
    <h2 className="text-3xl text-green-900 font-bold">10</h2>
    <p className="text-gray-500 text-sm mt-2">Total Friends</p>
  </div>

  <div className="bg-white p-6 rounded shadow text-center hover:shadow-xl transition-shadow">
    <h2 className="text-3xl text-green-900 font-bold">3</h2>
    <p className="text-gray-500 text-sm mt-2">On Track</p>
  </div>

  <div className="bg-white p-6 rounded shadow text-center hover:shadow-xl transition-shadow">
    <h2 className="text-3xl text-green-900 font-bold">6</h2>
    <p className="text-gray-500 text-sm mt-2">Need Attention</p>
  </div>

  <div className="bg-white p-6 rounded shadow text-center hover:shadow-xl transition-shadow">
    <h2 className="text-3xl text-green-900 font-bold">12</h2>
    <p className="text-gray-500 text-sm mt-2">Interactions This Month</p>
  </div>

</div>

      {/* Friends Section Title */}
<h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8">
  Your Friends
</h2>

{/* Friends Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-10">
  {friends.map((friend) => (
    <div
      key={friend.id}
      className="bg-white rounded shadow hover:shadow-xl transition-shadow duration-300"
    >
      <FriendCard friend={friend} />
    </div>
  ))}
</div>
    </div>
  );
}

export default Home;
import { useNavigate } from "react-router-dom";

function FriendCard({ friend }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:scale-105 transition"
    >
      <img
        src={friend.picture}
        alt=""
        className="w-20 h-20 rounded-full mx-auto"
      />

      <h2 className="text-center font-bold mt-2">{friend.name}</h2>

      <p className="text-center text-sm text-gray-600">
        Days: {friend.days_since_contact}
      </p>

      <div className="flex justify-center gap-2 mt-2 flex-wrap">
        {friend.tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs bg-gray-200 px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="text-center mt-2 text-xs text-gray-500">
        {friend.status}
      </p>
    </div>
  );
}

export default FriendCard;
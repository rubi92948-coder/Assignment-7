import { useNavigate } from "react-router-dom";

function FriendCard({ friend }) {
  const navigate = useNavigate();

  // status color mapping (json compatible)
  const statusStyles = {
    "overdue": "bg-red-500 text-white",
    "almost due": "bg-yellow-400 text-white",
    "on-track": "bg-green-800 text-white",
  };

  return (
    <div
      onClick={() =>
        navigate(`/friend/${friend.id}`, { state: friend })
      }
      className="bg-white rounded-2xl p-6 text-center 
                 shadow-sm hover:shadow-lg 
                 transition-all duration-300 cursor-pointer"
    >
      {/* Profile Image */}
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-20 h-20 rounded-full mx-auto object-cover"
      />

      {/* Name */}
      <h2 className="mt-3 font-semibold text-gray-800 text-lg">
        {friend.name}
      </h2>

      {/* Days */}
      <p className="text-xs text-gray-400 mt-1">
        {friend.days_since_contact}d ago
      </p>

      {/* Tags */}
      <div className="flex justify-center gap-2 mt-2 flex-wrap">
        {friend.tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs px-3 py-1 rounded-full 
                       bg-green-100 text-green-600 font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Status */}
      <div className="mt-3">
        <span
          className={`text-xs px-3 py-1 rounded-full font-semibold ${
            statusStyles[friend.status?.toLowerCase()] ||
            "bg-gray-200 text-gray-600"
          }`}
        >
          {friend.status
            .replace("-", " ")
            .replace(/\b\w/g, (c) => c.toUpperCase())}
        </span>
      </div>
    </div>
  );
}

export default FriendCard;
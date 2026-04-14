import Link from "next/link";
import React from "react";

const FriendCard = ({ friend }) => {
  // ✅ Correct status color logic
  const getStatusColor = (status) => {
    if (status === "overdue") return "bg-red-500";
    if (status === "almost due") return "bg-yellow-400 text-black";
    return "bg-green-500";
  };

  return (
   <Link href={`/friends/${friend.id}`}>
  <div className="cursor-pointer">
    <div className=" bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col items-center text-center hover:shadow-md transition">
      
      {/* Avatar */}
      <div className="mb-4">
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-20 h-20 rounded-full object-cover border"
        />
      </div>

      {/* Info */}
      <h3 className="text-lg font-bold text-slate-800">{friend.name}</h3>
      <span className="text-xs text-slate-400 mb-3">
        {friend.days_since_contact} days ago
      </span>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {friend.tags?.map((tag, idx) => (
          <div
            key={idx}
            className="badge badge-sm bg-emerald-100 text-emerald-700 border-none font-bold py-2 px-3 text-[10px]"
          >
            {tag}
          </div>
        ))}
      </div>

      {/* Status */}
      <div
        className={`badge badge-md text-white border-none font-bold py-3 px-5 rounded-full text-[11px] ${getStatusColor(
          friend.status
        )}`}
      >
        {friend.status}
      </div>
    </div>
  </div>
</Link>
  );
};

export default FriendCard;
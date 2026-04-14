"use client";

import { TimelineContext } from "@/app/context/timeline.context";
import { useContext } from "react";

import { FiPhone, FiMessageSquare, FiVideo } from "react-icons/fi";

const ActionButtons = ({ friend }) => {
  const { addInteraction } = useContext(TimelineContext);

  const handleAction = (type) => {
    addInteraction({
      id: Date.now(),
      type,
      name: friend.name,
      image: friend.picture,
      date: new Date(),
    });
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <button
        onClick={() => handleAction("call")}
        className="btn h-auto py-6 flex flex-col items-center gap-2"
      >
        <FiPhone />
        Call
      </button>

      <button
        onClick={() => handleAction("text")}
        className="btn h-auto py-6 flex flex-col items-center gap-2"
      >
        <FiMessageSquare size={20} />
        Text
      </button>

      <button
        onClick={() => handleAction("video")}
        className="btn h-auto py-6 flex flex-col items-center gap-2"
      >
        <FiVideo size={20} />
        <span>Video</span>
      </button>
    </div>
  );
};

export default ActionButtons;
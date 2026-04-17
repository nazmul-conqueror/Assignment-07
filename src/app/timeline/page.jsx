
"use client";

import { useContext, useState } from "react";
import { TimelineContext } from "@/app/context/timeline.context";
import { FiPhone, FiMessageSquare, FiVideo } from "react-icons/fi";

const iconMap = {
  call: <FiPhone className="text-pink-500 text-xl" />,
  text: <FiMessageSquare className="text-purple-400 text-xl" />,
  video: <FiVideo className="text-gray-500 text-xl" />,
};

const TimelinePage = () => {
  const { timeline } = useContext(TimelineContext);
  const [filter, setFilter] = useState("all");

  const filteredTimeline =
    filter === "all"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  return (
    <div className="w-5xl mx-auto p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Timeline</h1>

      {/* Filter */}
      <select
        className="select select-bordered mb-6 w-52"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">Filter timeline</option>
        <option value="call">Call</option>
        <option value="text">Text</option>
        <option value="video">Video</option>
      </select>

      {/* Timeline List */}
      <div className="space-y-4 ">
        {filteredTimeline.map((item) => (
          <div
            key={item.id}
            className="bg-base-100 border border-base-300 rounded-xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition"
          >
            {/* Icon */}
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-base-200">
              {iconMap[item.type]}
            </div>

            {/* Text */}
            <div className="flex-1">
              <p className="text-sm">
                <span className="font-semibold capitalize">
                  {item.type}
                </span>{" "}
                with{" "}
                <span className="font-medium text-primary">
                  {item.name}
                </span>
              </p>

              <p className="text-xs text-gray-400">
                {new Date(item.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelinePage;
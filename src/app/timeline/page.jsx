// "use client";

// import { useContext } from "react";
// import { TimelineContext } from "../context/timeline.context";
// import { FiPhone, FiMessageSquare, FiVideo } from "react-icons/fi";

// const iconMap = {
//   call: <FiPhone />,
//   text: <FiMessageSquare />,
//   video: <FiVideo />,
// };

// const TimelinePage = () => {
//   const { timeline } = useContext(TimelineContext);

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-6">Timeline</h1>

//       <div className="space-y-4 w-5xl">
//         {timeline.map((item) => (
//           <div
//             key={item.id}
//             className="card bg-base-100 shadow border p-4 flex items-center gap-4"
//           >
//             <img
//               src={item.image}
//               className="w-12 h-12 rounded-full"
//             />

//             <div className="flex-1">
//               <p className="font-bold">{item.name}</p>
//               <p className="text-sm text-gray-500">
//                 {item.type} • {new Date(item.date).toLocaleString()}
//               </p>
//             </div>

//             <div className="text-xl opacity-70">
//               {iconMap[item.type]}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TimelinePage;


// "use client";

// import { useContext } from "react";
// import { TimelineContext } from "../context/timeline.context";
// import { FiPhone, FiMessageSquare, FiVideo } from "react-icons/fi";
// import { HiOutlineHandRaised } from "react-icons/hi2"; // Use for Meetup

// const iconMap = {
//   call: <FiPhone className="text-pink-500" size={24} />,
//   text: <FiMessageSquare className="text-purple-300" size={24} />,
//   video: <FiVideo className="text-indigo-400" size={24} />,
//   meetup: <HiOutlineHandRaised className="text-orange-400" size={24} />,
// };

// const TimelinePage = () => {
//   const { timeline } = useContext(TimelineContext);

//   return (
//     <div className="max-w-4xl mx-auto p-10 bg-white min-h-screen w-6xl">
//       <h1 className="text-4xl font-bold text-[#1a2b4b] mb-8">Timeline</h1>

//       {/* Filter Dropdown (matching your pic) */}
//       <div className="mb-10">
//         <select className="select select-bordered w-full max-w-[200px] bg-gray-50 border-gray-200 text-gray-400 text-sm focus:outline-none">
//           <option disabled selected>Filter timeline</option>
//           <option>Call</option>
//           <option>Text</option>
//           <option>Video</option>
//         </select>
//       </div>

//       {/* Timeline Items */}
//       <div className="flex flex-col w-full">
//         {timeline.length === 0 ? (
//           <p className="text-gray-400 italic">No interactions logged yet.</p>
//         ) : (
//           timeline.map((item) => (
//             <div
//               key={item.id}
//               className="flex items-center gap-6 py-6 border-b border-gray-100 last:border-0"
//             >
//               {/* Icon Container */}
//               <div className="flex-shrink-0">
//                 {iconMap[item.type.toLowerCase()] || <FiMessageSquare size={24} />}
//               </div>

//               {/* Content Container */}
//               <div>
//                 <p className="text-lg text-gray-500">
//                   <span className="font-bold text-gray-800 capitalize">
//                     {item.type}
//                   </span>{" "}
//                   with {item.name}
//                 </p>
//                 <p className="text-sm text-gray-400 font-medium">
//                   {new Date(item.date).toLocaleDateString("en-US", {
//                     month: "long",
//                     day: "numeric",
//                     year: "numeric",
//                   })}
//                 </p>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default TimelinePage;


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
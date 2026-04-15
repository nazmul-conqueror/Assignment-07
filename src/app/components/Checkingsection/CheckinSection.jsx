// "use client";
// import { useState } from "react";
// import { FiPhone, FiMessageSquare, FiVideo } from "react-icons/fi";

// const CheckInAction = ({ friendName }) => {
//     const [timeline, setTimeline] = useState([]);

//     const handleAction = (type) => {
//         const newEntry = {
//             id: Date.now(),
//             type: type,
//             date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
//             text: `${type} with ${friendName}`
//         };
//         setTimeline([newEntry, ...timeline]);
//     };

//     const getIcon = (type) => {
//         if (type === "Call") return <FiPhone className="text-pink-500" />;
//         if (type === "Text") return <FiMessageSquare className="text-purple-400" />;
//         return <FiVideo className="text-indigo-600" />;
//     };

//     return (
//         <div className="space-y-8">
//             {/* Action Buttons */}
//             <div className="card bg-base-100 border border-base-300 p-8 shadow-sm">
//                 <h3 className="text-sm font-bold opacity-70 mb-6">Quick Check-In</h3>
//                 <div className="grid grid-cols-3 gap-4">
//                     {["Call", "Text", "Video"].map((type) => (
//                         <button 
//                             key={type}
//                             onClick={() => handleAction(type)}
//                             className="flex flex-col items-center gap-3 p-8 border border-base-200 rounded-2xl hover:bg-base-200 transition active:scale-95"
//                         >
//                             <div className="text-2xl">{getIcon(type)}</div>
//                             <span className="text-sm font-medium">{type}</span>
//                         </button>
//                     ))}
//                 </div>
//             </div>

//             {/* Timeline Section (Matching your Image) */}
//             <div className="space-y-4">
//                 <h2 className="text-2xl font-bold text-gray-800">Timeline</h2>
//                 <div className="flex flex-col gap-3">
//                     {timeline.length === 0 ? (
//                         <p className="text-gray-400 italic text-sm">No recent interactions logged.</p>
//                     ) : (
//                         timeline.map((item) => (
//                             <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
//                                 <div className="p-3 bg-gray-50 rounded-lg text-xl">
//                                     {getIcon(item.type)}
//                                 </div>
//                                 <div>
//                                     <h4 className="font-semibold text-gray-700">{item.text}</h4>
//                                     <p className="text-xs text-gray-400">{item.date}</p>
//                                 </div>
//                             </div>
//                         ))
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CheckInAction;

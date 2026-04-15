"use client";

import { useContext } from "react";
import { TimelineContext } from "@/app/context/timeline.context";
import { PieChart, Pie, Tooltip, Legend,} from "recharts";

const StatsPage = () => {
  const { timeline } = useContext(TimelineContext);
  console.log(timeline)

  const isEmpty = timeline.length === 0;

  const callCount = timeline.filter(item => item.type === "call").length;
  const textCount = timeline.filter(item => item.type === "text").length;
  const videoCount = timeline.filter(item => item.type === "video").length;

  const data = [

    { name: "Call", value: callCount ,fill: "#0088FE"},
    { name: "Text", value: textCount, fill: "#00C49F "},
    { name: "Video", value: videoCount, fill: "#FFBB28 "},
  ];
  console.log(data)

  return (
  <>
  {isEmpty ?  (
        
        <div className="text-center bg-base-100 border rounded-xl p-10 shadow">
          <h2 className="text-xl font-bold mb-2">No Activity Yet</h2>
          <p className="text-gray-500 text-sm">
            Start calling, texting, or video chatting with your friends.
          </p>
        </div>
      ):
  ( <div className="max-w-5xl mx-auto mb-10 flex flex-col items-center shadow">
    <h2 className="text-2xl mt-6 mb-6">Friendship Analytics</h2>
     <PieChart 
     style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} 
     responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
    <Legend/>
    <Tooltip/>
    </PieChart>
  </div>
    )}
    </>
)}

export default StatsPage;
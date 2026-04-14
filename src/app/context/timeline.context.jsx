"use client";
import { createContext, useState } from "react";


export const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addInteraction = (item) => {
    setTimeline((prev) => [item, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ timeline, addInteraction }}>
      {children}
    </TimelineContext.Provider>
  );
};
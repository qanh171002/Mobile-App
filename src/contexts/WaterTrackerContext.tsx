import React, { createContext, useContext, useState } from "react";

interface WaterTrackerContextProps {
  maxLevel: number;
  currentLevel: number;
  increaseLevel: () => void;
  decreaseLevel: () => void;
  chooseLevel: (max: number) => void;
}

const WaterTrackerContext = createContext<WaterTrackerContextProps | undefined>(
  undefined
);

export const WaterTrackerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [maxLevel, setMaxLevel] = useState(10);

  const increaseLevel = () => {
    setCurrentLevel((prev) => Math.min(prev + 1, 10));
  };

  const decreaseLevel = () => {
    setCurrentLevel((prev) => Math.max(prev - 1, 0));
  };

  const chooseLevel = (max: number) => {
    setMaxLevel(max);
  };

  return (
    <WaterTrackerContext.Provider
      value={{
        maxLevel,
        currentLevel,
        increaseLevel,
        decreaseLevel,
        chooseLevel,
      }}
    >
      {children}
    </WaterTrackerContext.Provider>
  );
};

export const useWaterTracker = () => {
  const context = useContext(WaterTrackerContext);
  if (!context) {
    throw new Error(
      "useWaterTracker must be used within a WaterTrackerProvider"
    );
  }
  return context;
};

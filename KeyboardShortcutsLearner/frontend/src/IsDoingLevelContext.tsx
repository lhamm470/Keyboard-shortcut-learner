import { createContext, useState, type ReactNode } from "react";

type IsDoingLevelContextType = {
  isDoingLevel: boolean;
  setIsDoingLevel: React.Dispatch<React.SetStateAction<boolean>>;
  completionTimeMinutes: number;
  setCompletionTimeMinutes: React.Dispatch<React.SetStateAction<number>>;
  completionTimeSeconds: number;
  setCompletionTimeSeconds: React.Dispatch<React.SetStateAction<number>>;
  completionTimeMilliseconds: number;
  setCompletionTimeMilliseconds: React.Dispatch<React.SetStateAction<number>>;
  isLevelComplete: boolean;
  setIsLevelComplete: React.Dispatch<React.SetStateAction<boolean>>;
};

export const IsDoingLevelContext =
  createContext<IsDoingLevelContextType | null>(null);

export const IsDoingLevelProvider = ({ children }: { children: ReactNode }) => {
  const [isDoingLevel, setIsDoingLevel] = useState(false);
  const [completionTimeMinutes, setCompletionTimeMinutes] = useState(0);
  const [completionTimeSeconds, setCompletionTimeSeconds] = useState(0);
  const [completionTimeMilliseconds, setCompletionTimeMilliseconds] =
    useState(0);
  const [isLevelComplete, setIsLevelComplete] = useState(false);

  return (
    <IsDoingLevelContext.Provider
      value={{
        isDoingLevel,
        setIsDoingLevel,
        completionTimeMinutes,
        setCompletionTimeMinutes,
        completionTimeSeconds,
        setCompletionTimeSeconds,
        completionTimeMilliseconds,
        setCompletionTimeMilliseconds,
        isLevelComplete,
        setIsLevelComplete,
      }}
    >
      {children}
    </IsDoingLevelContext.Provider>
  );
};

import { createContext, useState, type ReactNode } from "react";

type IsDoingLevelContextType = {
  completionTimeMinutes: number;
  setCompletionTimeMinutes: React.Dispatch<React.SetStateAction<number>>;
  completionTimeSeconds: number;
  setCompletionTimeSeconds: React.Dispatch<React.SetStateAction<number>>;
  completionTimeMilliseconds: number;
  setCompletionTimeMilliseconds: React.Dispatch<React.SetStateAction<number>>;
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
};

export enum GameState {
  IDLE,
  INPROGRESS,
  COMPLETED,
}

export const IsDoingLevelContext =
  createContext<IsDoingLevelContextType | null>(null);

export const IsDoingLevelProvider = ({ children }: { children: ReactNode }) => {
  const [completionTimeMinutes, setCompletionTimeMinutes] = useState(0);
  const [completionTimeSeconds, setCompletionTimeSeconds] = useState(0);
  const [completionTimeMilliseconds, setCompletionTimeMilliseconds] =
    useState(0);
  const [gameState, setGameState] = useState<GameState>(GameState.IDLE);

  return (
    <IsDoingLevelContext.Provider
      value={{
        completionTimeMinutes,
        setCompletionTimeMinutes,
        completionTimeSeconds,
        setCompletionTimeSeconds,
        completionTimeMilliseconds,
        setCompletionTimeMilliseconds,
        gameState,
        setGameState,
      }}
    >
      {children}
    </IsDoingLevelContext.Provider>
  );
};

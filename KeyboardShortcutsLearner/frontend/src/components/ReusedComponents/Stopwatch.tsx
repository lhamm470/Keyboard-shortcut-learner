import { useEffect, useLayoutEffect } from "react";
import { useIsDoingLevelContext } from "../../UseIsDoingLevelContext";
import { useStopwatch } from "react-timer-hook";
import { GameState } from "../../IsDoingLevelContext";

const Stopwatch = () => {
  const {
    completionTimeMinutes,
    completionTimeSeconds,
    completionTimeMilliseconds,
    setCompletionTimeMinutes,
    setCompletionTimeSeconds,
    setCompletionTimeMilliseconds,
    gameState,
    setGameState,
  } = useIsDoingLevelContext();

  const {
    totalSeconds,
    milliseconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({
    autoStart: false,
    interval: 20,
  });

  const displayMinutes =
    gameState === GameState.INPROGRESS ? minutes : completionTimeMinutes;
  const displaySeconds =
    gameState === GameState.INPROGRESS ? seconds : completionTimeSeconds;
  const displayMilliseconds =
    gameState === GameState.INPROGRESS
      ? milliseconds
      : completionTimeMilliseconds;

  useLayoutEffect(() => {
    if (gameState == GameState.INPROGRESS) {
      // on level started
      start();
    } else if (gameState == GameState.IDLE) {
      // on level cancelled/closed completion modal
      pause();
      setCompletionTimeMinutes(0);
      setCompletionTimeSeconds(0);
      setCompletionTimeMilliseconds(0);
      reset(undefined, false);
    } else if (gameState == GameState.COMPLETED) {
      // on level completed
      pause();
      setCompletionTimeMinutes(minutes);
      setCompletionTimeSeconds(seconds);
      setCompletionTimeMilliseconds(milliseconds);
    }
  }, [gameState]);

  // on timeout
  useEffect(() => {
    if (totalSeconds >= 5940) {
      pause();
      setCompletionTimeMinutes(0);
      setCompletionTimeSeconds(0);
      setCompletionTimeMilliseconds(0);
      reset(undefined, false);
      setGameState(GameState.IDLE);
    }
  }, [totalSeconds]);

  return (
    <div>
      <p>
        {displayMinutes.toString().padStart(2, "0")}:
        {displaySeconds.toString().padStart(2, "0")}:
        {Math.floor(displayMilliseconds / 10)
          .toString()
          .padStart(2, "0")}
      </p>
    </div>
  );
};

export default Stopwatch;

import { useEffect, useState } from "react";
import { useIsDoingLevelContext } from "../../UseIsDoingLevelContext";
import { useStopwatch } from "react-timer-hook";

type StopwatchType = {
  onTimeLimitExceeded: () => void;
};

const Stopwatch = ({ onTimeLimitExceeded }: StopwatchType) => {
  const {
    isDoingLevel,
    setIsDoingLevel,
    completionTimeMinutes,
    completionTimeSeconds,
    completionTimeMilliseconds,
    setCompletionTimeMinutes,
    setCompletionTimeSeconds,
    setCompletionTimeMilliseconds,
    isLevelComplete,
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

  const displayMinutes = isDoingLevel ? minutes : completionTimeMinutes;
  const displaySeconds = isDoingLevel ? seconds : completionTimeSeconds;
  const displayMilliseconds = isDoingLevel
    ? milliseconds
    : completionTimeMilliseconds;

  useEffect(() => {
    if (isDoingLevel) {
      start();
    } else {
      pause();
      setCompletionTimeMinutes(minutes);
      setCompletionTimeSeconds(seconds);
      setCompletionTimeMilliseconds(milliseconds);
    }
  }, [isDoingLevel]);

  useEffect(() => {
    if (!isLevelComplete) {
      reset(undefined, false);
    }
  }, [isLevelComplete]);

  useEffect(() => {
    if (totalSeconds >= 5940) {
      pause();
      onTimeLimitExceeded();
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

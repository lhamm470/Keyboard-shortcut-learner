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
    setCompletionTimeMinutes,
    setCompletionTimeSeconds,
    setCompletionTimeMilliseconds,
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

  useEffect(() => {
    if (isDoingLevel) {
      start();
    } else {
      pause();
      setCompletionTimeMinutes(minutes);
      setCompletionTimeSeconds(seconds);
      setCompletionTimeMilliseconds(milliseconds);
      reset(undefined, false);
    }
  }, [isDoingLevel]);

  useEffect(() => {
    if (totalSeconds >= 5940) {
      pause();
      onTimeLimitExceeded();
    }
  }, [totalSeconds]);

  return (
    <div>
      <p>
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {Math.floor(milliseconds / 10)
          .toString()
          .padStart(2, "0")}
      </p>
    </div>
  );
};

export default Stopwatch;

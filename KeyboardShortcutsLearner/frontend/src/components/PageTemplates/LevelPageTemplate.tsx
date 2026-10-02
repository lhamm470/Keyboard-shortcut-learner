import AltUpLevel1Page from "../Lessons/AltUp/Levels/AltUpLevel1Page";
import LevelControls from "../ReusedComponents/LevelControls";
import LevelEditorsTemplate from "./LevelEditorsTemplate";
import { useState } from "react";
import { useIsDoingLevelContext } from "../../UseIsDoingLevelContext";
import Stopwatch from "../ReusedComponents/Stopwatch";
import ControlsHeading from "../ReusedComponents/ControlsHeading";
import ResultsLeaderboard from "../ReusedComponents/ResultsLeaderboard";

type LevelPageTemplateProps = {
  description: string;
  solutionCode: string;
  startCode: string;
};

const LevelPageTemplate = ({
  description,
  solutionCode,
  startCode,
}: LevelPageTemplateProps) => {
  const [currentCode, setCurrentCode] = useState(startCode);
  const [currentStopwatchText, setCurrentStopwatchText] = useState(
    "Press Start to begin.",
  );
  const { isDoingLevel, setIsDoingLevel } = useIsDoingLevelContext();
  return (
    <>
      <p>{description}</p>
      {/* Relevant keyboard shortcuts */}
      <ControlsHeading></ControlsHeading>
      <LevelEditorsTemplate
        solutionCode={solutionCode}
        currentCode={currentCode}
        startCode={startCode}
        setCurrentCode={setCurrentCode}
      ></LevelEditorsTemplate>
      <ResultsLeaderboard></ResultsLeaderboard>
    </>
  );
};

export default LevelPageTemplate;

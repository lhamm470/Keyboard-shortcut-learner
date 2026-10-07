import Stopwatch from "./Stopwatch";
import styled from "styled-components";
import ActionButton from "./ActionButton";
import HowToPlayModal from "./HowToPlayModal";
import { useState } from "react";
import TargetTime from "./TargetTime";
import { AltUpLevel1 } from "../Lessons/AltUp/Levels/AltUpLevel1";
import ExampleSolutionTemplate from "../ComponentTemplates/ExampleSolutionTemplate";
import { LessonDataType, LevelDataType } from "./CustomTypes";

const ControlsHeadingSC = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

type ControlsHeadingProps = {
  levelData: LevelDataType;
};

const ControlsHeading = ({ levelData }: ControlsHeadingProps) => {
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [showExampleSolution, setShowExampleSolution] = useState(false);

  return (
    <ControlsHeadingSC>
      <ActionButton onClick={() => setShowHowToPlay(true)}>
        How To Play
      </ActionButton>
      <ActionButton onClick={() => setShowExampleSolution(true)}>
        View Example Solution
      </ActionButton>
      <TargetTime
        targetTimeMinutes={AltUpLevel1().targetTime.minutes}
        targetTimeSeconds={AltUpLevel1().targetTime.seconds}
        targetTimeMilliseconds={AltUpLevel1().targetTime.milliseconds}
      ></TargetTime>
      <HowToPlayModal
        show={showHowToPlay}
        setShow={setShowHowToPlay}
      ></HowToPlayModal>
      <ExampleSolutionTemplate
        levelData={levelData}
        showExampleSolution={showExampleSolution}
        setShowExampleSolution={setShowExampleSolution}
      />
      <Stopwatch></Stopwatch>
    </ControlsHeadingSC>
  );
};

export default ControlsHeading;

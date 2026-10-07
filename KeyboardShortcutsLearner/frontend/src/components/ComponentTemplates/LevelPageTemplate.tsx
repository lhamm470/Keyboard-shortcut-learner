import LevelEditorsTemplate from "./LevelEditorsTemplate";
import { useState } from "react";
import ControlsHeading from "../ReusedComponents/ControlsHeading";
import ResultsLeaderboard from "../ReusedComponents/ResultsLeaderboard";
import PossibleKeyboardShortcuts from "./PossibleKeyboardShortcuts";
import { LevelDataType } from "../ReusedComponents/CustomTypes";
import styled from "styled-components";
import ExampleSolutionTemplate from "./ExampleSolutionTemplate";

type LevelPageTemplateProps = {
  levelData: LevelDataType;
};

const LevelPageTemplateSC = styled.div`
  margin-top: 10px;
`;

const LevelPageTemplate = ({ levelData }: LevelPageTemplateProps) => {
  const [currentCode, setCurrentCode] = useState(levelData.startCode);
  return (
    <LevelPageTemplateSC>
      <p style={{ textDecoration: "underline" }}>Level description</p>
      <p>{levelData.description}</p>
      <PossibleKeyboardShortcuts
        shortcuts={levelData.possibleKeyboardShortcuts}
      ></PossibleKeyboardShortcuts>
      <ControlsHeading levelData={levelData}></ControlsHeading>
      <LevelEditorsTemplate
        levelData={levelData}
        currentCode={currentCode}
        setCurrentCode={setCurrentCode}
      ></LevelEditorsTemplate>
      <ResultsLeaderboard levelData={levelData}></ResultsLeaderboard>
    </LevelPageTemplateSC>
  );
};

export default LevelPageTemplate;

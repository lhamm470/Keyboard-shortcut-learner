import LevelControls from "../ReusedComponents/LevelControls";
import LevelEditorsTemplate from "./LevelEditorsTemplate";
import { useState } from "react";
import { useIsDoingLevelContext } from "../../UseIsDoingLevelContext";
import Stopwatch from "../ReusedComponents/Stopwatch";
import ControlsHeading from "../ReusedComponents/ControlsHeading";
import ResultsLeaderboard from "../ReusedComponents/ResultsLeaderboard";
import styled from "styled-components";
import EndOfPageNavigation from "../ReusedComponents/EndOfPageNavigation";
import RelevantKeyboardShortcuts from "./RelevantKeyboardShortcuts";
import { FaWindows } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";

const PageContainer = styled.main`
  width: min(100%, 1440px);
  margin-inline: auto;
  padding-inline: clamp(16px, 4vw, 48px);
  box-sizing: border-box;
`;

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
  return (
    <PageContainer>
      <p>{description}</p>
      {/* Relevant keyboard shortcuts */}
      <RelevantKeyboardShortcuts
        shortcuts={[
          { name: "Alt Up", keys: ["Alt", <FaArrowUp />] },
          { name: "Alt Up", keys: ["Alt", <FaArrowUp />] },
          { name: "Alt Up", keys: ["Alt", <FaArrowUp />] },
          { name: "Alt Up", keys: ["Alt", <FaArrowUp />] },
          { name: "Alt Up", keys: ["Alt", <FaArrowUp />] },
          { name: "Alt Up", keys: ["Alt", <FaArrowUp />] },
        ]}
      ></RelevantKeyboardShortcuts>
      <ControlsHeading></ControlsHeading>
      <LevelEditorsTemplate
        solutionCode={solutionCode}
        currentCode={currentCode}
        startCode={startCode}
        setCurrentCode={setCurrentCode}
      ></LevelEditorsTemplate>
      <EndOfPageNavigation></EndOfPageNavigation>
      <ResultsLeaderboard></ResultsLeaderboard>
    </PageContainer>
  );
};

export default LevelPageTemplate;

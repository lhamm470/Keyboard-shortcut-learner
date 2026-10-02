import LevelControls from "./LevelControls";
import Stopwatch from "./Stopwatch";
import styled from "styled-components";

const ControlsHeadingSC = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ControlsHeading = () => {
  return (
    <ControlsHeadingSC>
      <LevelControls></LevelControls>
      <Stopwatch></Stopwatch>
    </ControlsHeadingSC>
  );
};

export default ControlsHeading;

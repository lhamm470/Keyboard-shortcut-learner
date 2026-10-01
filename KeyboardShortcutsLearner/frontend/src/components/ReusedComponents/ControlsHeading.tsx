import LevelControls from "./LevelControls";
import Stopwatch from "./Stopwatch";
import { useIsDoingLevelContext } from "../../UseIsDoingLevelContext";
import styled from "styled-components";

type ControlsHeadingType = {
  onCancel: () => void;
  onTimeLimitExceeded: () => void;
};

const ControlsHeadingSC = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ControlsHeading = ({
  onCancel,
  onTimeLimitExceeded,
}: ControlsHeadingType) => {
  const { isDoingLevel, setIsDoingLevel } = useIsDoingLevelContext();

  return (
    <ControlsHeadingSC>
      <LevelControls onCancel={onCancel}></LevelControls>
      <Stopwatch onTimeLimitExceeded={onTimeLimitExceeded}></Stopwatch>
    </ControlsHeadingSC>
  );
};

export default ControlsHeading;

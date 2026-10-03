import Stopwatch from "./Stopwatch";
import styled from "styled-components";
import ActionButton from "./ActionButton";
import HowToPlayModal from "./HowToPlayModal";
import { useState } from "react";
import TargetTime from "./TargetTime";
import { AltUpLevel1 } from "../Lessons/AltUp/Levels/AltUpLevel1";

const ControlsHeadingSC = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ControlsHeading = () => {
  const [show, setShow] = useState(false);

  return (
    <ControlsHeadingSC>
      <ActionButton onClick={() => setShow(true)}>How To Play</ActionButton>
      <TargetTime
        targetTimeMinutes={AltUpLevel1().targetTime.minutes}
        targetTimeSeconds={AltUpLevel1().targetTime.seconds}
        targetTimeMilliseconds={AltUpLevel1().targetTime.milliseconds}
      ></TargetTime>
      <HowToPlayModal show={show} setShow={setShow}></HowToPlayModal>
      <Stopwatch></Stopwatch>
    </ControlsHeadingSC>
  );
};

export default ControlsHeading;

import styled from "styled-components";
import { useIsDoingLevelContext } from "../../UseIsDoingLevelContext";
import HowToPlayModal from "./HowToPlayModal";
import { useState } from "react";

const Button = styled.button`
  background-color: gray;
  color: #403f3f;
`;

const LevelControls = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Button onClick={() => setShow(true)}>How To Play</Button>
      <HowToPlayModal show={show} setShow={setShow}></HowToPlayModal>
    </div>
  );
};

export default LevelControls;

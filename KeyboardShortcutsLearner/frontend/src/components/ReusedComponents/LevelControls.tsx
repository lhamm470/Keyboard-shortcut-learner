import { useIsDoingLevelContext } from "../../UseIsDoingLevelContext";
import ActionButton from "./ActionButton";
import HowToPlayModal from "./HowToPlayModal";
import { useState } from "react";

const LevelControls = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <ActionButton onClick={() => setShow(true)}>
        How To Play
      </ActionButton>
      <HowToPlayModal show={show} setShow={setShow}></HowToPlayModal>
    </div>
  );
};

export default LevelControls;

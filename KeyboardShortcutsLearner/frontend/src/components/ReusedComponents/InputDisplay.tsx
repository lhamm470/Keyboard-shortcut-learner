import "show-keystrokes";
import InputDisplayButton from "./InputDisplayButton";
import { useState } from "react";
import styled from "styled-components";

const KeystrokeDisplaySC = styled.div`
  position: fixed;
  bottom: 30px;
  left: 20px;
  display: flex;
  gap: 30px;
  z-index: 100;
`;

const InputDisplayButtonSC = styled.button`
  background-color: #464646;
  border-radius: 99px;
  width: 70px;
  height: 70px;
  position: fixed;
  bottom: 30px;
  left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;

  transition: background-color 0.2s ease;

  &:active {
    background-color: #3b3b3b;
  }

  & * {
    padding: 0;
    margin: 0;
    position: relative;
  }

  & .status {
    bottom: 4px;
  }

  & .icon {
    top: 4px;
  }
`;

const InputDisplay = () => {
  const [showInputDisplay, setShowInputDisplay] = useState(false);

  return (
    <KeystrokeDisplaySC>
      <InputDisplayButton
        showInputDisplay={showInputDisplay}
        setShowInputDisplay={setShowInputDisplay}
      />
      {showInputDisplay && (
        <show-keystrokes
          keystrokes="all"
          theme="modern"
          color-scheme="light"
          size="x-large"
          position="normal"
          notation="symbols"
          hide-delay="1000"
          hide-duration="200"
        />
      )}
    </KeystrokeDisplaySC>
  );
};

export default InputDisplay;

import styled from "styled-components";
import { RxKeyboard } from "react-icons/rx";

const InputDisplayButtonSC = styled.button`
  background-color: #464646;
  border-radius: 99px;
  width: 70px;
  height: 70px;
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

type InputDisplayButtonProps = {
  showInputDisplay: boolean;
  setShowInputDisplay: (showInputDisplay: boolean) => void;
};

const InputDisplayButton = ({
  showInputDisplay,
  setShowInputDisplay,
}: InputDisplayButtonProps) => {
  return (
    <InputDisplayButtonSC
      onClick={() => {
        setShowInputDisplay(!showInputDisplay);
      }}
      title="Show/hide keystroke display"
    >
      <RxKeyboard size={50} className="icon" />
      <p className="status">{showInputDisplay ? "ON" : "OFF"}</p>
    </InputDisplayButtonSC>
  );
};

export default InputDisplayButton;

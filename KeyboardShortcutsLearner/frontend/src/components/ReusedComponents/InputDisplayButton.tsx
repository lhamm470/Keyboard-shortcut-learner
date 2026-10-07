import styled from "styled-components";
import { RxKeyboard } from "react-icons/rx";

const InputDisplayButtonSC = styled.button`
  background-color: #464646;
  border-radius: 99px;
  width: 70px;
  height: 70px;
  position: fixed;
  bottom: 40px;
  left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  transition: background-color 0.2s ease;

  &:active {
    background-color: #3b3b3b;
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
      title="Show/hide input display"
    >
      <RxKeyboard size={40} />
    </InputDisplayButtonSC>
  );
};

export default InputDisplayButton;

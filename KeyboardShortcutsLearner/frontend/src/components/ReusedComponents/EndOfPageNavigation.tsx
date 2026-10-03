import styled from "styled-components";
import ActionButton from "./ActionButton";

const EndOfPageNavigationSC = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const EndOfPageNavigation = () => {
  return (
    <EndOfPageNavigationSC>
      <ActionButton $backgroundColor="#b0b1b2">Previous</ActionButton>
      <ActionButton $backgroundColor="#2563eb">Next</ActionButton>
    </EndOfPageNavigationSC>
  );
};

export default EndOfPageNavigation;

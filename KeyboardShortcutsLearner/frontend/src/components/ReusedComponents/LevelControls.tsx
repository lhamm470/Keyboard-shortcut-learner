import styled from "styled-components";
import { useIsDoingLevelContext } from "../../UseIsDoingLevelContext";

const Button = styled.button`
  background-color: gray;
  color: #403f3f;
`;

const LevelControls = () => {
  return (
    <div>
      <Button>Cancel</Button>
    </div>
  );
};

export default LevelControls;

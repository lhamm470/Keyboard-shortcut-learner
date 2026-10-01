import styled from "styled-components";

const Button = styled.button`
  background-color: gray;
  color: #403f3f;
`;

type LevelControlsProps = {
  onCancel: () => void;
};

const LevelControls = ({ onCancel }: LevelControlsProps) => {
  return (
    <div>
      <Button onClick={onCancel}>Cancel</Button>
    </div>
  );
};

export default LevelControls;

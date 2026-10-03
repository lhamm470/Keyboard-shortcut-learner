import styled from "styled-components";

const TargetTimeSC = styled.div`
  color: white;
  display: flex;
  align-items: center;
  background-color: black;
  border-radius: 10px;
  padding: 8px;
`;

type TargetTimeProps = {
  targetTimeMinutes: number;
  targetTimeSeconds: number;
  targetTimeMilliseconds: number;
};

const TargetTime = ({
  targetTimeMinutes,
  targetTimeSeconds,
  targetTimeMilliseconds,
}: TargetTimeProps) => {
  return (
    <TargetTimeSC>
      Target time: {targetTimeMinutes.toString().padStart(2, "0")}:
      {targetTimeSeconds.toString().padStart(2, "0")}:
      {Math.floor(targetTimeMilliseconds / 10)
        .toString()
        .padStart(2, "0")}
    </TargetTimeSC>
  );
};

export default TargetTime;

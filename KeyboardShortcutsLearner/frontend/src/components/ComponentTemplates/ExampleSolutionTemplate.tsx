import { LessonDataType, LevelDataType } from "../ReusedComponents/CustomTypes";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const ExampleSolutionContainer = styled.div<{
  $position: { x: number; y: number };
}>`
  width: fit-content;
  position: fixed;
  z-index: 50;
  top: ${({ $position }) => $position.y}px;
  left: ${({ $position }) => $position.x}px;
`;

const VideoTitleBar = styled.div`
  background-color: #706e6e;
  height: 30px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
`;

const CloseButton = styled(IoMdClose)`
  color: #c9c8c8;
  display: flex;
  margin-left: auto;
  margin-right: 3px;
  font-size: 36px;
  height: 30px;
  width: 30px;
  transition: color 0.2s ease;
  &:hover {
    cursor: pointer;
    color: #f1f1f1;
  }
`;

const VideoSC = styled.video`
  margin-top: -2px;
  border-left: 8px solid #706e6e;
  border-bottom: 8px solid #706e6e;
  border-right: 8px solid #706e6e;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const WindowTitleText = styled.p`
  color: #c9c8c8;
  margin: 0;
  margin-left: 8px;
`;

type ExampleSolutionTemplateProps = {
  levelData: LevelDataType;
  showExampleSolution: boolean;
  setShowExampleSolution: (state: boolean) => void;
};

const ExampleSolutionTemplate = ({
  levelData,
  showExampleSolution,
  setShowExampleSolution,
}: ExampleSolutionTemplateProps) => {
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({
    x: 100,
    y: 500,
  });

  const handlePointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;

    setPosition((prev) => ({
      x: prev.x + e.movementX,
      y: prev.y + e.movementY,
    }));
  };

  const handlePointerUp = () => {
    setDragging(false);
  };

  return (
    <>
      {showExampleSolution && (
        <ExampleSolutionContainer $position={position}>
          <VideoTitleBar
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          >
            <WindowTitleText>Example Solution</WindowTitleText>
            <CloseButton
              onPointerDown={(e) => e.stopPropagation()}
              onClick={() => setShowExampleSolution(false)}
            />
          </VideoTitleBar>
          <VideoSC
            src={levelData.exampleSolution}
            controls
            loop
            muted
            playsInline
          />
        </ExampleSolutionContainer>
      )}
    </>
  );
};

export default ExampleSolutionTemplate;

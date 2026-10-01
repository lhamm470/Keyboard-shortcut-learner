import CodeEditorSolution from "../CodeEditors/CodeEditorSolution";
import CodeEditorWorkingSpace from "../CodeEditors/CodeEditorWorkingSpace";
import LevelControls from "../ReusedComponents/LevelControls";
import styled from "styled-components";

type LevelEditorsTemplate = {
  solutionCode: string;
  currentCode: string;
  startCode: string;
  setCurrentCode: (code: string) => void;
};

const Editors = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

const levelEditorsTemplate = ({
  solutionCode,
  currentCode,
  startCode,
  setCurrentCode: setCurrentCode,
}: LevelEditorsTemplate) => {
  return (
    <>
      <Editors>
        <CodeEditorWorkingSpace
          solution={solutionCode}
          currentCode={currentCode}
          startCode={startCode}
          setCurrentCode={setCurrentCode}
        ></CodeEditorWorkingSpace>
        <CodeEditorSolution solution={solutionCode}></CodeEditorSolution>
      </Editors>
    </>
  );
};

export default levelEditorsTemplate;

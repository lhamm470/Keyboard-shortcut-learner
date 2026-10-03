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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-top: 20px;
  margin-bottom: 20px;

  > div {
    min-width: 0;
  }
`;

const EditorHeading = styled.span`
  display: block;
  text-align: center;
  font-size: 2em;
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
        <div>
          <CodeEditorWorkingSpace
            solution={solutionCode}
            currentCode={currentCode}
            startCode={startCode}
            setCurrentCode={setCurrentCode}
          ></CodeEditorWorkingSpace>
        </div>
        <div>
          <CodeEditorSolution solution={solutionCode}></CodeEditorSolution>
        </div>
      </Editors>
    </>
  );
};

export default levelEditorsTemplate;

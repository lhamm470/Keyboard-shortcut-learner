import CodeEditorSolution from "../CodeEditors/CodeEditorSolution";
import CodeEditorWorkingSpace from "../CodeEditors/CodeEditorWorkingSpace";
import styled from "styled-components";
import { LevelDataType } from "../ReusedComponents/CustomTypes";

type LevelEditorsTemplateProps = {
  levelData: LevelDataType;
  currentCode: string;
  setCurrentCode: (code: string) => void;
};

const Editors = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-top: 20px;

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
  levelData,
  currentCode,
  setCurrentCode: setCurrentCode,
}: LevelEditorsTemplateProps) => {
  return (
    <>
      <Editors>
        <div>
          <CodeEditorWorkingSpace
            levelData={levelData}
            currentCode={currentCode}
            setCurrentCode={setCurrentCode}
          ></CodeEditorWorkingSpace>
        </div>
        <div>
          <CodeEditorSolution levelData={levelData}></CodeEditorSolution>
        </div>
      </Editors>
    </>
  );
};

export default levelEditorsTemplate;

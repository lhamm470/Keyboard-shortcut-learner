import CodeEditorSolution from "../../../CodeEditors/CodeEditorSolution";
import CodeEditorWorkingSpace from "../../../CodeEditors/CodeEditorWorkingSpace";
import { AltUpLevel1SolutionCode, AltUpLevel1StartCode } from "./AltUpLevel1";
import styled from "styled-components";

const Editors = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

const AltUpLevel1Page = () => {
  return (
    <>
      <Editors>
        <CodeEditorWorkingSpace
          solution={AltUpLevel1SolutionCode()}
          startingCode={AltUpLevel1StartCode()}
        ></CodeEditorWorkingSpace>
        <CodeEditorSolution
          solution={AltUpLevel1SolutionCode()}
        ></CodeEditorSolution>
      </Editors>
    </>
  );
};

export default AltUpLevel1Page;

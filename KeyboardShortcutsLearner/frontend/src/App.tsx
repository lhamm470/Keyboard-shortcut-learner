import { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import CodeEditorWorkingSpace from "./components/CodeEditors/CodeEditorWorkingSpace";
import CodeEditorSolution from "./components/CodeEditors/CodeEditorSolution";
import AltUpLevel1Page from "./components/Lessons/AltUp/Levels/AltUpLevel1Page";
import { useIsDoingLevelContext } from "./UseIsDoingLevelContext";
import LevelPageTemplate from "./components/PageTemplates/LevelPageTemplate";
import {
  AltUpLevel1SolutionCode,
  AltUpLevel1StartCode,
} from "./components/Lessons/AltUp/Levels/AltUpLevel1";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 10px;
    min-height: 100%;
    background-color: #2b2933;
    color: white;
  }

  input,
  textarea,
  button,
  select {
    color: inherit;
  }
`;

function App() {
  const { isDoingLevel, setIsDoingLevel } = useIsDoingLevelContext();

  return (
    <>
      <GlobalStyle />
      <LevelPageTemplate
        description="alt up level"
        solutionCode={AltUpLevel1SolutionCode()}
        startCode={AltUpLevel1StartCode()}
      ></LevelPageTemplate>
    </>
  );
}

export default App;

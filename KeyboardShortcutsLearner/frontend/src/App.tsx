import { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import LevelPageTemplate from "./components/ComponentTemplates/LevelPageTemplate";
import { AltUpLevel1 } from "./components/Lessons/AltUp/Levels/AltUpLevel1";
import LessonPageTemplate from "./components/ComponentTemplates/LessonPageTemplate";
import AltUpData from "./components/Lessons/AltUp/AltUpData";
import SideNavButton from "./components/ReusedComponents/SideNavButton";
import SideNav from "./components/ReusedComponents/SideNav";

const GlobalStyle = createGlobalStyle`
  :root {
    --page-background: #252729;
    --page-foreground: #f3f1ed;
    --action-background: #80bfff;
    --action-foreground: #14283c;
    --shortcut-background: #e3e8ee;
    --shortcut-border: #7c9bbd;
    --shortcut-shadow: #9baec1;
    --shortcut-foreground: #2b333c;
    --key-background: #fbfcff;
    --key-border: #b7c2cd;
    --key-shadow: #c8d1da;
    --key-foreground: #252b32;
    --shortcut-plus: #3e6890;
  }

  html, body, #root {
    margin: 0;
    padding: 10px;
    min-height: 100%;
    background-color: var(--page-background);
    color: var(--page-foreground);
  }

  input,
  textarea,
  button,
  select {
    color: inherit;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <SideNavButton />
      <SideNav />
      <LessonPageTemplate lessonData={AltUpData()}></LessonPageTemplate>
    </>
  );
}

export default App;

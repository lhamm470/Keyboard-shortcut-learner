import { createGlobalStyle } from "styled-components";
import LessonPageTemplate from "./components/ComponentTemplates/LessonPageTemplate";
import AltUpData from "./components/Lessons/AltUp/AltUpData";
import SideNav from "./components/ReusedComponents/SideNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecordingEditor from "./components/RecordingEditor";
import InputDisplay from "./components/ReusedComponents/InputDisplay";

const GlobalStyle = createGlobalStyle`
  :root {
    --page-background: #252729;
    --page-foreground: #f3f1ed;
    --action-background: #80bfff;
    --action-foreground: #14283c;
    --shortcut-background: #c4c8cd;
    --shortcut-border: #728ead;
    --shortcut-shadow: #8999aa;
    --shortcut-foreground: #2b333c;
    --key-background: #e5e6e9;
    --key-border: #b7c2cd;
    --key-shadow: #c8d1da;
    --key-foreground: #252b32;
    --shortcut-plus: #3e6890;
  }

  html, body, #root {
    margin: 0;
    //padding: 10px;
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
    <Router>
      <GlobalStyle />
      {/* <SideNav />
      <InputDisplay />

      <Routes>
        <Route path="/" element={<p>home page</p>} />
        <Route
          path="/alt-up"
          element={
            <LessonPageTemplate lessonData={AltUpData()}></LessonPageTemplate>
          }
        />
      </Routes> */}
      <RecordingEditor />
    </Router>
  );
}

export default App;

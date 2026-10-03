import Editor from "@monaco-editor/react";
import { useState, useContext } from "react";

type CodeEditorSolutionProps = {
  levelData: {
    description: string;
    targetTime: {
      minutes: number;
      seconds: number;
      milliseconds: number;
    };
    solutionCode: string;
    startCode: string;
  };
};

const CodeEditorSolution = ({ levelData }: CodeEditorSolutionProps) => {
  return (
    <Editor
      height="60vh"
      width="100%"
      theme="vs-dark"
      defaultLanguage="javascript"
      defaultValue={levelData.solutionCode}
      value={levelData.solutionCode}
      options={{
        readOnly: true,
      }}
      onMount={(editor) => {
        editor.onKeyDown((e) => {
          // Ctrl+C / Cmd+C
          if (
            (e.ctrlKey || e.metaKey) &&
            e.keyCode === 33 // Monaco KeyCode.C
          ) {
            e.preventDefault();
          }
        });
      }}
    ></Editor>
  );
};

export default CodeEditorSolution;

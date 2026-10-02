import Editor from "@monaco-editor/react";
import { useState, useContext } from "react";

const CodeEditorSolution = ({ solution }: { solution: string }) => {
  return (
    <Editor
      height="60vh"
      width="100%"
      theme="vs-dark"
      defaultLanguage="javascript"
      defaultValue={solution}
      value={solution}
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

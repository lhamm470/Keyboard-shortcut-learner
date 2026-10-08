import Editor from "@monaco-editor/react";

const CodeEditorTesting = () => {
  return (
    <Editor
      height="60vh"
      width="100%"
      theme="vs-dark"
      defaultLanguage="javascript"
      defaultValue={`default code`}
    ></Editor>
  );
};

export default CodeEditorTesting;

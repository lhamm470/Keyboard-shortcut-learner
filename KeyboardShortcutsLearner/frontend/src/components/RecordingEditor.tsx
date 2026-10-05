import Editor from "@monaco-editor/react";

const RecordingEditor = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Editor
        width="100%"
        height="100%"
        language="javascript"
        theme="vs-dark"
      />
    </div>
  );
};

export default RecordingEditor;

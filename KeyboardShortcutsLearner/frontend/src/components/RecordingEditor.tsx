import Editor from "@monaco-editor/react";
import InputDisplay from "./ReusedComponents/InputDisplay";

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
        defaultValue={`
Console.log("hi");
Console.log("hi");
Console.log("hi");
Console.log("hi");
Console.log("hello world");
Console.log("hi");
Console.log("hi");
Console.log("hi");
Console.log("hi");
        `.trim()}
      />
      <InputDisplay />
    </div>
  );
};

export default RecordingEditor;

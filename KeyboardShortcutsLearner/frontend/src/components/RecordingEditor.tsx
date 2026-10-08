import Editor from "@monaco-editor/react";
import InputDisplay from "./ReusedComponents/InputDisplay";
import { AltUpLevel1 } from "./Lessons/AltUp/Levels/AltUpLevel1";

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
        defaultValue={AltUpLevel1().startCode}
      />
      <InputDisplay />
    </div>
  );
};

export default RecordingEditor;

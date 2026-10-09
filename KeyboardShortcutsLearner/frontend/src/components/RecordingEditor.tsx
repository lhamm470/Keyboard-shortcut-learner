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
        defaultValue={`
Console.log("0");
Console.log("0");
Console.log("0");

Console.log("111111");

Console.log("0");
Console.log("0");
Console.log("0");

Console.log("333333333333");
Console.log("333333333333");
Console.log("333333333333");

Console.log("0");
Console.log("0");
        `}
      />
      <InputDisplay />
    </div>
  );
};

export default RecordingEditor;

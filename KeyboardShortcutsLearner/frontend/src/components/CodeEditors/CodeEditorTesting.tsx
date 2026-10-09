import Editor from "@monaco-editor/react";

const CodeEditorTesting = () => {
  return (
    <Editor
      height="60vh"
      width="100%"
      theme="vs-dark"
      defaultLanguage="javascript"
      defaultValue={`
// Testing area with random code
const myList = ["a", "b", "c", "d", "e"];

for (let i = 0; i < myList.length; i++) {
    Console.log(myList[i]);
}

const myFirstFunction = (a, b) => {
    return a + b;
}

function mySecondFunction(a, b) {
    return a - b;
}

let myObject = {
    age: 20,
    height: 180,
    weight: 70
}
myObject.age = 30;
myObject.height = 170;
  `.trim()}
    ></Editor>
  );
};

export default CodeEditorTesting;

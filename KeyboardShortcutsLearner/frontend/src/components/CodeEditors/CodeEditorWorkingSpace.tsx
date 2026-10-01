import Editor from "@monaco-editor/react";
import { useIsDoingLevelContext } from "../../UseIsDoingLevelContext";
import { useEffect } from "react";

type CodeEditorWorkingSpaceProps = {
  solution: string;
  currentCode: string;
  startCode: string;
  setCurrentCode: (code: string) => void;
};

const CodeEditorWorkingSpace = ({
  solution,
  currentCode,
  startCode,
  setCurrentCode: setCurrentCode,
}: CodeEditorWorkingSpaceProps) => {
  const { isDoingLevel, setIsDoingLevel, isLevelComplete, setIsLevelComplete } =
    useIsDoingLevelContext();

  useEffect(() => {
    if (!isLevelComplete) {
      setCurrentCode(startCode);
    }
  }, [isLevelComplete]);

  return (
    <Editor
      height="60vh"
      width="40vw"
      theme="vs-dark"
      defaultLanguage="javascript"
      defaultValue={currentCode}
      value={currentCode}
      options={
        {
          //readOnly: !isDoingLevel,
        }
      }
      onChange={(value) => {
        setCurrentCode(value ?? "");
        if (value?.trim() == solution) {
          setIsLevelComplete(true);
          setIsDoingLevel(false);
        }
      }}
      onMount={(editor) => {
        editor.onKeyDown(() => {
          if (editor.hasTextFocus()) {
            setIsDoingLevel(true);
          }
        });

        editor.onDidChangeCursorSelection((event) => {
          const hasSelection =
            !event.selection.isEmpty() ||
            event.secondarySelections.some((selection) => !selection.isEmpty());

          if (hasSelection) {
            setIsDoingLevel(true);
          }
        });

        editor.onDidBlurEditorWidget(() => {
          setIsDoingLevel(false);
        });
      }}
    ></Editor>
  );
};

export default CodeEditorWorkingSpace;

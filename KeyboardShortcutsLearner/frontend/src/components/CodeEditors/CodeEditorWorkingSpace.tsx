import Editor from "@monaco-editor/react";
import { useIsDoingLevelContext } from "../../UseIsDoingLevelContext";
import { useEffect } from "react";
import { GameState } from "../../IsDoingLevelContext";
import { LevelDataType } from "../ReusedComponents/LevelDataType";

type CodeEditorWorkingSpaceProps = {
  levelData: LevelDataType;
  currentCode: string;
  setCurrentCode: (code: string) => void;
};

const CodeEditorWorkingSpace = ({
  levelData,
  currentCode,
  setCurrentCode: setCurrentCode,
}: CodeEditorWorkingSpaceProps) => {
  const { gameState, setGameState } = useIsDoingLevelContext();

  // reset code on idle
  useEffect(() => {
    console.log(gameState);
    if (gameState == GameState.IDLE) {
      setCurrentCode(levelData.startCode);
    }
  }, [gameState]);

  return (
    <Editor
      height="60vh"
      width="100%"
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
        if (value?.trim() == levelData.solutionCode) {
          setGameState(GameState.COMPLETED);
        }
      }}
      onMount={(editor) => {
        editor.onKeyDown(() => {
          if (editor.hasTextFocus()) {
            setGameState(GameState.INPROGRESS);
          }
        });

        editor.onDidChangeCursorSelection((event) => {
          const hasSelection =
            !event.selection.isEmpty() ||
            event.secondarySelections.some((selection) => !selection.isEmpty());

          if (hasSelection) {
            setGameState(GameState.INPROGRESS);
          }
        });

        editor.onDidBlurEditorWidget(() => {
          setGameState((currentGameState) =>
            currentGameState === GameState.INPROGRESS
              ? GameState.IDLE
              : currentGameState,
          );
        });
      }}
    ></Editor>
  );
};

export default CodeEditorWorkingSpace;

import { type ReactNode } from "react";

type LessonDataType = {
  learnModules: number;
  levelModules: number;
  levelsData: LevelDataType[];
  shortcut: string;
};

type LevelDataType = {
  description: string;
  targetTime: {
    minutes: number;
    seconds: number;
    milliseconds: number;
    totalMilliseconds: number;
  };
  solutionCode: string;
  startCode: string;
  exampleSolution: string;
  possibleKeyboardShortcuts: KeyboardShortcutTag[];
};

type KeyboardShortcutTag = {
  name: string;
  keys: ReactNode[];
};

export { LessonDataType, LevelDataType, KeyboardShortcutTag };

import { type ReactNode } from "react";

type LevelDataType = {
  description: string;
  targetTime: {
    minutes: number;
    seconds: number;
    milliseconds: number;
  };
  solutionCode: string;
  startCode: string;
  possibleKeyboardShortcuts: KeyboardShortcutTag[];
};

type KeyboardShortcutTag = {
  name: string;
  keys: ReactNode[];
};

export { LevelDataType, KeyboardShortcutTag };

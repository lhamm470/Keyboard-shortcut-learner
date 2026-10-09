import { AltUpLevel1 } from "./Levels/AltUpLevel1";
import { type LessonDataType } from "../../ReusedComponents/CustomTypes";
import { AltUpLearn1 } from "./LearningContent/AltUpLearn1";
import { AltUpLevel2 } from "./Levels/AltUpLevel2";

const AltUpData = (): LessonDataType => {
  return {
    learnModules: 1,
    levelModules: 2,
    levelsData: [AltUpLevel1(), AltUpLevel2()],
    learnData: AltUpLearn1(),
    shortcut: "Alt Up/Down",
  };
};

export default AltUpData;

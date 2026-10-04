import { AltUpLevel1 } from "./Levels/AltUpLevel1";
import { type LessonDataType } from "../../ReusedComponents/CustomTypes";

const AltUpData = (): LessonDataType => {
  return {
    learnModules: 1,
    levelModules: 1,
    levelsData: [AltUpLevel1()],
  };
};

export default AltUpData;

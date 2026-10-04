import { useState } from "react";
import LevelPageTemplate from "./LevelPageTemplate";
import { LessonDataType } from "../ReusedComponents/CustomTypes";
import ModuleNavigationTemplate from "./ModuleNavigationTemplate";
import EndOfPageNavigation from "../ReusedComponents/EndOfPageNavigation";

type LessonPageTemplateProps = {
  lessonData: LessonDataType;
};

const LessonPageTemplate = ({ lessonData }: LessonPageTemplateProps) => {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <>
      <ModuleNavigationTemplate
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        lessonData={lessonData}
      ></ModuleNavigationTemplate>
      {lessonData.levelsData.map((_, i) => {
        return (
          selectedTab == lessonData.learnModules + i + 1 && (
            <LevelPageTemplate levelData={lessonData.levelsData[i]} />
          )
        );
      })}
      <EndOfPageNavigation
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        lessonData={lessonData}
      ></EndOfPageNavigation>
    </>
  );
};

export default LessonPageTemplate;

import { useState } from "react";
import LevelPageTemplate from "./LevelPageTemplate";
import { LessonDataType } from "../ReusedComponents/CustomTypes";
import ModuleNavigationTemplate from "./ModuleNavigationTemplate";
import EndOfPageNavigation from "../ReusedComponents/EndOfPageNavigation";
import styled from "styled-components";
import LessonTitleTemplate from "./LessonTitleTemplate";

type LessonPageTemplateProps = {
  lessonData: LessonDataType;
};

const PageContainer = styled.main`
  width: min(100%, 1440px);
  margin-inline: auto;
  padding-inline: clamp(24px, 6vw, 80px);
  box-sizing: border-box;
`;

const LessonPageTemplate = ({ lessonData }: LessonPageTemplateProps) => {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <PageContainer>
      <LessonTitleTemplate lessonData={lessonData} />
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
    </PageContainer>
  );
};

export default LessonPageTemplate;

import styled from "styled-components";
import { LessonDataType } from "../ReusedComponents/CustomTypes";

const ModuleNavigationSC = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 60px;
  border-bottom: 2px solid black;
  overflow: hidden;
  padding-left: 10px;
  justify-content: center;
  margin-bottom: 15px;
`;

const ModuleTabSC = styled.button<{ $active: boolean }>`
  display: flex;
  position: relative;
  z-index: 1;
  background-color: #8e8d8d;
  color: black;
  border-radius: 8px;
  border: none;
  width: 100px;
  padding: 5px;
  transition: background-color 0.2s ease;
  top: ${({ $active }) => ($active ? "30px" : "52px")};
  justify-content: center;
  font-size: 1.6em;

  height: 100px;

  &:active {
    background-color: #686868;
  }
`;

type ModuleNavigationTemplateProps = {
  selectedTab: number;
  setSelectedTab: (newNumber: number) => void;
  lessonData: LessonDataType;
};

const ModuleNavigationTemplate = ({
  selectedTab,
  setSelectedTab,
  lessonData,
}: ModuleNavigationTemplateProps) => {
  return (
    <ModuleNavigationSC>
      {Array.from({ length: lessonData.learnModules }, (_, i) => {
        const moduleNumber = i + 1;

        return (
          <ModuleTabSC
            key={`learn-${moduleNumber}`}
            $active={selectedTab === moduleNumber}
            onClick={() => setSelectedTab(moduleNumber)}
          >
            Learn {moduleNumber}
          </ModuleTabSC>
        );
      })}

      {Array.from({ length: lessonData.levelModules }, (_, i) => {
        const levelNumber = i + 1;
        const moduleNumber = levelNumber + lessonData.learnModules;

        return (
          <ModuleTabSC
            key={`level-${levelNumber}`}
            $active={selectedTab === moduleNumber}
            onClick={() => setSelectedTab(moduleNumber)}
          >
            Level {levelNumber}
          </ModuleTabSC>
        );
      })}
    </ModuleNavigationSC>
  );
};

export default ModuleNavigationTemplate;

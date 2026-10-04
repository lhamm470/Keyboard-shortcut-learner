import styled from "styled-components";
import ActionButton from "./ActionButton";
import { LessonDataType } from "./CustomTypes";

const EndOfPageNavigationSC = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

type EndOfPageNavigationProps = {
  selectedTab: number;
  setSelectedTab: (selectedTab: number) => void;
  lessonData: LessonDataType;
};

const EndOfPageNavigation = ({
  selectedTab,
  setSelectedTab,
  lessonData,
}: EndOfPageNavigationProps) => {
  return (
    <EndOfPageNavigationSC>
      <ActionButton
        $backgroundColor="#b0b1b2"
        onClick={() => {
          if (selectedTab > 0) setSelectedTab(selectedTab - 1);
        }}
      >
        Previous
      </ActionButton>
      <ActionButton
        $backgroundColor="#2563eb"
        onClick={() => {
          if (selectedTab < lessonData.learnModules + lessonData.levelModules)
            setSelectedTab(selectedTab + 1);
        }}
      >
        Next
      </ActionButton>
    </EndOfPageNavigationSC>
  );
};

export default EndOfPageNavigation;

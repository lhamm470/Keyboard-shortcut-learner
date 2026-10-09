import styled from "styled-components";
import { useState } from "react";
import { LearnDataType } from "../ReusedComponents/CustomTypes";

const DemonstrativeClipsNavigationContainerSC = styled.div`
  background-color: #424141;
  display: flex;
  gap: 10px;
  padding: 8px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

const NavigationTab = styled.button<{ $active: boolean }>`
  padding: 7px;
  border-radius: 5px;
  transition: 0.2s ease;
  font-size: 0.8em;
  border: 1px solid ${({ $active }) => ($active ? "#777575" : "transparent")};
  font-weight: bold;
  color: ${({ $active }) => ($active ? "#e6e3e3" : "#b2b0b0")};
  background-color: ${({ $active }) => ($active ? "#5c5b5b" : "transparent")};
  box-shadow: ${({ $active }) =>
    $active ? "0 2px 5px rgba(0, 0, 0, 0.18)" : "none"};

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid #b2b0b0;
    outline-offset: 2px;
  }

  ${({ $active }) =>
    !$active &&
    `
      &:hover {
        background-color: #585757;
        color: #e2dede;
      }

      &:active {
        background-color: #535252;
      }
    `}
`;

type DemonstrativeClipsNavigationTemplateProps = {
  selectedTab: number;
  setSelectedTab: (tab: number) => void;
  learnData: LearnDataType;
};

const DemonstrativeClipsNavigationTemplate = ({
  selectedTab,
  setSelectedTab,
  learnData,
}: DemonstrativeClipsNavigationTemplateProps) => {
  return (
    <DemonstrativeClipsNavigationContainerSC>
      <NavigationTab
        $active={selectedTab === 1}
        onClick={() => setSelectedTab(1)}
      >
        Testing Space
      </NavigationTab>
      {learnData.demonstrationClips.map((_, i) => {
        return (
          <NavigationTab
            $active={selectedTab === i + 2}
            onClick={() => setSelectedTab(i + 2)}
          >
            Example {i + 1}
          </NavigationTab>
        );
      })}
    </DemonstrativeClipsNavigationContainerSC>
  );
};

export default DemonstrativeClipsNavigationTemplate;

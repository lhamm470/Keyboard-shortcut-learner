import styled from "styled-components";
import DemonstrativeClipsNavigationTemplate from "./DemonstrativeClipsNavigationTemplate";
import { LearnDataType } from "../ReusedComponents/CustomTypes";
import { useState, useEffect, useRef } from "react";
import CodeEditorTesting from "../CodeEditors/CodeEditorTesting";

const DemonstrativeClipsContainerSC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DemonstrationContentSC = styled.div<{ $fitContent: boolean }>`
  width: ${({ $fitContent }) => ($fitContent ? "fit-content" : "100%")};
`;

const DemonstrationClip = styled.video`
  display: block;
`;

type DemonstrativeClipsContainerProps = {
  learnData: LearnDataType;
  selectedTab: number;
  setSelectedTab: (tab: number) => void;
};

const DemonstrativeClipsContainer = ({
  learnData,
  selectedTab,
  setSelectedTab,
}: DemonstrativeClipsContainerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (selectedTab >= 2 && videoRef.current) {
      void videoRef.current
        .play()
        .catch((error) => console.error("Failed to play clip"));
    }
  }, [selectedTab]);

  return (
    <DemonstrativeClipsContainerSC>
      <DemonstrationContentSC $fitContent={selectedTab !== 1}>
        <DemonstrativeClipsNavigationTemplate
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          learnData={learnData}
        />
        {selectedTab === 1 && <CodeEditorTesting />}
        {learnData.demonstrationClips.map((clip, i) => {
          return (
            selectedTab === i + 2 && (
              <DemonstrationClip
                ref={videoRef}
                key={`demonstration-clip-${i}`}
                src={clip}
                controls
                loop
                muted
                playsInline
              />
            )
          );
        })}
      </DemonstrationContentSC>
    </DemonstrativeClipsContainerSC>
  );
};

export default DemonstrativeClipsContainer;

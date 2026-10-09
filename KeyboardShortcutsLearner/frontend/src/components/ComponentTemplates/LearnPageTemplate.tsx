import { LearnDataType } from "../ReusedComponents/CustomTypes";
import styled from "styled-components";
import DemonstrativeClipsContainer from "./DemonstrativeClipsContainer";
import { useState } from "react";

type LearnPageTemplateProps = {
  learnData: LearnDataType;
};

const LearnPageContentContainer = styled.div`
  display: grid;
  grid-template-columns: auto 600px;
`;

const DescriptiveContentContainer = styled.div`
  padding: 10px 25px 10px 15px;
`;

const ExampleLink = styled.button`
  padding: 0;
  border: 0;
  background: none;
  color: #0563c1;
  font: inherit;
  cursor: pointer;

  &:hover {
    color: #034a91;
  }

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
`;

const DemonstrativeContainer = styled.div`
  padding: 5px;
  padding-left: 15px;
  border-left: 3px solid gray;
`;

const HeadingTitle = styled.p`
  font-size: 3em;
`;

const LearnPageTemplate = ({ learnData }: LearnPageTemplateProps) => {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <LearnPageContentContainer>
      <DescriptiveContentContainer>
        <HeadingTitle>Overview</HeadingTitle>
        <p>
          <em>{learnData.definition}</em>
        </p>
        <br />
        {learnData.content.map((content, i) => {
          const clipIndex = content.demonstrationClipIndex;
          return (
            <>
              <p>
                {content.text}{" "}
                {clipIndex !== undefined && (
                  <ExampleLink
                    onClick={() => {
                      setSelectedTab(clipIndex + 1);
                    }}
                  >
                    View Example
                  </ExampleLink>
                )}
              </p>
            </>
          );
        })}
      </DescriptiveContentContainer>
      <DemonstrativeContainer>
        <DemonstrativeClipsContainer
          learnData={learnData}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </DemonstrativeContainer>
    </LearnPageContentContainer>
  );
};

export default LearnPageTemplate;

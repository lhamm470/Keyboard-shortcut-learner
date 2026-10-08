import { LearnDataType } from "../ReusedComponents/CustomTypes";
import styled from "styled-components";
import DemonstrativeClipsContainer from "./DemonstrativeClipsContainer";

type LearnPageTemplateProps = {
  learnData: LearnDataType;
};

const LearnPageContentContainer = styled.div`
  display: grid;
  grid-template-columns: auto 600px;
`;

const DescriptiveContentContainer = styled.div``;

const DemonstrativeContainer = styled.div`
  padding: 5px;
  padding-left: 15px;
  border-left: 3px solid gray;
`;

const LearnPageTemplate = ({ learnData }: LearnPageTemplateProps) => {
  return (
    <LearnPageContentContainer>
      <DescriptiveContentContainer>
        {learnData.content[0]}
      </DescriptiveContentContainer>
      <DemonstrativeContainer>
        <DemonstrativeClipsContainer learnData={learnData} />
      </DemonstrativeContainer>
    </LearnPageContentContainer>
  );
};

export default LearnPageTemplate;

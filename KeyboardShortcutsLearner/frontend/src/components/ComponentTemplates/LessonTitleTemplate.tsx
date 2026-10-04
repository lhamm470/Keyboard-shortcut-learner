import styled from "styled-components";
import { LessonDataType } from "../ReusedComponents/CustomTypes";

const LessonTitleSC = styled.div`
  display: flex;
  justify-content: center;
  font-size: 3em;
  text-decoration: underline;
`;

type LessonTitleTemplateProps = {
  lessonData: LessonDataType;
};

const LessonTitleTemplate = ({ lessonData }: LessonTitleTemplateProps) => {
  return (
    <>
      <LessonTitleSC>{lessonData.shortcut}</LessonTitleSC>
    </>
  );
};

export default LessonTitleTemplate;

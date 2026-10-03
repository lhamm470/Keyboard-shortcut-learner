import { AiOutlineQuestionCircle } from "react-icons/ai";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const GoldStar = styled(FontAwesomeIcon).attrs({
  icon: faStar,
})`
  width: 20px;
  height: 20px;
  color: #ffd700;
`;

const PossibleKeyboardShortcutsHelp = () => {
  const popover = (
    <Popover id="help-popover">
      <Popover.Body>
        Shortcuts marked with <GoldStar /> are highly recommended for this
        level.
        <br />
        Other shortcuts may also be useful.
      </Popover.Body>
    </Popover>
  );

  return (
    <>
      <OverlayTrigger
        trigger="click"
        placement="right"
        overlay={popover}
        rootClose
      >
        <AiOutlineQuestionCircle size={20}></AiOutlineQuestionCircle>
      </OverlayTrigger>
    </>
  );
};

export default PossibleKeyboardShortcutsHelp;

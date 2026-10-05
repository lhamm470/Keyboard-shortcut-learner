import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

const SideNavButtonSC = styled.button`
  background-color: gray;
  border-radius: 99px;
  width: 40px;
  height: 40px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  transition: background-color 0.2s ease;

  &:active {
    background-color: #6c6c6c;
  }
`;

type SideNavButtonProps = {
  setIsSideNavOpen: (isSideNavOpen: boolean) => void;
};

const SideNavButton = ({ setIsSideNavOpen }: SideNavButtonProps) => {
  return (
    <SideNavButtonSC
      onClick={() => {
        setIsSideNavOpen(true);
      }}
    >
      <GiHamburgerMenu size={22} />
    </SideNavButtonSC>
  );
};

export default SideNavButton;

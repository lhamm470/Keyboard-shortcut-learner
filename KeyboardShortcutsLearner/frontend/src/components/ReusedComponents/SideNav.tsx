import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SideNavButton from "./SideNavButton";

const SideNavSC = styled.div<{ $isSideNavOpen: boolean }>`
  height: 100%; /* 100% Full-height */
  position: fixed; /* Stay in place */
  z-index: 9999; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 90px; /* Place content 60px from the top */
  width: ${({ $isSideNavOpen }) => ($isSideNavOpen ? "250px" : "0")};
  transition: 0.3s; /* 0.5 second transition effect to slide in the sidenav */

  /* Position and style the close button (top right corner) */
  & .closebtn {
    color: #818181;
    position: absolute;
    top: 50px;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
    height: 30px;
    width: 30px;
    transition: color 0.2s ease;
    &:hover {
      cursor: pointer;
      color: #f1f1f1;
    }
  }
`;

const SideNavLink = styled.button<{ $isSideNavOpen: boolean }>`
  background-color: transparent;
  border: none;
  border-radius: 99px;
  transition: 0.3s ease;
  padding: 8px 0px 8px 16px;
  margin-left: 16px;
  margin-right: 16px;
  text-decoration: none;
  font-size: 25px;
  display: flex;
  width: calc(100% - 32px);
  transform: ${({ $isSideNavOpen }) =>
    $isSideNavOpen ? "translateX(0)" : "translateX(-250px)"};

  &:hover {
    background-color: #474747;
    color: #f1f1f1;
  }
`;

const SideNav = () => {
  const navigate = useNavigate();
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  return (
    <>
      <SideNavButton setIsSideNavOpen={setIsSideNavOpen} />
      <SideNavSC id="sideNav" $isSideNavOpen={isSideNavOpen}>
        <IoMdClose
          onClick={() => {
            setIsSideNavOpen(false);
          }}
          size={40}
          className="closebtn"
        ></IoMdClose>
        <SideNavLink
          $isSideNavOpen={isSideNavOpen}
          onClick={() => navigate("/")}
        >
          Home
        </SideNavLink>
        <SideNavLink
          $isSideNavOpen={isSideNavOpen}
          onClick={() => navigate("/alt-up")}
        >
          Alt Up
        </SideNavLink>
      </SideNavSC>
    </>
  );
};

export default SideNav;

import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

const SideNavSC = styled.div`
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */

  /* The navigation menu links */
  & a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }

  /* When you mouse over the navigation links, change their color */
  & a:hover {
    color: #f1f1f1;
  }

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

const SideNav = () => {
  return (
    <SideNavSC id="sideNav">
      <IoMdClose
        onClick={() => {
          const sideNav = document.getElementById("sideNav");
          if (sideNav) sideNav.style.width = "0px";
        }}
        size={40}
        className="closebtn"
      ></IoMdClose>
    </SideNavSC>
  );
};

export default SideNav;

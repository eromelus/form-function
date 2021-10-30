import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavMenu,
  NavLinks,
} from "./style";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo href="/">
            <img src="./logo.png" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks>My Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Testimonials</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>About Me</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

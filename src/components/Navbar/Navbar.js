import React from "react";
import { Nav, Logo, Bars, NavMenu, NavLink, NavButton } from "./NavbarElements";
import logo from "../../images/logo.svg";
import bars from "../../images/icon-hamburger.svg";

const Navbar = () => {
  return (
    <Nav>
      <Logo src={logo} alt="sunnyside logo" />
      <Bars src={bars} alt="hamburger icon" />
      <NavMenu>
        <NavLink>About</NavLink>
        <NavLink>Services</NavLink>
        <NavLink>Projects</NavLink>
        <NavButton>CONTACT</NavButton>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;

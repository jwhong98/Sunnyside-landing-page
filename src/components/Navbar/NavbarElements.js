import styled from "styled-components";

export const Nav = styled.nav`
  background: transparent;
  position: absolute;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
`;

export const Logo = styled.img`
  cursor: pointer;
`;

export const Bars = styled.img`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  height: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
`;

export const NavButton = styled.button`
  font-family: "Fraunces", serif;
  padding: 14px 22px;
  font-size: 16px;
  border-radius: 25px;
  border: none;
  outline: none;
  background: #fff;
`;

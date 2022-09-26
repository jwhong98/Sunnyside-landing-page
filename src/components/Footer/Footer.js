import React from "react";
import {
  FooterContainer,
  FooterImgWrap,
  FooterContentWrap,
  FooterContent,
  Logo,
  FooterLinks,
  SocialLinks,
} from "./FooterElements";
import milk from "../../images/desktop/image-gallery-milkbottles.jpg";
import orange from "../../images/desktop/image-gallery-orange.jpg";
import cone from "../../images/desktop/image-gallery-cone.jpg";
import sugar from "../../images/desktop/image-gallery-sugarcubes.jpg";
import logo from "../../images/footerLogo.svg";
import facebook from "../../images/icon-facebook.svg";
import instagram from "../../images/icon-instagram.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterImgWrap>
        <img src={milk} alt="" />
        <img src={orange} alt="" />
        <img src={cone} alt="" />
        <img src={sugar} alt="" />
      </FooterImgWrap>
      <FooterContentWrap>
        <FooterContent>
          <Logo src={logo} alt="sunnyside logo" />
          <FooterLinks>
            <a href="/">About</a>
            <a href="/">Services</a>
            <a href="/">Projects</a>
          </FooterLinks>
          <SocialLinks>
            <img src={facebook} alt="facebook icon" />
            <img src={instagram} alt="instagram icon" />
            <img src={twitter} alt="twitter icon" />
            <img src={pinterest} alt="pinterest icon" />
          </SocialLinks>
        </FooterContent>
      </FooterContentWrap>
    </FooterContainer>
  );
};

export default Footer;

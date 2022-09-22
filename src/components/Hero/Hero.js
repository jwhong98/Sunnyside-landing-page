import React from "react";
import {
  HeroContainer,
  HeroContent,
  HeroHeading,
  DownArrow,
} from "./HeroElements";
import downArrow from "../../images/icon-arrow-down.svg";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroHeading>WE ARE CREATIVES</HeroHeading>
        <DownArrow src={downArrow} alt="down arrow icon" />
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

import React from "react";
import {
  InfoSectionContainer,
  Column1,
  InfoTextWrap,
  InfoTitle,
  InfoDescription,
  InfoLink,
  Column2,
  InfoImg,
} from "./InfoSectionElements";

const InfoSection = (props) => {
  return (
    <InfoSectionContainer imgStart={props.imgStart}>
      <Column1>
        <InfoTextWrap>
          <InfoTitle>{props.title}</InfoTitle>
          <InfoDescription>{props.description}</InfoDescription>
          <InfoLink yellowUnderline={props.yellowUnderline}>
            LEARN MORE
          </InfoLink>
        </InfoTextWrap>
      </Column1>
      <Column2>
        <InfoImg src={props.img} alt="" />
      </Column2>
    </InfoSectionContainer>
  );
};

export default InfoSection;

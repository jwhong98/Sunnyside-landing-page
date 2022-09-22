import styled from "styled-components";
import desktopBg from "../../images/desktop/image-header.jpg";

export const HeroContainer = styled.section`
  height: 100vh;
  background-image: url(${desktopBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
`;

export const HeroContent = styled.div`
  text-align: center;
  margin-top: 180px;
`;

export const HeroHeading = styled.h1`
  font-size: 3.5rem;
  font-family: "Fraunces", serif;
  font-weight: 900;
  color: #fff;
  letter-spacing: 10px;
`;

export const DownArrow = styled.img`
  margin-top: 90px;
`;

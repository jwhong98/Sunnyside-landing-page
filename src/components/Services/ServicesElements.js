import styled from "styled-components";

export const ServicesSection = styled.section`
  display: flex;
`;

export const ServicesColumn = styled.article`
  position: relative;
  width: 100%;
`;

export const ServiceImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const ServicesContent = styled.div`
  position: absolute;
  bottom: 8%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 55%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${(props) => props.color};
`;

export const ContentTitle = styled.h1`
  font-family: "Fraunces", serif;
  font-weight: 900;
  font-size: 2rem;
`;

export const ContentDescription = styled.p`
  line-height: 1.5;
`;

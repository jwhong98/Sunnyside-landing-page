import styled from "styled-components";

export const InfoSectionContainer = styled.section`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
`;

export const Column1 = styled.article`
  grid-area: col1;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 0 3rem; */
`;

export const InfoTextWrap = styled.div`
  max-width: 63%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;

export const InfoTitle = styled.h1`
  font-family: "Fraunces", serif;
  font-weight: 900;
  font-size: 3rem;
  color: hsl(212, 27%, 19%);
`;

export const InfoDescription = styled.p`
  line-height: 1.5;
  color: hsl(232, 10%, 55%);
`;

export const InfoLink = styled.a`
  font-family: "Fraunces", serif;
  font-weight: 900;
  color: hsl(212, 27%, 19%);
  width: auto;
  position: relative;
  left: 8px;

  ::after {
    content: "";
    height: 9px;
    width: 115%;
    position: relative;
    top: -6px;
    left: -8px;
    background: ${({ yellowUnderline }) =>
      yellowUnderline
        ? `rgba(250, 212, 0, 0.25)`
        : `rgba(254, 120, 103, 0.25);`};
    border-radius: 5px;
    display: block;
  }
`;

export const Column2 = styled.article`
  grid-area: col2;
`;

export const InfoImg = styled.img`
  width: 100%;
  height: 100%;
`;

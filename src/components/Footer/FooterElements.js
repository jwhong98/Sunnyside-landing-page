import styled from "styled-components";

export const FooterContainer = styled.footer`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const FooterImgWrap = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  img {
    display: block;
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
  }
`;

export const FooterContentWrap = styled.section`
  flex: 1 1 auto;
  background: #8bd0c3;
  color: hsl(168, 34%, 41%);
  padding: 60px 20px;
`;

export const FooterContent = styled.div`
  margin: auto;
  width: 100%;
  max-width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  margin-bottom: 30px;
  width: 175px;
`;

export const FooterLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 3rem;

  a {
    color: inherit;
    text-decoration: none;
    font-size: 1.1em;
  }
`;

export const SocialLinks = styled.div`
  width: 175px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`;

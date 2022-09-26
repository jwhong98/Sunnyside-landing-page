import styled from "styled-components";

export const CardContainer = styled.article`
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  text-align: center;
`;

export const CardImg = styled.img`
  border-radius: 50%;
  width: 80px;
`;

export const CardReview = styled.p`
  line-height: 1.5;
  color: hsl(213, 9%, 39%);
`;

export const Reviewer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Name = styled.h3`
  color: hsl(212, 27%, 19%);
  font-weight: 900;
`;

export const Position = styled.p`
  color: hsl(210, 4%, 67%);
  font-size: 0.7em;
`;

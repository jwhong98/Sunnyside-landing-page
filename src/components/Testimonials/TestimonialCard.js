import React from "react";
import {
  CardContainer,
  CardImg,
  CardReview,
  Reviewer,
  Name,
  Position,
} from "./TestimonialCardElements";

const TestimonialCard = (props) => {
  return (
    <CardContainer>
      <CardImg src={props.img} alt="reviewer img" />
      <CardReview>{props.review}</CardReview>
      <Reviewer>
        <Name>{props.name}</Name>
        <Position>{props.position}</Position>
      </Reviewer>
    </CardContainer>
  );
};

export default TestimonialCard;

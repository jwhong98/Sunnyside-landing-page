import React from "react";
import TestimonialCard from "./TestimonialCard";
import {
  TestimonialsContainer,
  TestimonialsWrap,
  TestimonialsTitle,
  TestimonialsContent,
} from "./TestimonialsElements";
import { data } from "./data";

const Testimonials = () => {
  const createCard = (info) => {
    return (
      <TestimonialCard
        key={info.id}
        img={info.img}
        review={info.review}
        name={info.name}
        position={info.position}
      />
    );
  };
  return (
    <TestimonialsContainer>
      <TestimonialsWrap>
        <TestimonialsTitle>CLIENT TESTIMONIALS</TestimonialsTitle>
        <TestimonialsContent>{data.map(createCard)}</TestimonialsContent>
      </TestimonialsWrap>
    </TestimonialsContainer>
  );
};

export default Testimonials;

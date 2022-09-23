import React from "react";
import graphicDesign from "../../images/desktop/image-graphic-design.jpg";
import photography from "../../images/desktop/image-photography.jpg";
import {
  ServicesSection,
  ServicesColumn,
  ServiceImg,
  ServicesContent,
  ContentTitle,
  ContentDescription,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesSection>
      <ServicesColumn>
        <ServiceImg src={graphicDesign} />
        <ServicesContent color="hsl(167, 40%, 24%)">
          <ContentTitle>Graphic Design</ContentTitle>
          <ContentDescription>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients'
            attention.
          </ContentDescription>
        </ServicesContent>
      </ServicesColumn>
      <ServicesColumn>
        <ServiceImg src={photography} />
        <ServicesContent color="hsl(198, 62%, 26%)">
          <ContentTitle>Photography</ContentTitle>
          <ContentDescription>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </ContentDescription>
        </ServicesContent>
      </ServicesColumn>
    </ServicesSection>
  );
};

export default Services;

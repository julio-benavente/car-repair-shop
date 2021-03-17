import React from "react";
import { Container } from "../../styles/globalStyle";
import {
  MainSection,
  Photo,
  Title,
  Description,
} from "../../styles/aboutStyle";
import building from "../../assets/images/building.jpg";

const AboutSection = () => {
  return (
    <MainSection>
      <Container grid12 rows="50px auto">
        <Photo />
        <Title>About us</Title>
        <Description>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </p>
        </Description>
      </Container>
    </MainSection>
  );
};

export default AboutSection;

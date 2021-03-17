import React from "react";
import { Container } from "../../styles/globalStyle";
import {
  MainSection,
  Testimony,
  Title,
  PreviousButton,
  TestimonyCard,
  NextButton,
} from "../../styles/testimoniesStyle";

const TestimoniesSection = () => {
  return (
    <MainSection>
      <Container grid12>
        <Title>Testimonies</Title>
        <Testimony>
          <PreviousButton>
            <i class="fas fa-chevron-left"></i>
          </PreviousButton>
          <TestimonyCard>
            <p className="testimony">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non.
            </p>
            <p className="author">
              <span>~</span>Julio Benavente
            </p>
            <i class="quote fas fa-quote-right"></i>
          </TestimonyCard>
          <NextButton>
            <i class="fas fa-chevron-right"></i>
          </NextButton>
        </Testimony>
      </Container>
    </MainSection>
  );
};

export default TestimoniesSection;

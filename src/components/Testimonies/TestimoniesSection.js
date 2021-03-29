import React, { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

// Styles
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
  const testimonies = [
    {
      testimony:
        "Lorem ipsum dolor sitsdafas amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non.",
      author: "Julio Benavente",
    },
    {
      testimony:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, gfhjfpurus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non.",
      author: "Cesar Benavente",
    },
    {
      testimony:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, sdfgsdfpurus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non.",
      author: "Lidia Benavente",
    },
    {
      testimony:
        "Lorem ipsum dolor sit amet, consectetur adiasdfasdfpiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non.",
      author: "Margory Benavente",
    },
  ];

  const [onDisplay, setOnDisplay] = useState(0);

  const handleNext = () => {
    let nubmerOfTestimonies = testimonies.length - 1;

    onDisplay == nubmerOfTestimonies
      ? setOnDisplay(0)
      : setOnDisplay(onDisplay + 1);
  };

  const handlePrevious = () => {
    let nubmerOfTestimonies = testimonies.length - 1;
    onDisplay == 0
      ? setOnDisplay(nubmerOfTestimonies)
      : setOnDisplay(onDisplay - 1);
  };

  const variants = {
    out: {
      opacity: 0,
      x: -10,
      transition: {
        ease: "easeInOut",
      },
    },
    in: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      x: 10,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  return (
    <MainSection id="testimoniesSection">
      <Container grid12>
        <Title>Testimonies</Title>
        <Testimony>
          <PreviousButton onClick={handlePrevious}>
            <i class="fas fa-chevron-left"></i>
          </PreviousButton>
          <TestimonyCard onDisplay={onDisplay}>
            <AnimatePresence exitBeforeEnter>
              <motion.p
                key={testimonies[onDisplay].testimony}
                initial="out"
                animate="in"
                exit="exit"
                variants={variants}
                className="testimony"
              >
                {testimonies[onDisplay].testimony}
              </motion.p>

              <motion.p
                initial="out"
                key={testimonies[onDisplay].author}
                animate="in"
                exit="exit"
                variants={variants}
                className="author"
              >
                <span>~</span>
                {testimonies[onDisplay].author}
              </motion.p>
            </AnimatePresence>
            <i class="quote fas fa-quote-right"></i>
          </TestimonyCard>
          <NextButton onClick={handleNext}>
            <i class="fas fa-chevron-right"></i>
          </NextButton>
        </Testimony>
      </Container>
    </MainSection>
  );
};

export default TestimoniesSection;

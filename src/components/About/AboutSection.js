import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

// Styles
import { Container } from "../../styles/globalStyle";
import {
  MainSection,
  Photo,
  Title,
  Description,
} from "../../styles/aboutStyle";

// Variants
const photoVariants = {
  initial: {
    opacity: 0,
    x: -100,
    transition: { duration: 1.3, ease: "easeInOut", when: "beforeChildren" },
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      when: "beforeChildren",
    },
  },
};

const line1Variants = {
  initial: {
    opacity: 0,
    y: -40,
  },
  animate: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.35,
    },
  },
};

const line2Variants = {
  initial: {
    opacity: 0,
    x: -40,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
    },
  },
};

const descriptionVariants = {
  initial: {
    opacity: 0,
    x: 100,
    transition: { duration: 1.3, ease: "easeInOut" },
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.3, ease: [0.6, 0.05, -0.01, 0.9] },
  },
};

const AboutSection = () => {
  const [photoRef, photoInView, entry] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const [descriptionRef, descriptionInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (photoInView) {
      animation.start("animate");
    }
  }, [animation, photoInView]);

  useEffect(() => {
    if (descriptionInView) {
      animation.start("animate");
    }
  }, [animation, descriptionInView]);

  return (
    <MainSection ref={photoRef}>
      <Container grid12 rows="50px auto">
        <Photo initial="initial" animate={animation} variants={photoVariants}>
          <motion.div
            custom={{}}
            variants={line1Variants}
            className="line-1"
          ></motion.div>
          <motion.div variants={line2Variants} className="line-2"></motion.div>
        </Photo>
        <Title
          initial="initial"
          animate={animation}
          variants={descriptionVariants}
        >
          About us
        </Title>
        <Description
          initial="initial"
          animate={animation}
          variants={descriptionVariants}
        >
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

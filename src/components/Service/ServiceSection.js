import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence, useCycle } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Styles
import { Container } from "../../styles/globalStyle";
import {
  MainSection,
  Title,
  ServiceCards,
  Card,
} from "../../styles/serviceStyle";

const services = [
  {
    name: "Service 1",
    img: "",
    list: ["Description 1", "Description 2", "Description 3"],
  },
  {
    name: "Service 2",
    img: "",
    list: ["Description 1", "Description 2", "Description 3"],
  },
  {
    name: "Service 3",
    img: "",
    list: ["Description 1", "Description 2", "Description 3"],
  },
  {
    name: "Service 4",
    img: "",
    list: [
      "Description 1",
      "Description 2",
      "Description 3",
      "Description 3",
      "Description 3",
    ],
  },
];

const serviceCardVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  initial: {
    opacity: 0,
    x: -30,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

const ServiceSection = () => {
  const [serviceCardsRef, serviceCardsInView] = useInView({
    threshold: 0.3,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (serviceCardsInView) animation.start("animate");
  }, [animation, serviceCardsInView]);

  const [sectionRef, sectionInView] = useInView();

  return (
    <MainSection ref={sectionRef} id="serviceSection">
      <Container>
        <Title>Services</Title>
        <ServiceCards
          ref={serviceCardsRef}
          variants={serviceCardVariants}
          initial="initial"
          animate={animation}
        >
          {services.map((service) => {
            return <CardItem service={service} />;
          })}
        </ServiceCards>
      </Container>
    </MainSection>
  );
};

export default ServiceSection;

const CardItem = ({ service: { name, list } }) => {
  const card = useRef();
  const { width } = useWindowSize();
  const [cardWidth, setCardWidth] = useState("100%");
  const [current, cycle] = useCycle("out", "in");

  useEffect(() => {
    if (card.current) setCardWidth(`${card.current.offsetWidth - 50}px`);
  }, [width, card, current]);

  const animation = useAnimation();
  animation.start("in");
  const ulVariants = {
    out: {
      width: "50px",
      transition: {
        ease: "easeInOut",
        when: "afterChildren",
      },
    },
    in: {
      width: cardWidth,
      transition: {
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const liVariants = {
    out: {
      x: -10,
      opacity: 0,
    },
    in: {
      x: 1,
      opacity: 1,
    },
  };
  return (
    <Card
      variants={cardVariants}
      onHoverStart={() => cycle(1)}
      onHoverEnd={() => {
        animation.stop();
        cycle(0);
      }}
      onClick={() => cycle(current ? "in" : "out")}
    >
      <h2>{name}</h2>
      <div className="serviceImage" ref={card}>
        <motion.ul animate={current} variants={ulVariants}>
          <i class="fas fa-chevron-right"></i>
          {list.map((item) => (
            <motion.li variants={liVariants}>{item}</motion.li>
          ))}
        </motion.ul>
      </div>
    </Card>
  );
};

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

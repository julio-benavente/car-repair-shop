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
    list: [
      "Description Description  Description 1",
      "Description 2",
      "Description 3",
    ],
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
  const body = document.querySelector("body");
  const [serviceCardsRef, serviceCardsInView] = useInView({
    threshold: 0.3,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (serviceCardsInView) animation.start("animate");
  }, [animation, serviceCardsInView]);

  console.log(serviceCardsInView);
  const [sectionRef, sectionInView] = useInView();
  return (
    <MainSection ref={sectionRef}>
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
  const [cardWidth, setCardWidth] = useState("100%");
  useEffect(() => {
    if (card.current) setCardWidth(`${card.current.offsetWidth - 50}px`);
  }, [card]);

  const ulVariants = {
    out: {
      width: "50px",
      transition: {
        ease: "easeInOut",
      },
    },
    in: {
      width: cardWidth,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  const liVariants = {
    out: {},
  };

  const [current, cycle] = useCycle("out", "in");
  return (
    <Card
      variants={cardVariants}
      onHoverStart={() => cycle(1)}
      onHoverEnd={() => cycle(0)}
      onClick={() => cycle(current ? "in" : "out")}
    >
      <h2>{name}</h2>
      <div className="serviceImage" ref={card}></div>
      <motion.ul animate={current} variants={ulVariants}>
        <i class="fas fa-chevron-right"></i>
        {list.map((item) => (
          <motion.li>{item}</motion.li>
        ))}
      </motion.ul>
    </Card>
  );
};

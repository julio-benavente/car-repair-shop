import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Container } from "../../styles/globalStyle";
import { scroller } from "react-scroll";

// Styles
import {
  Logo,
  HamburgerMenu,
  Headline,
  AppointmentButton,
  SocialMediaIcons,
  MainSection,
  Information,
  Navbar,
  NavLink,
} from "../../styles/homeStyle";

// Variants
const hamburgerMenuVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const navbarVariants = {
  initial: { display: "none" },
  animate: {
    display: "grid",
    transition: {
      staggerChildren: 0.05,
    },
  },
  exit: { display: "none" },
};

const navLinkVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
};

const HomeSection = ({
  pageYOffset,
  appointmentIsOpen,
  setAppointmentIsOpen,
}) => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const handleNavbar = () => setNavIsOpen(!navIsOpen);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const _900 = innerWidth < 901;

  //Problem : This rerender the hamburgermenu everytime it scrolls
  const size = useWindowSize();

  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, [size]);

  return (
    <MainSection>
      {_900 && (
        <HamburgerMenu onClick={handleNavbar}>
          {!navIsOpen && (
            <motion.i
              class="fas fa-grip-lines"
              initial="initial"
              animate="animate"
              variants={hamburgerMenuVariants}
            ></motion.i>
          )}
          {navIsOpen && (
            <motion.i
              class="fas fa-times"
              initial="initial"
              animate="animate"
              variants={hamburgerMenuVariants}
            ></motion.i>
          )}
        </HamburgerMenu>
      )}
      <Container grid12>
        <Information>
          <p>
            <i class="far fa-envelope"></i>youremail@email.com
          </p>
          <p>
            <i class="far fa-clock"></i>Mon - Sat 9:00 - 18:00
          </p>
          <p>
            <i class="fas fa-phone-alt"></i>(999) 999 9999
          </p>
          <SocialMediaIcons>
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
          </SocialMediaIcons>
        </Information>
        <Logo>
          <span>Taylor</span>
          Automotive
        </Logo>
        <AnimatePresence>
          {(!_900 || navIsOpen) && (
            <Navbar
              initial="initial"
              animate="animate"
              exit="exit"
              variants={navbarVariants}
            >
              <NavLink
                variants={navLinkVariants}
                onClick={() => {
                  setNavIsOpen(false);
                  scroller.scrollTo("home", { smooth: true, offset: -100 });
                }}
              >
                Home
              </NavLink>
              <NavLink
                variants={navLinkVariants}
                onClick={() => {
                  setNavIsOpen(false);
                  scroller.scrollTo("aboutSection", {
                    smooth: true,
                    offset: -100,
                  });
                }}
              >
                About us
              </NavLink>
              <NavLink
                variants={navLinkVariants}
                onClick={() => {
                  setNavIsOpen(false);
                  scroller.scrollTo("serviceSection", {
                    smooth: true,
                    offset: -100,
                  });
                }}
              >
                Services
              </NavLink>
              <NavLink
                variants={navLinkVariants}
                onClick={() => {
                  setNavIsOpen(false);
                  scroller.scrollTo("testimoniesSection", {
                    smooth: true,
                    offset: -100,
                  });
                }}
              >
                Testimonies
              </NavLink>
              <NavLink
                variants={navLinkVariants}
                onClick={() => {
                  setNavIsOpen(false);
                  scroller.scrollTo("contactSection", {
                    smooth: true,
                    offset: -100,
                  });
                }}
              >
                Contact us
              </NavLink>
            </Navbar>
          )}
        </AnimatePresence>
        <Headline>
          Take it back to
          <span>its best moment</span>
        </Headline>
        <AppointmentButton
          onClick={() => {
            setAppointmentIsOpen(!appointmentIsOpen);
          }}
        >
          Book an appointment
          <i class="far fa-calendar-alt"></i>
        </AppointmentButton>
      </Container>
    </MainSection>
  );
};

export default HomeSection;

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

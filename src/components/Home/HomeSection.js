import React from "react";
import { Container } from "../../styles/globalStyle";
// Components

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

const HomeSection = ({
  pageYOffset,
  appointmentIsOpen,
  setAppointmentIsOpen,
}) => {
  return (
    <MainSection>
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
        <Navbar>
          <NavLink>Home</NavLink>
          <NavLink>About us</NavLink>
          <NavLink>Services</NavLink>
          <NavLink>Testimonies</NavLink>
          <NavLink>Contact us</NavLink>
        </Navbar>
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

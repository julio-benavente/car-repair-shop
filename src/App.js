import React, { useState, useEffect } from "react";
import { GlobalStyle } from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
// Components
import HomeSection from "./components/Home/HomeSection";
import AboutSection from "./components/About/AboutSection";
import ServiceSection from "./components/Service/ServiceSection";
import TestimoniesSection from "./components/Testimonies/TestimoniesSection";
import ContactSection from "./components/Contact/ContactSection";
import FooterSection from "./components/Footer/FooterSection";
import Email from "./components/Forms/Email";
import Appointment from "./components/Forms/Appointment";

const App = () => {
  const [pageYOffset, setPageYOffSet] = useState(null);
  const [emailIsOpen, setEmailIsOpen] = useState(false);
  const [appointmentIsOpen, setAppointmentIsOpen] = useState(false);
  const body = document.querySelector("body");
  useEffect(() => {
    setPageYOffSet(window.pageYOffset);

    if (emailIsOpen || appointmentIsOpen) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }
  }, [emailIsOpen, appointmentIsOpen]);

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <GlobalStyle />
        <HomeSection
          appointmentIsOpen={appointmentIsOpen}
          setAppointmentIsOpen={setAppointmentIsOpen}
        />
        <AboutSection />
        <ServiceSection />
        <TestimoniesSection />
        <ContactSection
          emailIsOpen={emailIsOpen}
          setEmailIsOpen={setEmailIsOpen}
        />
        <FooterSection />
        {emailIsOpen && (
          <Email
            top={pageYOffset}
            emailIsOpen={emailIsOpen}
            setEmailIsOpen={setEmailIsOpen}
          />
        )}
        {appointmentIsOpen && (
          <Appointment
            top={pageYOffset}
            appointmentIsOpen={appointmentIsOpen}
            setAppointmentIsOpen={setAppointmentIsOpen}
          ></Appointment>
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;

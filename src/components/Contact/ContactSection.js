import React, { useState, useEffect } from "react";
import { Container } from "../../styles/globalStyle";

import {
  MainSection,
  Title,
  InfoCard,
  Map,
  SocialMediaButtons,
} from "../../styles/contactStyle";

const contactInformation = [
  {
    label: "Hours",
    detail: "Mon - Fri 07:00 - 17:00",
  },
  {
    label: "Phone",
    detail: "(919) 774 - 4037",
  },
  {
    label: "Address",
    detail: "1007 Hawkins Avenue Sanford, NC 27330",
  },
  {
    label: "Email",
    detail: "customer.service@taylorautomotive.com",
  },
];

const ContactSection = ({ pageYOffset, emailIsOpen, setEmailIsOpen }) => {
  return (
    <MainSection>
      <Container grid12>
        <Title>Contact us</Title>
        <InfoCard>
          {contactInformation.map(({ label, detail }) => {
            return (
              <div className="info_item">
                <p className="info_label">
                  {label}{" "}
                  {label === "Email" && (
                    <button onClick={() => setEmailIsOpen(!emailIsOpen)}>
                      Email us
                    </button>
                  )}
                </p>
                <p className="info_detail">{detail}</p>
              </div>
            );
          })}
          <SocialMediaButtons>
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
          </SocialMediaButtons>
        </InfoCard>
        <Map>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3248.4077271754495!2d-79.18263278500963!3d35.49419514781477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89aca61577e8fab1%3A0xd5761d54cbf1458e!2sTaylor%20Automotive!5e0!3m2!1ses!2spe!4v1615825707588!5m2!1ses!2spe"
            style={{ width: "100%", height: "100%", border: "none" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </Map>
      </Container>
    </MainSection>
  );
};

export default ContactSection;

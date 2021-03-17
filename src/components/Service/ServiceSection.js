import React from "react";
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
    list: ["Description 1", "Description 2", "Description 3"],
  },
];

const ServiceSection = () => {
  return (
    <MainSection>
      <Container>
        <Title>Services</Title>
        <ServiceCards>
          {services.map(({ name, img, list }) => (
            <Card>
              <h2>{name}</h2>
              <div className="serviceImage"></div>
              <ul>
                <i class="fas fa-chevron-right"></i>
                {list.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </ServiceCards>
      </Container>
    </MainSection>
  );
};

export default ServiceSection;

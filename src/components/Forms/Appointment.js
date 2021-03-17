import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
// Styles
import {
  MainSection,
  Title,
  Form,
  CloseButton,
} from "../../styles/appointmentStyle";
import { Container } from "../../styles/globalStyle";
import "react-datepicker/dist/react-datepicker.css";

const Appointment = ({ appointmentIsOpen, setAppointmentIsOpen, top }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  const [startDate, setStartDate] = useState(
    new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
  );

  const isAfterToday = (date) => {
    return date.getTime() >= new Date().getTime();
  };

  return (
    <MainSection top={top}>
      <Container align-content="center">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <CloseButton onClick={() => setAppointmentIsOpen(!appointmentIsOpen)}>
            <i className="fas fa-times"></i>
          </CloseButton>
          <Title>Set an appointment with us</Title>
          <div className="formItem">
            <p>First name:</p>
            <input
              name="firstName"
              ref={register({ required: true })}
              className={errors.firstName && `error`}
            />
            {errors.firstName && <span>This field is required</span>}
          </div>
          <div className="formItem">
            <p>Last name:</p>
            <input
              name="lastName"
              ref={register({ required: true })}
              className={errors.lastName && `error`}
            />
            {errors.lastName && <span>This field is required</span>}
          </div>
          <div className="formItem">
            <p>Email:</p>
            <input
              name="email"
              ref={register({
                required: true,
                pattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
              })}
              className={errors.email && `error`}
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <input
            name="date"
            ref={register({ required: true })}
            value={startDate}
            style={{ display: "none" }}
          />
          <div className="formItem">
            <p>Date:</p>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              filterDate={isAfterToday}
            />
            {errors.date && <span>This field is required</span>}
          </div>
          <input className="submitButton" type="submit" value="Set it!" />
        </Form>
      </Container>
    </MainSection>
  );
};

export default Appointment;

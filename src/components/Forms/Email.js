import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

// Styles
import { MainSection, Title, Form, CloseButton } from "../../styles/emailStyle";
import { Container } from "../../styles/globalStyle";

const Email = ({ emailIsOpen, setEmailIsOpen, top }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  // useEffect(() => {
  //   const body = document.querySelector("body");
  //   if (emailIsOpen) {
  //     body.classList.add("fixed");
  //   } else {
  //     body.classList.remove("fixed");
  //   }
  // }, [emailIsOpen]);

  return (
    <MainSection top={top}>
      <Container align-content="center" fluid>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <CloseButton onClick={() => setEmailIsOpen(!emailIsOpen)}>
            <i className="fas fa-times"></i>
          </CloseButton>
          <Title>Send us an email</Title>
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
            {errors.email && (
              <span>
                {errors.email.type === "required" && "This field is required."}{" "}
                {errors.email.type === "pattern" && "This is not a valid email"}
              </span>
            )}
          </div>
          <div className="formItem">
            <p>Message:</p>
            <textarea
              name="message"
              ref={register({ required: true })}
            ></textarea>
            {errors.message && <span>This field is required</span>}
          </div>
          <input className="submitButton" type="submit" value="Set it!" />
        </Form>
      </Container>
    </MainSection>
  );
};

export default Email;

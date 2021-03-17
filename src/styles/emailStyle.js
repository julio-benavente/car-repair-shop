import styled from "styled-components";
import { darken } from "polished";

export const MainSection = styled.div`
  padding-top: clamp(20px, 10vh, 50px);
  padding-bottom: clamp(20px, 10vh, 50px);
  min-height: calc(100vh - (clamp(20px, 10vh, 50px) * 2));
  background-color: ${(props) => props.theme.color.gray50};
  position: absolute;
  width: 100%;
  top: ${(props) => `${props.top}px`};
  z-index: 1000;
`;
export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const CloseButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 50px;
  background-color: ${(props) => props.theme.color.orange};
  color: ${(props) => props.theme.color.white};
  transform: translate(50%, -50%);
  z-index: 100;
  display: grid;
  justify-items: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => darken(0.1, props.theme.color.orange)};
  }
`;

export const Form = styled.form`
  margin: auto;
  width: clamp(300px - 64px, 100% - 64px, 460px - 64px);
  background-color: ${(props) => props.theme.color.gray700};
  color: ${(props) => props.theme.color.gray100};
  border-radius: 5px;
  box-shadow: 0 0 5px ${(props) => props.theme.color.gray700};
  padding: 40px 20px;
  position: relative;
  display: grid;
  .formItem {
    margin-bottom: 15px;
    display: grid;
    p {
      font-weight: 700;
      margin-bottom: 10px;
    }
    input,
    textarea {
      width: calc(100% - 30px);
      padding: 5px 10px;
      border: none;
      background-color: ${(props) => props.theme.color.gray800};
      color: ${(props) => props.theme.color.gray50};
      position: relative;
      transition: background-color 100ms ease-in-out;
      margin-bottom: 3px;

      &:focus {
        background-color: ${(props) => props.theme.color.gray100};
        color: ${(props) => props.theme.color.gray800};
      }
    }
    span {
      display: block;
      font-size: 0.875rem;
    }

    textarea {
      resize: none;
      height: 100px;
    }
  }
  .submitButton {
    background-color: ${(props) => props.theme.color.orange};
    border: none;
    padding: 7px 40px;
    font-weight: 700;
    color: ${(props) => props.theme.color.white};
    margin: auto;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => darken(0.1, props.theme.color.orange)};
    }
  }
`;

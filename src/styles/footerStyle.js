import styled from "styled-components";
import { transparentize } from "polished";
import breakpoint from "./breakpoints";

export const Footer = styled.div`
  color: ${(props) => props.theme.color.white};
  background-color: ${(props) => props.theme.color.gray800};
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Copyright = styled.p`
  display: grid;
  grid-auto-columns: auto;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;

  span {
    font-weight: 700;
  }

  @media only screen and ${breakpoint.device.sm} {
    grid-column: 1/-1;
    display: block;
    text-align: center;
  }
`;

export const SocialMediaButtons = styled.div`
  margin-right: 0;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: end;
  a {
    display: inline-block;
    width: 40px;
    height: 40px;
    margin-right: 15px;

    &:hover {
      background-color: ${(props) =>
        transparentize(0.9, props.theme.color.white)};
    }

    &:active {
      background-color: ${(props) =>
        transparentize(0.7, props.theme.color.white)};
    }
    &:last-of-type {
      margin-right: 0px;
    }

    i {
      display: inline-block;
      position: relative;
      color: ${(props) => props.theme.color.white};
      font-size: 1.1rem;
      width: 100%;
      height: 100%;
      &::before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
  @media only screen and ${breakpoint.device.sm} {
    grid-column: 1/-1;
    grid-row: 1/2;
  }
`;

import styled from "styled-components";
import Hero from "../assets/images/hero-image.jpg";
import { transparentize } from "polished";
import breakpoint from "./breakpoints";

export const MainSection = styled.div`
  min-height: 100vh;
  position: relative;

  & > * {
    z-index: 5;
  }

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
  }

  &::before {
    background-image: ${`url(${Hero})`};
    background-size: cover;
    background-position: center;
    transform: scaleX(-1);
  }

  &::after {
    background: #000;
    opacity: 0.6;
  }
`;

export const Information = styled.div`
  display: grid;
  grid-column: 1/-1;
  height: 50px;
  align-items: center;
  grid-template-columns: auto auto 1fr auto;
  position: relative;
  margin-bottom: 20px;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    border-bottom: 1px solid
      ${(props) => transparentize(0.5, props.theme.color.gray50)};
  }

  p {
    color: ${(props) => props.theme.color.white};
    margin-right: 30px;

    i {
      margin-right: 10px;
    }

    &:nth-child(3) {
      justify-self: end;
    }
  }

  @media only screen and ${breakpoint.device.md} {
    display: none;
  }
`;
export const SocialMediaIcons = styled.div`
  margin-right: 0;

  a {
    display: inline-block;
    width: 40px;
    height: 40px;
    margin-right: 15px;

    &:last-of-type {
      margin-right: 0px;
    }

    &:hover {
      background-color: ${(props) =>
        transparentize(0.9, props.theme.color.white)};
    }

    &:active {
      background-color: ${(props) =>
        transparentize(0.7, props.theme.color.white)};
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
`;

export const Logo = styled.p`
  grid-column: 1/6;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.color.white};
  span {
    display: inline-block;
    font-weight: 700;
    letter-spacing: 3px;
  }
  @media only screen and ${breakpoint.device.md} {
    grid-column: 1/-1;
    margin-top: 20px;
    font-size: 1.2rem;
    span {
      letter-spacing: 2px;
    }
  }

  @media only screen and ${breakpoint.device.sm} {
    font-size: 1rem;
  }
`;

export const Navbar = styled.div`
  grid-column: 6/-1;
  display: grid;
  grid-auto-columns: auto;
  grid-auto-flow: column;
  justify-content: end;
  align-items: center;
  gap: 20px;

  @media only screen and ${breakpoint.device.md} {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${(props) => props.theme.color.white};
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 400;
  &::before {
    content: "";
    bottom: -10px;
    width: 0%;
    position: absolute;
    border-bottom: 2px solid ${(props) => props.theme.color.white};
    transition: all 200ms ease-in-out;
  }
  &:hover {
    &::before {
      width: 100%;
    }
  }
`;

export const Headline = styled.h1`
  grid-column: 1/-1;
  justify-self: center;
  text-align: center;
  font-weight: 300;
  font-size: 3rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.color.white};
  margin-top: 20vh;
  span {
    display: block;
    font-weight: 800;
  }

  @media only screen and ${breakpoint.device.md} {
    font-size: 2.5rem;
  }
  @media only screen and ${breakpoint.device.sm} {
    font-size: 1.8rem;
  }
`;

export const AppointmentButton = styled.button`
  position: relative;
  margin-top: 10vh;
  grid-column: 1/-1;
  justify-self: center;
  font-size: 1.3rem;
  font-weight: 700;
  border: none;
  border-radius: 100px;
  padding: 10px 20px;
  color: ${(props) => props.theme.color.black};
  background-color: ${(props) => props.theme.color.yellow};
  cursor: pointer;
  transition: color, background-color, 200ms ease-in-out;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100px;
    transition: border, 200ms ease-in-out;
  }

  &:hover {
    color: ${(props) => props.theme.color.yellow};
    background-color: ${(props) => props.theme.color.black};

    &::before {
      border: 4px ${(props) => props.theme.color.yellow} solid;
    }
  }

  i {
    margin-left: 20px;
    font-weight: 1.4rem;
  }

  @media only screen and ${breakpoint.device.md} {
    font-size: 1rem;
  }
  @media only screen and ${breakpoint.device.sm} {
    font-size: 0.875rem;
  }
`;

export const HamburgerMenu = styled.h2``;

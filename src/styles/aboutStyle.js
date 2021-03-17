import styled from "styled-components";
import about_imt from "../assets/images/about_img.jpg";
import breakpoint from "./breakpoints";

export const MainSection = styled.div`
  position: relative;
  z-index: 1;
  padding-top: clamp(40px, 20vh, 200px);
  padding-bottom: clamp(40px, 20vh, 200px);
  background-color: ${(props) => props.theme.color.gray50};
`;

export const Photo = styled.div`
  position: relative;
  grid-column: 1/7;
  grid-row: 1/3;
  width: clamp(300px, 80%, 500px);
  background-image: url(${about_imt});
  background-size: auto clamp(300px, 100%, 550px);
  background-repeat: no-repeat;
  background-position-x: calc(100% + 100px);
  height: clamp(300px, 70vh, 400px);
  background-color: black;
  margin-left: 40px;

  & > * {
    z-index: 5;
  }

  &::before {
    content: "";
    position: absolute;
    width: 70%;
    height: 70%;
    top: -10%;
    right: -10%;
    z-index: -1;
    transform: rotate(180deg);
    // SVG
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 100 100'%3E%3Cg stroke='%23cfcfcf' stroke-width='0' %3E%3Crect fill='%23000000' x='-60' y='-60' width='110' height='240'/%3E%3C/g%3E%3C/svg%3E");
  }
  &::after {
    content: "";
    position: absolute;
    width: 120%;
    height: 30%;
    bottom: 15%;
    left: -10%;
    z-index: -1;
    // SVG
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 100 100'%3E%3Cg stroke='%23cfcfcf' stroke-width='0' %3E%3Crect fill='%23000000' x='-60' y='-60' width='240' height='110'/%3E%3C/g%3E%3C/svg%3E");
  }

  @media only screen and ${breakpoint.device.lg} {
    background-position-x: center;
  }
  @media only screen and ${breakpoint.device.md} {
    grid-column: 1/-1;
    grid-row: 3/4;
    width: clamp(300px, 80%, 350px);
    margin-top: 50px;
    margin-right: min(10vw, 62px);
    justify-self: end;
  }
  @media only screen and ${breakpoint.device.sm} {
    width: clamp(250px, 80%, 350px);
    height: min(250px, 300px);
    margin-right: min(5vw, 32px);
  }
`;
export const Title = styled.div`
  grid-column: 7/-1;
  grid-row: 1/2;
  justify-self: end;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 800;
  margin-bottom: clamp(20px, 5vh, 35px);

  @media only screen and ${breakpoint.device.md} {
    grid-column: 1/-1;
    grid-row: 1/2;
    justify-self: start;
  }
`;

export const Description = styled.div`
  grid-column: 7/-1;
  grid-row: 2/3;
  width: clamp(300px, 80%, 550px);
  justify-self: end;
  p {
    font-size: 1.2rem;
    line-height: 1.7rem;
    margin-bottom: 15px;
  }
  @media only screen and ${breakpoint.device.md} {
    grid-column: 1/-1;
    grid-row: 2/3;
    justify-self: start;

    p {
      font-size: 1.05rem;
      line-height: 1.5rem;
    }
  }
`;

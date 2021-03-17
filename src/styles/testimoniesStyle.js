import styled from "styled-components";
import breakpoint from "./breakpoints";

export const MainSection = styled.div`
  position: relative;
  z-index: 1;
  padding-top: clamp(40px, 20vh, 200px);
  padding-bottom: clamp(40px, 20vh, 200px);
  background-color: ${(props) => props.theme.color.gray50};
`;

export const Title = styled.div`
  grid-column: 1/-1;
  grid-row: 1/2;
  justify-self: start;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 800;
  margin-bottom: 10vh;
`;

export const Testimony = styled.div`
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: 50px minmax(350px, 600px) 50px;
  justify-content: center;
  align-items: center;

  @media only screen and ${breakpoint.device.sm} {
    grid-template-columns: 1fr 1fr;
  }
`;
export const PreviousButton = styled.div`
  width: 40px;
  height: 40px;
  color: white;
  background-color: ${(props) => props.theme.color.gray800};
  display: grid;
  justify-items: center;
  align-items: center;
  @media only screen and ${breakpoint.device.sm} {
    grid-column: 1/2;
    grid-row: 2/3;
    margin-right: 20px;
    justify-self: end;
  }
`;
export const NextButton = styled(PreviousButton)`
  justify-self: end;
  @media only screen and ${breakpoint.device.sm} {
    grid-column: 2/3;
    grid-row: 2/3;
    margin-left: 20px;
    justify-self: start;
  }
`;

export const TestimonyCard = styled.div`
  margin: 0 20px;
  padding: 20px 20px 20px 20px;
  color: white;
  font-weight: 400;
  background-color: ${(props) => props.theme.color.gray800};
  position: relative;

  @media only screen and ${breakpoint.device.sm} {
    grid-column: 1/-1;
    margin: 0 0 20px 0;
  }
  &::before {
    content: "";
    position: absolute;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    border: 1px white solid;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .testimony {
    margin-bottom: 20px;
  }

  .author {
    font-weight: 700;
    text-align: right;
    span {
      color: red;
      margin-right: 10px;
    }
  }
  i {
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    transform: translate(40%, -40%);
    color: ${(props) => props.theme.color.red};
    background-color: ${(props) => props.theme.color.white};
    box-shadow: 0 0 10px 0px ${(props) => props.theme.color.gray500};

    &::before {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

import styled from "styled-components";
import { transparentize } from "polished";
import breakpoint from "./breakpoints";

export const MainSection = styled.div`
  position: relative;
  z-index: 1;
  padding-top: clamp(40px, 20vh, 200px);
  padding-bottom: clamp(40px, 20vh, 200px);
  background-color: ${(props) =>
    transparentize(0.5, props.theme.color.gray100)};
`;

export const Title = styled.div`
  grid-column: 1/-1;
  justify-self: start;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 800;
  margin-bottom: clamp(40px, 7vh, 100px);
`;

export const ServiceCards = styled.div`
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media only screen and ${breakpoint.device.lg} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and ${breakpoint.device.sm} {
    grid-template-columns: 1fr;
  }
`;
export const Card = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  z-index: 1;

  & > * {
    position: relative;
    z-index: 5;
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  ul {
    grid-column: 1/-1;
    grid-row: 2/3;
    display: block;
    width: 20%;
    height: 100%;
    background-color: ${transparentize(0.2, "black")};
    position: relative;
    i {
      color: white;
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateX(-50%);
    }
    li {
      display: none;
    }
  }

  // for animation
  &:nth-child(2) {
    ul {
      width: calc(100% - 50px);
      height: calc(100% - 30px);
      padding: 15px 25px;
      i {
        display: none;
      }
      li {
        display: block;
        color: white;
        margin-bottom: 10px;
        position: relative;
        &::before {
          content: "";
          width: 5px;
          height: 5px;
          background-color: #fff;
          position: absolute;
          top: 10px;
          left: -10px;
          transform: translate(-50%, -50%);
        }
      }
    }
  }

  .serviceImage {
    grid-column: 1/-1;
    grid-row: 2/3;
    position: relative;
    width: 100%;
    height: 200px;
    background-image: url("https://images.squarespace-cdn.com/content/v1/585c624ebe6594527e0c44e0/1543354184974-0US7H3GLPULRT97RK098/ke17ZwdGBToddI8pDm48kPTrHXgsMrSIMwe6YW3w1AZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fKTrY37saURwPBw8fO2esROAxn-RKSrlQamlL27g22X2A/20181102_180557.jpg");
    background-position: center;
    background-size: cover;
    margin-right: 20px;

    & {
      margin-right: 20px;
    }
  }
`;

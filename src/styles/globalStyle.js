import styled, { css, createGlobalStyle, no } from "styled-components";
import { normalize } from "styled-normalize";
import breakpoint from "./breakpoints";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
  text-decoration: none;
  margin: 0;
  padding: 0;
  outline: none;
  }
  html {
      box-sizing: border-box;
      font-size: 16px; 
  }
  body {
    font-size: 16px;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    overflow-x: hidden;
    font-weight: 300;

    &.no-scroll {
      overflow: hidden;
    }
  }
  .app {
    position: relative;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  position: relative;
  margin: auto;
  height: 100%;
  padding: 0 clamp(32px, 7vw, 100px);

  @media only screen and ${breakpoint.device.lg} {
    max-width: 1152px;
  }

  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }

  ${(props) =>
    props.columns &&
    css`
      grid-template-columns: ${props.columns};
    `}

  ${(props) =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      max-width: 100% !important;
    `}

  ${(props) =>
    props.grid12 &&
    css`
      grid-template-columns: repeat(12, calc(100% / 12));
    `}
  
  ${(props) =>
    props.gap &&
    css`
      gap: ${props.gap};
    `}

  ${(props) =>
    props.justifyContent &&
    css`
      justify-content: ${props.justifyContent};
    `}
  
  ${(props) =>
    props.alignContent &&
    css`
      align-content: ${props.alignContent};
    `}

  ${(props) =>
    props.justifyItems &&
    css`
      gap: ${props.justifyItems};
    `}

  ${(props) =>
    props.alignItems &&
    css`
      gap: ${props.alignItems};
    `}
`;

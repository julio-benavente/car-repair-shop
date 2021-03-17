import styled from "styled-components";
import { transparentize } from "polished";
import breakpoint from "./breakpoints";

export const MainSection = styled.div`
  position: relative;
  z-index: 1;
  padding-top: clamp(40px, 20vh, 200px);
  padding-bottom: clamp(40px, 20vh, 200px);
  background-color: ${(props) => props.theme.color.white};

  & > * {
    position: relative;
    z-index: 5;
  }
`;

export const Title = styled.div`
  grid-column: 6/-1;
  grid-row: 1/2;
  justify-self: end;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 800;
  margin-bottom: 20px;

  @media only screen and ${breakpoint.device.sm} {
    grid-column: 1/-1;
  }
`;

export const Map = styled.div`
  position: absolute;
  width: 100vw;
  height: calc(100% + (clamp(40px, 20vh, 200px) * 2));
  top: 50%;
  left: 50%;
  background-color: ${(props) => props.theme.color.gray100};
  transform: translate(-50%, -50%);
  z-index: -1;
`;
export const InfoCard = styled.div`
  grid-column: 6/-1;
  justify-self: end;
  padding: 40px 30px;
  background: ${(props) => props.theme.color.black};
  color: ${(props) => props.theme.color.white};
  box-shadow: 0 0 10px 0 ${(props) => props.theme.color.gray500};
  .info_item {
    margin-bottom: 20px;
    .info_label {
      font-weight: 700;
      margin-bottom: 5px;
      button {
        margin-left: 20px;
        cursor: pointer;
        padding: 2px 10px;
        border: none;
        background: ${(props) => props.theme.color.gray50};
        color: ${(props) => props.theme.color.black};
        &:active {
          background: ${(props) => props.theme.color.gray100};
          color: ${(props) => props.theme.color.black};
        }
      }
    }
    .info_detail {
      font-weight: 400;
    }
  }

  @media only screen and ${breakpoint.device.sm} {
    padding: 20px 15px;
    grid-column: 1/-1;
    width: calc(100% - 32px);
    .info_item {
      .info_detail {
        word-wrap: break-word;
      }
    }
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
`;

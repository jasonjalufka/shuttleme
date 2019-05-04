import styled, { keyframes } from "styled-components/macro";
import theme from "./theme";
import "../components/Home";

// font-family: 'Varela Round', sans-serif;
// font-family: 'Open Sans', sans-serif;
// color: #74b9ff; //blue
// color: #ffeaa7 //yellow
export const keyFrame = keyframes`
    to {
      stroke-dashoffset: 0;
    }
`;
export const HomeLayout = styled.div`
  color: #222222;
  font-family: "Varela Round", sans-serif;
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 33% 33% 33%;

  svg line {
    stroke-dasharray: 300;
    stroke-dashoffset: 600;
    animation: ${keyFrame} 6s linear infinite forwards;
  }

  .left {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
    justify-self: center;
    align-self: center;
    max-width: 450px;

    #get-started {
      width: 100%;
    }

    h1 {
      font-family: "Varela Round", sans-serif;
      font-size: 4em;
      margin: 0;
    }

    p {
      display: block;
      text-align: center;
      font-style: italic;
      background-color: ${theme.colors.turquoise};
      color: black;
      transform: skew(15deg, 0);
      border-radius: 1px;
    }

    li {
      font-family: "Open Sans", sans-serif;
    }
  }

  .right {
    grid-column-start: 3;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 3;
    justify-self: center;
    padding-top: 4em;
  }
`;

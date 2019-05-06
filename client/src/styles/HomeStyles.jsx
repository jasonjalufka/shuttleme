import styled, { keyframes } from "styled-components/macro";
import theme from "./theme";
import media from "./media";
import "../components/Home";

// font-family: 'Varela Round', sans-serif;
// font-family: 'Open Sans', sans-serif;
// color: #74b9ff; //blue
// color: #ffeaa7 //yellow
export const lineAnimation = keyframes`
    to {
      stroke-dashoffset: 0;
    }
`;

// Layout using flexbox
export const HomeLayout = styled.div`
  color: #222222;
  font-family: "Varela Round", sans-serif;
  min-height: 100vh;

  h1 {
    font-family: "Varela Round", sans-serif;
    font-size: 3em;
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

  ul {
    text-align: left;
  }

  li {
    font-family: "Open Sans", sans-serif;
  }

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100vh;
    justify-content: center;
  }

  .column {
    flex-basis: 100%;
    justify-content: center;
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
    padding-bottom: 20px;
  }

  .header-image {
    display: none;
  }

  /* Desktop Styles > 1000px */
  ${media.desktop`
    .column {
      flex: 1;
    }
    .header-image {
      display: block;
    }
  `}
  svg line,polyline {
    stroke-dasharray: 300;
    stroke-dashoffset: 600;
    animation: ${lineAnimation} 6s linear infinite forwards;
  }
`;

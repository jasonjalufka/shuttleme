import styled from "styled-components/macro";
import "../components/Home";

// font-family: 'Varela Round', sans-serif;
// font-family: 'Open Sans', sans-serif;
// color: #74b9ff; //blue
// color: #ffeaa7 //yellow
export const HomeLayout = styled.div`
  color: #222222;
  font-family: "Varela Round", sans-serif;
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 33% 33% 33%;

  .left {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
    justify-self: center;
    align-self: center;

    h1 {
      font-family: "Varela Round", sans-serif;
      font-size: 4em;
      margin: 0;
    }

    p {
      display: block;
      text-align: center;
      font-style: italic;
      background-color: #fab1a0;
      transform: skew(15deg, 0);
      border-radius: 1px;
    }
  }

  .right {
    color: "blue";
    grid-column-start: 4;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 3;
    justify-self: start;
    width: 75%;
    height: 100%;
  }

  img {
    width: 100%;
    height: auto;
    padding-right: 30px;
  }
`;

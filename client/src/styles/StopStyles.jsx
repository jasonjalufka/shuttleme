import styled from "styled-components/macro";
import "../App.css";

// font-family: 'Varela Round', sans-serif;
// font-family: 'Open Sans', sans-serif;

export const StyledCurrentStop = styled.div`
  font-size: 1.6em;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledSubmit = styled.button`
  display: flex;
  justify-content: center;
  background-color: orange;
  color: white;
  padding: 5px 35px;
  border-radius: 25px;
  background-color: #00b894;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.2s;
  cursor: pointer;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
    background-color: #55efc4;
  }
`;

export const StyledStopList = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: ${props =>
    props.length ? `repeat(${props.length / 4}, 100px);` : ""}
  grid-auto-flow: column;
`;

export const StyledStop = styled.div`
  background-color: ${props => (props.selected === true ? "#dfe6e9" : "white")};
  margin: 10px 30px;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.2s;
  cursor: pointer;
  display: flex;
  align-items: center;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .stop-name {
    font-size: 1.2em;
    font-family: "Open Sans", sans-serif;
    color: #1e272e;
    width: 80%;
    padding-left: 10px;
  }

  .stop-id {
    font-size: 1.4em;
    float: right;
    padding-left: 10px;
    font-family: "Varela Round", sans-serif;
    color: #2d3436;
    height: 100%;
    display: flex;
    align-items: center;
    width: 20%;
    background-color: #a29bfe;
  }
`;

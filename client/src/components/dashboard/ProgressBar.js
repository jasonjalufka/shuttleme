import React from "react";
import styled from "styled-components/macro";

const Bar = styled.div`
  background: whitesmoke;
  position: relative;
  height: 8px;
  border-radius: 20px;
  width: 250px;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 3px;
  /* border: 1px solid grey; */
`;

const Filler = styled.div`
  background: #19b5fe;

  height: 100%;
  border-radius: 20px 0 0 20px;
  width: ${props => props.width};
  background: ${props => props.color};
  background-image: linear-gradient(
    to right,
    rgba(123, 239, 178, 1),
    rgba(46, 204, 113, 1)
  );
  transition: width 0.5s ease-in;
`;

const Stops = styled.span`
  color: black;
`;

const Stop = styled.span`
  color: ${props => (props.lastStop === props.stop ? "red" : "black")};
  padding-right: 5px;
`;

const ProgressBar = props => {
  let theWidth = `${props.percentage * 2.5}px`;
  return (
    <>
      {/* <Stops>
        {props.stops.map((stop, index) => {
          return (
            <Stop key={index} lastStop={props.lastStop} stop={stop}>
              {stop}
            </Stop>
          );
        })}
      </Stops> */}
      <Bar>
        <Filler
          percentage={props.percentage}
          width={theWidth}
          color={props.color}
        />
      </Bar>
    </>
  );
};

export default ProgressBar;

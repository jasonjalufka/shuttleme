import React from "react";
import {
  StyledCurrentStop,
  StyledSubmit,
  StyledStopList,
  StyledStop
} from "../styles/StopStyles";

const StopList = props => {
  const { stops, selectedStop, handleClick, handleSubmit } = props;

  return (
    <>
      {selectedStop && (
        <StyledCurrentStop>
          Stop {selectedStop}
          <StyledSubmit onClick={handleSubmit}>Save</StyledSubmit>
        </StyledCurrentStop>
      )}
      <StyledStopList length={stops.length}>
        {stops.map(stop => {
          return (
            <StyledStop
              selected={selectedStop === stop.id ? true : false}
              onClick={() => handleClick(stop.id)}
            >
              <span className="stop-id">{stop.id}</span>
              <span className="stop-name">{stop.name}</span>
            </StyledStop>
          );
        })}
      </StyledStopList>
    </>
  );
};

export default StopList;

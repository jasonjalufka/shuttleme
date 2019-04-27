import React from "react";
import ProgressBar from "./ProgressBar";
import styled from "styled-components/macro";

export const StyledDashboard = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: 20px;
  padding: 20px;
  height: 150px;
  background-color: white;

  .card {
    width: 265px;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    :hover {
      box-shadow: 0 10px 18px 0 rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
  }

  .card-header {
    text-align: center;
    font-weight: 600;
    padding: 5px 10px;
  }

  .card-main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;

    & span {
      align-self: flex-start;
    }
  }
`;

const TestDashboard = props => {
  return (
    <StyledDashboard>
      {props.data
        .filter(route => route.buses.length > 0)
        .map(route => {
          return (
            <div className="card">
              <div className="card-header">{route.name}</div>
              {route.buses
                .sort((a, b) => a.id - b.id)
                .map(bus => {
                  return (
                    <div className="card-main">
                      <span>Bus {bus.id}</span>
                      <ProgressBar
                        percentage={bus.percentage}
                        color={route.color}
                        stops={route.stops}
                        lastStop={bus.lastStop}
                      />
                    </div>
                  );
                })}
            </div>
          );
        })}
    </StyledDashboard>
  );
};

export default TestDashboard;

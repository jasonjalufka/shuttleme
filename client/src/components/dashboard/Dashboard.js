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
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 0.8em;
  /* background-color: white; */

  .card {
    width: 265px;
    background-color: inherit;
    color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    padding-bottom: 20px;
    padding: 10px;
    border-color: aliceblue;

    :hover {
      box-shadow: 0 10px 18px 0 rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
  }

  .card-header {
    font-family: "Varela Round", sans-serif;
    font-size: 1rem;
    text-align: center;
    font-weight: 400;
    padding: 5px 10px;
    background-color: rgba(0, 0, 0, 0);
    border-bottom: none;
  }

  .card-main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin-bottom: 5px;

    & span {
      align-self: flex-start;
    }
  }
`;

const Dashboard = props => {
  return (
    <StyledDashboard>
      {props.data ? (
        props.data
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
          })
      ) : (
        <h1>No buses currently running</h1>
      )}
    </StyledDashboard>
  );
};

export default Dashboard;

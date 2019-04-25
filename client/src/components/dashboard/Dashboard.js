import React from "react";
import ProgressBar from "./ProgressBar";
import styled from "styled-components/macro";
import Dropdown from "./Dropdown";
import sun from "../../img/sun.svg";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "main" "footer";
  height: 100%;
  background: #e8ecf1;

  .main {
    grid-area: main;
  }

  img {
    width: 5%;
    height: auto;
    object-fit: contain;
  }

  .main-header {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 20px;
    padding: 20px;
    height: 150px;
    background-color: white;
    color: slategrey;
  }

  .main-overview {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
    /* grid-auto-rows: 188px; */
    grid-gap: 20px;
    margin: 20px;
  }

  .overviewcard {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }

  .overviewcard:hover {
    box-shadow: 0 10px 18px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  .overviewcard__title {
    font-weight: 600;
  }

  .main-cards {
    column-count: 1;
    column-gap: 20px;
    margin: 20px;
  }

  @media only screen and (min-width: 65.625em) {
    .main-cards {
      column-count: 2;
    }
  }
`;

const Dashboard = props => {
  return (
    <GridContainer className="grid-container">
      <main className="main">
        <div className="main-header">
          <div className="main-header__heading">Texas State Dashboard</div>
          <div className="main-header__weather">
            <img src={sun} alt="Sunny" />
            San Marcos, TX 78/Sunny
          </div>
        </div>
        <Dropdown onChange={props.onChange} />

        <div className="main-overview">
          {props.data
            .filter(route => route.buses.length > 0)
            .map(route => {
              return (
                <div className="overviewcard">
                  <div className="overviewcard__icon">
                    <span className="overviewcard__title">{route.name}</span>
                    {route.buses.map(bus => {
                      return (
                        <div className="overviewcard__info">
                          Bus {bus.id}{" "}
                          <ProgressBar percentage={bus.percentage} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      </main>
    </GridContainer>
  );
};

export default Dashboard;

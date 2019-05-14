import React, { Component } from "react";
import { connect } from "react-redux";
import { selectUserPreferences } from "../selectors";
import {
  getRouteGeoJson,
  getStopGeoJson,
  getBusGeoJson
} from "../actions/geojsonActions";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import DashboardContainer from "./DashboardContainer";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr;
  grid-template-rows: 72px 1fr;
  grid-template-areas:
    "sidebar head head head"
    "sidebar main main main"
    "sidebar main main main"
    "sidebar main main main";
  height: 100vh;

  @media (max-width: 414px) {
    grid-template-columns: 1fr;
    grid-template-rows: 72px 1fr;
    grid-template-areas:
      "head"
      "main";
  }
`;

const GridSidebar = styled.div`
  grid-area: sidebar;
`;

const Header = styled.div`
  grid-area: head;
  align-self: center;
  padding-left: 40px;
  padding-top: 20px;
  background-color: rgba(41, 47, 54, 1);
  color: white;
  height: 100%;
`;

const Content = styled.div`
  grid-area: main;
  background-color: darkgray;
  overflow: scroll;
`;

class OverviewContainer extends Component {
  state = {
    content: "DashboardContainer"
  };

  // how to define function
  handleSidebarClick = event => {
    console.log(event.target.value);
  };

  render() {
    return (
      <GridContainer>
        <GridSidebar>
          <Sidebar handleSidebarClick={this.handleSidebarClick} />
        </GridSidebar>
        <Header>Dashboard - Texas State University</Header>
        <Content>
          <DashboardContainer />
        </Content>
      </GridContainer>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  preferences: selectUserPreferences(state)
});

export default connect(
  mapStateToProps,
  {
    getRouteGeoJson,
    getStopGeoJson,
    getBusGeoJson
  }
)(OverviewContainer);

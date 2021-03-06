import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getRouteGeoJson,
  getStopGeoJson,
  getBusGeoJson
} from "../actions/geojsonActions";
import { getUniversityList } from "../actions/dashboardActions";
import { logout } from "../actions/authActions";
import styled from "styled-components/macro";
import Sidebar from "../components/Sidebar";
import DashboardContainer from "./DashboardContainer";
import MapContainer from "./MapContainer";

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
  background-color: #2e3442;

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
  background-color: #23222d;
`;

const Header = styled.div`
  grid-area: head;
  align-self: center;
  padding-left: 40px;
  padding-top: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  color: white;
  height: 100%;
`;

const Content = styled.div`
  grid-area: main;
  background-color: #2e3442;
  overflow: scroll;

  h1 {
    text-align: center;
    margin-top: 3em;
    color: white;
  }
`;

class OverviewContainer extends Component {
  state = {
    content: "",
    selectedUniversity: ""
  };

  componentDidMount() {
    this.props.getUniversityList();
  }

  components = {
    Dashboard: DashboardContainer,
    Map: MapContainer
  };

  handleSelectUniversity = event => {
    let university = this.props.universities.filter(
      uni => event.target.value === uni.code
    );
    this.setState({
      ...this.state,
      selectedUniversity: university[0]
    });
  };

  // how to define function
  handleSidebarClick = (event, componentName) => {
    this.setState({
      ...this.state,
      content: componentName
    });
  };

  render() {
    const View = this.components[this.state.content || "Dashboard"];
    return (
      <GridContainer>
        <GridSidebar>
          <Sidebar
            handleLogout={this.props.logout}
            handleSidebarClick={this.handleSidebarClick}
          />
        </GridSidebar>
        <Header>
          Dashboard -{" "}
          {this.props.universities && (
            <select
              value={this.state.selectedUniversity.code}
              onChange={this.handleSelectUniversity}
            >
              {this.props.universities.map(uni => {
                return (
                  <option value={uni.code} key={uni._id}>
                    {uni.name}
                  </option>
                );
              })}
            </select>
          )}
        </Header>
        <Content>
          {this.state.selectedUniversity === "" ? (
            <h1>Select a University</h1>
          ) : (
            <View university={this.state.selectedUniversity} />
          )}
        </Content>
      </GridContainer>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  universities: state.dashboard.universities
});

export default connect(
  mapStateToProps,
  {
    getRouteGeoJson,
    getStopGeoJson,
    getBusGeoJson,
    getUniversityList,
    logout
  }
)(OverviewContainer);

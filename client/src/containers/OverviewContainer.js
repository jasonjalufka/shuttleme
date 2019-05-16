import React, { Component } from "react";
import { connect } from "react-redux";
import { selectUserPreferences } from "../selectors";
import {
  getRouteGeoJson,
  getStopGeoJson,
  getBusGeoJson
} from "../actions/geojsonActions";
import { getUniversityList } from "../actions/dashboardActions";
import styled from "styled-components";
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
    content: "",
    selectedUniversity: ""
  };

  componentDidMount() {
    console.log("Overview container did mount");
    this.props.getUniversityList();
  }

  components = {
    Dashboard: DashboardContainer,
    Map: MapContainer
  };

  handleSelectUniversity = event => {
    event.preventDefault();
    console.log("option selected", event.target.value);
    let university = this.props.universities.filter(
      uni => event.target.value === uni.code
    );
    console.log("university to update state", university[0]);
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
          <Sidebar handleSidebarClick={this.handleSidebarClick} />
        </GridSidebar>
        <Header>
          Dashboard -{" "}
          {this.props.universities && (
            <select
              value={this.state.selectedUniversity.name}
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
  universities: state.dashboard.universities,
  preferences: selectUserPreferences(state)
});

export default connect(
  mapStateToProps,
  {
    getRouteGeoJson,
    getStopGeoJson,
    getBusGeoJson,
    getUniversityList
  }
)(OverviewContainer);

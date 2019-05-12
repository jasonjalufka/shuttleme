import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import produce from "immer";
import Sidebar from "../components/Sidebar";
import media from "../styles/media";
import DashboardContainer from "./DashboardContainer";
import Loading from "../components/Loading";

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
`;

class SidebarContainer extends Component {
  render() {
    return (
      <GridContainer>
        <GridSidebar>
          <Sidebar />
        </GridSidebar>
        <Header>
          Dashboard - Texas State University
          <Loading />
        </Header>
        <Content>
          <DashboardContainer />
        </Content>
      </GridContainer>
    );
  }
}

export default SidebarContainer;

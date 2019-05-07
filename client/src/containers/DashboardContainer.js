import React, { Component } from "react";
import axios from "axios";
import produce from "immer";
import Dashboard from "../components/dashboard/Dashboard";

class DashboardContainer extends Component {
  state = {
    university: "txstate",
    routes: []
  };

  componentDidMount() {
    this.fetchData(this.state.university);
    this.interval = setInterval(() => {
      this.fetchData(this.state.university);
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fetchData = uni => {
    axios.get(`/api/dashboard/${uni}`).then(res => {
      this.setState(
        produce(draft => {
          draft.routes = res.data.routes;
        })
      );
    });
  };

  render() {
    return (
      <Dashboard
        data={this.state.routes}
        onChange={this.fetchData.bind(this)}
      />
    );
  }
}

export default DashboardContainer;

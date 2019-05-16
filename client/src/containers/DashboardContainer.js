import React, { Component } from "react";
import axios from "axios";
import produce from "immer";
import Dashboard from "../components/dashboard/Dashboard";

class DashboardContainer extends Component {
  state = {
    routes: []
  };

  componentDidMount() {
    console.log(this.props.university.code);
    this.fetchData(this.props.university.code);
    this.interval = setInterval(() => {
      this.fetchData(this.props.university.code);
    }, 5000);
  }

  componentDidUpdate(prevProps) {
    console.log("Previous Props: ", prevProps);
    console.log("NewProps: ", this.props);
    if (this.props.university.code !== prevProps.university.code) {
      console.log("shit changed fam");
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fetchData = uni => {
    if (this.props.university) {
      axios.get(`/api/dashboard/${uni}`).then(res => {
        this.setState(
          produce(draft => {
            draft.routes = res.data.routes;
          })
        );
      });
    } else {
      return;
    }
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

import React, { Component } from "react";
import axios from "axios";
import produce from "immer";
import Dashboard from "../components/dashboard/Dashboard";
import Loading from "../components/Loading";
import styled from "styled-components";

class DashboardContainer extends Component {
  state = {
    routes: [],
    isLoading: false
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
      this.setState(
        produce(draft => {
          draft.isLoading = true;
        })
      );
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
            draft.isLoading = false;
          })
        );
      });
    } else {
      return;
    }
  };

  render() {
    return this.state.isLoading ? (
      <Loading />
    ) : (
      <Dashboard
        data={this.state.routes}
        onChange={this.fetchData.bind(this)}
      />
    );
  }
}

export default DashboardContainer;

import React, { Component } from "react";
import { connect } from "react-redux";
import { getStops, getUserStop, setStop } from "../actions/preferenceActions";
import StopList from "../components/StopList";

class StopInfo extends Component {
  state = {
    selectedStop: ""
  };

  componentDidMount() {
    this.props.getUserStop();
    this.props.getStops();
  }

  handleClick = id => {
    this.setState({
      selectedStop: id
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("Submit pressed");
    const newStop = {
      stop: this.state.selectedStop
    };
    this.props.setStop(newStop);
  };

  render() {
    return (
      this.props.isAuthenticated && (
        <StopList
          selectedStop={this.state.selectedStop}
          handleClick={this.handleClick}
          handleSubmit={this.handleSubmit}
          stops={this.props.stops}
          isLoading={this.props.isLoading}
        />
      )
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  stops: state.prefs.stops,
  isLoading: state.prefs.isLoading
});

export default connect(
  mapStateToProps,
  { getStops, getUserStop, setStop }
)(StopInfo);

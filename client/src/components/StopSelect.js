import React, { Component } from "react";
import { connect } from "react-redux";
import { getStops, setStop } from "../actions/preferenceActions";
import PropTypes from "prop-types";

class StopSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStop: ""
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.getStops();
    console.log(this.props.prefs);
    console.log(this.props.isAuthenticated);
    console.log(this.props.user);
  }

  handleSelect(event) {
    this.setState({
      selectedStop: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Submit pressed");
    const newStop = {
      stop: this.state.selectedStop
    };
    this.props.setStop(newStop);
  }

  render() {
    let { isAuthenticated, isLoading, user } = this.props;
    return (
      <div>
        {isAuthenticated && <h1>Hello i'm authenticated</h1>}
        <form onSubmit={this.handleSubmit}>
          <label>
            Stop
            <select
              value={this.state.selectedStop}
              onChange={this.handleSelect}
            >
              {this.props.prefs.stops.map(stop => (
                <option value={stop.id}>{stop.name}</option>
              ))}
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  prefs: state.prefs,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {
    getStops,
    setStop
  }
)(StopSelect);

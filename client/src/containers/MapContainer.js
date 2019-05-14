import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getRouteGeoJson,
  getStopGeoJson,
  getBusGeoJson
} from "../actions/geojsonActions";
import Map from "../components/Map";

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0,
      selectedUniversity: "txstate",
      selectedStop: "",
      selectedRoute: "",
      universityList: ""
    };
    this.handleSelectUniversity = this.handleSelectUniversity.bind(this);
  }

  componentDidMount() {
    this.props.getRouteGeoJson(this.state.selectedUniversity);
    this.props.getStopGeoJson(this.state.selectedUniversity);
    this.props.getBusGeoJson(this.state.selectedUniversity);
    this.interval = setInterval(() => {
      this.props.getBusGeoJson(this.state.selectedUniversity);
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleSelectUniversity = event => {
    console.log(event.target.value);
    this.props.getRouteGeoJson(event.target.value);
    this.props.getStopGeoJson(this.state.selectedUniversity);
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
      this.props.routegeojson && (
        <>
          <Map
            routes={this.props.routegeojson}
            stops={this.props.stopgeojson}
            buses={this.props.busgeojson}
          />
        </>
      )
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  routegeojson: state.geojson.routegeojson,
  stopgeojson: state.geojson.stopgeojson,
  busgeojson: state.geojson.busgeojson
});

export default connect(
  mapStateToProps,
  { getRouteGeoJson, getStopGeoJson, getBusGeoJson }
)(MapContainer);

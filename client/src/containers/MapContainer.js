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
      selectedUniversity: "txstate",
      selectedStop: "",
      selectedRoute: ""
    };
    this.handleSelectUniversity = this.handleSelectUniversity.bind(this);
  }

  componentDidMount() {
    if (this.props.university) {
      this.props.getRouteGeoJson(this.props.university.code);
      this.props.getStopGeoJson(this.props.university.code);
      this.props.getBusGeoJson(this.props.university.code);
      this.interval = setInterval(() => {
        this.props.getBusGeoJson(this.props.university.code);
      }, 5000);
    } else {
      this.props.getRouteGeoJson(this.state.selectedUniversity);
      this.props.getStopGeoJson(this.state.selectedUniversity);
      this.props.getBusGeoJson(this.state.selectedUniversity);
      this.interval = setInterval(() => {
        this.props.getBusGeoJson(this.state.selectedUniversity);
      }, 5000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleSelectUniversity = event => {
    this.props.getRouteGeoJson(event.target.value);
    this.props.getStopGeoJson(this.props.university.code);
  };

  handleSubmit = event => {
    event.preventDefault();
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
            university={this.props.university}
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

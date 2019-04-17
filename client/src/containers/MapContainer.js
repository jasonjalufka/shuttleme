import React, { Component } from "react";
import { connect } from "react-redux";
import { getRouteGeoJson } from "../actions/geojsonActions";
import Map from "../components/Map";
import MapOptions from "../components/MapOptions";

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0,
      selectedUniversity: "txstate",
      selectedStop: "",
      selectedRoute: "",
      universityList: [
        {
          name: "Texas State University",
          id: "txstate"
        },
        {
          name: "University of Texas - El Paso",
          id: "utep"
        },
        {
          name: "University of Cincinatti",
          id: "uc"
        },
        {
          name: "University of Ohio",
          id: "aptcats"
        },
        {
          name: "Indiana University Bloomington",
          id: "bloomington"
        },
        {
          name: "University of Illinois at Chicago",
          id: "uic"
        },
        {
          name: "University of Pennsylvania",
          id: "pennrides"
        },
        {
          name: "University of Akron",
          id: "akron"
        },
        {
          name: "Pepperdine University",
          id: "pepperdine"
        }
      ]
    };
    this.handleSelectUniversity = this.handleSelectUniversity.bind(this);
  }

  componentDidMount() {
    this.props.getRouteGeoJson("txstate");
  }

  handleSelectUniversity = event => {
    console.log(event.target.value);
    this.props.getRouteGeoJson(event.target.value);
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
      this.props.geojson && (
        <>
          <Map
            className="map left"
            routeGeoJson={this.props.geojson}
            width={800}
            height={600}
          />
          <MapOptions
            className="map-options right"
            handleChange={this.handleSelectUniversity}
            stop={this.state.selectedStop}
            route={this.state.selectedRoute}
            university={this.state.selectedUniversity}
            list={this.state.universityList}
          />
        </>
      )
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  geojson: state.geojson.routegeojson
});

export default connect(
  mapStateToProps,
  { getRouteGeoJson }
)(MapContainer);

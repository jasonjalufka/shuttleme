import React, { Component } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiamFzb25qYWx1ZmthIiwiYSI6ImNqdWo3M3R1czFpaGs0ZW8ydHo0M2JtZzcifQ.nzhNlFoI6SKDqMFC6HyKlA";

class Map extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     routeData: "",
  //     stopData: "",
  //     hoveredRouteId: ""
  //   };

  // this.updateRouteData = this.updateRouteData.bind(this);
  // this.updateStopData = this.updateStopData.bind(this);
  // }

  componentDidUpdate(prevProps) {
    if (this.props.buses !== prevProps.buses && this.map) {
      this.updateBusLayer();
    }
  }

  updateBusLayer = () => {
    this.map.getSource("buses").setData(this.props.buses);
  };

  componentDidMount() {
    // this.updateRouteData();
    // this.updateStopData();
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/dark-v10?optimize=true",
      center: [-97.91153, 29.890661],
      bearing: -45,
      zoom: 12
    });

    map.on("load", () => {
      this.map = map;
      map.addLayer({
        id: "bus-routes",
        type: "line",
        source: {
          type: "geojson",
          data: this.props.routes
        },
        layout: {
          "line-join": "round",
          "line-cap": "round"
        },
        paint: {
          "line-width": 3,
          "line-color": ["get", "color"]
        }
      });

      map.addLayer({
        id: "bus-stops",
        type: "circle",
        source: {
          type: "geojson",
          data: this.props.stops
        },
        paint: {
          "circle-radius": 4,
          "circle-color": "white"
        }
      });

      map.addLayer({
        id: "buses",
        type: "symbol",
        source: {
          type: "geojson",
          data: this.props.buses
        },
        layout: {
          "icon-image": "rocket-15",
          "icon-rotate": ["get", "heading"],
          "icon-allow-overlap": true,
          "icon-ignore-placement": true,
          "text-allow-overlap": true,
          "text-optional": true
        }
        // paint: {
        //   "circle-radius": 6,
        //   "circle-color": "purple"
        // },
        // transition: {
        //   duration: 300,
        //   delay: 0
        // }
      });
    });

    map.on("click", "bus-stops", e => {
      let coordinates = e.features[0].geometry.coordinates.slice();
      let description = e.features[0].properties.name;
      let id = e.features[0].properties.id;

      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(
          '<p style="padding-top: 10px;"><strong>' +
            id +
            "</strong> - " +
            description +
            "</p>"
        )
        .addTo(map);
    });

    map.on("mouseenter", "bus-stops", () => {
      map.getCanvas().style.cursor = "pointer";
    });

    map.on("mouseleave", "bus-stops", () => {
      map.getCanvas().style.cursor = "";
    });
  }

  // updateRouteData = () => {
  //   axios.get("/api/geojson/route/txstate").then(res => {
  //     this.setState({
  //       ...this.state,
  //       routeData: res.data
  //     });
  //   });
  // };

  // updateStopData = () => {
  //   axios.get("/api/geojson/stops/txstate").then(res => {
  //     this.setState({
  //       ...this.state,
  //       stopData: res.data
  //     });
  //   });
  // };

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const styles = {
      position: "absolute",
      top: "60px",
      bottom: 0,
      width: "100%"
    };

    return (
      <>
        <div id="map" style={styles} ref={el => (this.mapContainer = el)} />
      </>
    );
  }
}

export default Map;

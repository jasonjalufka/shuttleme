import React, { Component } from "react";
import * as d3 from "d3-geo";

class Map extends Component {
  projection = () => {
    return d3
      .geoAlbersUsa()
      .fitSize([this.props.width, this.props.height], this.props.routeGeoJson);
  };

  render() {
    return (
      <svg width={this.props.width} height={this.props.height}>
        <g className="routes">
          {this.props.routeGeoJson.features.map((d, i) => (
            <path
              key={`path-${i}`}
              d={d3.geoPath().projection(this.projection())(d)}
              className="bus-route"
              fill={"none"}
              stroke={`#${d.properties.color}`}
              strokeWidth={0.5}
            />
          ))}
        </g>
      </svg>
    );
  }
}

export default Map;

import {
  GET_ROUTE_GEOJSON,
  GET_STOP_GEOJSON,
  GET_BUS_GEOJSON
} from "../actions/types";

const initialState = {
  routegeojson: "",
  stopgeojson: "",
  busgeojson: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ROUTE_GEOJSON:
      return {
        ...state,
        routegeojson: action.payload
      };
    case GET_STOP_GEOJSON:
      return {
        ...state,
        stopgeojson: action.payload
      };
    case GET_BUS_GEOJSON:
      return {
        ...state,
        busgeojson: action.payload
      };
    default:
      return state;
  }
};

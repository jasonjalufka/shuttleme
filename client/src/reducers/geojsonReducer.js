import { GET_ROUTE_GEOJSON } from "../actions/types";

const initialState = {
  routegeojson: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ROUTE_GEOJSON:
      return {
        routegeojson: action.payload
      };
    default:
      return state;
  }
}

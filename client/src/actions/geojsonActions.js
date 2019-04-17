import axios from "axios";
import { GET_ROUTE_GEOJSON } from "./types";

export const getRouteGeoJson = university => dispatch => {
  console.log("getting routegeojson...");
  axios
    .get(`/api/geojson/route/${university}`)
    .then(res =>
      dispatch({
        type: GET_ROUTE_GEOJSON,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

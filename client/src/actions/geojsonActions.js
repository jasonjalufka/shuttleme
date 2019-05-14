import axios from "axios";
import { GET_ROUTE_GEOJSON, GET_STOP_GEOJSON, GET_BUS_GEOJSON } from "./types";

export const getRouteGeoJson = university => dispatch => {
  axios
    .get(`/api/geojson/routes/${university}`)
    .then(res =>
      dispatch({
        type: GET_ROUTE_GEOJSON,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const getStopGeoJson = university => dispatch => {
  axios
    .get(`/api/geojson/stops/${university}`)
    .then(res =>
      dispatch({
        type: GET_STOP_GEOJSON,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const getBusGeoJson = university => dispatch => {
  axios
    .get(`/api/geojson/buses/${university}`)
    .then(res =>
      dispatch({
        type: GET_BUS_GEOJSON,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

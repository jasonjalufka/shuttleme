import axios from "axios";
import { SET_STOP, GET_STOPS, GET_USER_STOP, STOPS_LOADING } from "./types";
import { tokenConfig } from "../actions/authActions";
import { returnErrors } from "../actions/errorActions";

export const getStops = () => dispatch => {
  dispatch({ type: STOPS_LOADING });

  axios
    .get("/api/doublemap/stops")
    .then(res =>
      dispatch({
        type: GET_STOPS,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const getUserStop = () => (dispatch, setState) => {
  axios
    .get("/api/users/stop", tokenConfig(setState))
    .then(res => dispatch({ type: GET_USER_STOP, payload: res.data }));
};

export const setStop = stopChoice => (dispatch, setState) => {
  axios.post("/api/users/stop", stopChoice, tokenConfig(setState)).then(res =>
    dispatch({
      type: SET_STOP,
      payload: stopChoice
    })
  );
};

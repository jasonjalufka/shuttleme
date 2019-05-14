import axios from "axios";
import { SET_STOP, GET_STOPS, GET_USER_STOP, STOPS_LOADING } from "./types";
import { tokenConfig } from "../actions/authActions";
// import { returnErrors } from "../actions/errorActions";

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

export const getUserStop = () => (dispatch, getState) => {
  axios
    .get("/api/users/stop", tokenConfig(getState))
    .then(res => dispatch({ type: GET_USER_STOP, payload: res.data }));
};

// export const getUserUniversity = () => (dispatch, getState) => {
//   axios.get("/api/users/university")
// }

export const setStop = stopChoice => (dispatch, getState) => {
  axios.post("/api/users/stop", stopChoice, tokenConfig(getState)).then(res =>
    dispatch({
      type: SET_STOP,
      payload: stopChoice
    })
  );
};

import axios from "axios";
import { SET_STOP, GET_STOPS } from "./types";
import { tokenConfig } from "../actions/authActions";
import { returnErrors } from "../actions/errorActions";

export const getStops = () => dispatch => {
  axios.get("/api/doublemap/stops").then(res =>
    dispatch({
      type: GET_STOPS,
      payload: res.data
    })
  );
};

export const setStop = stopChoice => (dispatch, setState) => {
  axios.post("/api/users/stop", stopChoice, tokenConfig(setState)).then(res =>
    dispatch({
      type: SET_STOP,
      payload: stopChoice
    })
  );
};

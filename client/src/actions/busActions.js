import axios from "axios";
import { GET_BUSES, GET_BUS } from "./types";

export const getBuses = () => dispatch => {
  axios.get("/api/doublemap/buses").then(res =>
    dispatch({
      type: GET_BUSES,
      payload: res.data
    })
  );
};

export const getBus = bus => dispatch => {
  axios.post(`/api/doublemap/buses/${bus}`).then(res =>
    dispatch({
      type: GET_BUS,
      payload: bus
    })
  );
};

import axios from "axios";
import { tokenConfig } from "../actions/authActions";
import {
  LOAD_UNIVERSITIES_LOADING,
  LOAD_UNIVERSITIES_SUCCESS,
  LOAD_UNIVERSITIES_FAIL
} from "./types";

export const getUniversityList = () => dispatch => {
  console.log("howdy unis loading");
  dispatch({ type: LOAD_UNIVERSITIES_LOADING });

  axios
    .get("/api/universities")
    .then(res =>
      dispatch({
        type: LOAD_UNIVERSITIES_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      console.log("Error loading universities");
      dispatch({
        type: LOAD_UNIVERSITIES_FAIL
      });
    });
};

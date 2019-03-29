import { SET_STOP, GET_STOPS } from "../actions/types";

const initialState = {
  stops: [],
  selectedStop: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_STOPS:
      return {
        ...state,
        stops: action.payload
      };
    case SET_STOP:
      return {
        ...state,
        selectedStop: action.payload
      };
    default:
      return state;
  }
}

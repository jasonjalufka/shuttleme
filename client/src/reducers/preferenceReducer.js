import {
  SET_STOP,
  GET_STOPS,
  GET_USER_STOP,
  STOPS_LOADING
} from "../actions/types";

const initialState = {
  stops: [],
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case STOPS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case GET_STOPS:
      return {
        ...state,
        stops: action.payload,
        isLoading: false
      };
    case GET_USER_STOP:
      return {
        ...state,
        selectedStop: action.payload,
        isLoading: false
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

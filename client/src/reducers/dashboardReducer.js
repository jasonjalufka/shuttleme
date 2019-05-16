import {
  LOAD_UNIVERSITIES_LOADING,
  LOAD_UNIVERSITIES_SUCCESS,
  LOAD_UNIVERSITIES_FAIL
} from "../actions/types";

const initialState = {
  universities: [],
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_UNIVERSITIES_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case LOAD_UNIVERSITIES_SUCCESS:
      return {
        ...state,
        universities: action.payload,
        isLoading: false
      };
    case LOAD_UNIVERSITIES_FAIL:
      return {
        ...state,
        universities: [],
        isLoading: false
      };
    default:
      return state;
  }
}

import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import geojsonReducer from "./geojsonReducer";

export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  geojson: geojsonReducer
});

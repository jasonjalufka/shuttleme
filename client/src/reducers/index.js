import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import preferenceReducer from "./preferenceReducer";
import geojsonReducer from "./geojsonReducer";

export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  prefs: preferenceReducer,
  geojson: geojsonReducer
});

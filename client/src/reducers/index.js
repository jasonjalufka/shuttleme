import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import dashboardReducer from "./dashboardReducer";
import geojsonReducer from "./geojsonReducer";

export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  dashboard: dashboardReducer,
  geojson: geojsonReducer
});

import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import preferenceReducer from "./preferenceReducer";

export default combineReducers({
  item: itemReducer,
  error: errorReducer,
  auth: authReducer,
  prefs: preferenceReducer
});

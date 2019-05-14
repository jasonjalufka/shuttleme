import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

// Only chrome can use redux devtools
// redux compose cannot handle a null/undefined middleware
let store = null;
if (window.navigator.userAgent.includes("Chrome")) {
  store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...(window.__REDUX_DEVTOOLS_EXTENSION__
        ? [window.__REDUX_DEVTOOLS_EXTENSION__()]
        : [])
    )
  );
} else {
  store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
  );
}

export default store;

import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";
import Home from "./components/Home";
import MapContainer from "./containers/MapContainer";
import ManageCourses from "./components/ManageCourses (1)";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/map" component={MapContainer} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

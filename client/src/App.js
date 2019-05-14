import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./store";
import { loadUser } from "./actions/authActions";
import Home from "./components/Home";
import OverviewContainer from "./containers/OverviewContainer";
import MapContainer from "./containers/MapContainer";
import { GlobalStyle } from "./styles";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <>
        <GlobalStyle />
        <Router>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route exact path="/map" component={MapContainer} />
            <Route exact path="/dashboard" component={OverviewContainer} />
          </div>
        </Router>
      </>
    );
  }
}

export default App;

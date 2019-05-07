import React, { Component } from "react";
import { HomeLayout } from "../styles/HomeStyles";
import Girl from "./Girl";
import Button from "../styles/Button";

class Home extends Component {
  render() {
    return (
      <>
        <HomeLayout>
          <div className="container">
            <div className="row">
              <div className="column">
                <h1>shuttle.me</h1>
                <p>never miss the bus again</p>
                <ul>
                  <li>Interactive map</li>
                  <li>More than 20 universities</li>
                  <li>Real time updates</li>
                </ul>
                <Button id="get-started">Get Started</Button>
              </div>
              <div className="column header-image">
                <Girl />
              </div>
            </div>
          </div>
        </HomeLayout>
      </>
    );
  }
}

export default Home;

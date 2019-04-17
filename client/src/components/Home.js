import React, { Component } from "react";
import { HomeLayout } from "../styles/HomeStyles";
import StopInfo from "../containers/StopInfo";
import girl from "../img/girl.svg";

class Home extends Component {
  render() {
    return (
      <>
        <HomeLayout>
          <div className="left">
            <div className="title">
              <h1>shuttle.me</h1>
              <p>never miss the bus again</p>
            </div>
          </div>
          <div className="right">
            <img src={girl} alt="Girl" />
          </div>
        </HomeLayout>
        <StopInfo />
      </>
    );
  }
}

export default Home;

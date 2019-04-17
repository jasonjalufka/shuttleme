import React, { Component } from "react";
import styled from "styled-components/macro";

const Name = styled.h1`
  color: red;
  text-align: right;
`;

class TestComponent extends Component {
  render() {
    return <Name>Jason</Name>;
  }
}

export default TestComponent;

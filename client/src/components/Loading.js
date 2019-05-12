import React from "react";
import styled from "styled-components";

const Dots = styled.div`
  padding: 5px;
  width: 3.5em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  div {
    width: 0.8em;
    height: 0.8em;
    border-radius: 50%;
    background-color: rgba(78, 205, 196, 1);
    animation: fade 0.8s ease-in-out alternate infinite;
  }

  div:nth-of-type(1) {
    animation-delay: -0.4s;
  }

  div:nth-of-type(2) {
    animation-delay: -0.2s;
  }

  @keyframes fade {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const Loading = () => {
  return (
    <Dots>
      <div />
      <div />
      <div />
    </Dots>
  );
};

export default Loading;

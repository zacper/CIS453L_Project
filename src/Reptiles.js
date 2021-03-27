import React, { Component } from "react";

import styled from "styled-components";
 
const ReptileDiv = styled.div`
background-color: #c4deba;
padding: 40px;
`;
class Reptiles extends Component {
  render() {
    return (
      <ReptileDiv>
        <h2>Reptiles</h2>
        <p>Reptiles are scaly cold blooded creatures that lay eggs.
          They often like to warm themselves in the sun.

        </p>
        <ol>
          <li>Snakes</li>
          <li>Crocodiles</li>
          <li>Chameleons</li>
          <li>Turtles</li>
          <li>Komodo Dragons</li>
        </ol>
      </ReptileDiv>
    );
  }
}
 
export default Reptiles;
import React, { Component } from "react";
import styled from "styled-components";
 
const BirdDiv = styled.div`
background-color: #c4deba;
padding: 40px;
`;
class Birds extends Component {
  render() {
    return (
      <BirdDiv>
        <h2>Birds</h2>
        <p>Birds are feathery warm-blooded creatures
           that hatch from eggs. Many are capable of flight, but not all.

        </p>
        <ol>
          <li>Robins</li>
          <li>Sparrows</li>
          <li>Eagles</li>
          <li>Chickens</li>
          <li>Penguins</li>
        </ol>
      </BirdDiv>
    );
  }
}
 
export default Birds;
import React, { Component } from "react";
import styled from "styled-components";
 
const FishDiv = styled.div`
background-color: #c4deba;
padding: 40px;
`;
class Fish extends Component {
  render() {
    return (
      <FishDiv>
        <h2>Fish</h2>
        <p>Fish are aquatic, cold-blooded creatures that live
          and breathe underwater. They are usually born from eggs.

        </p>
        <ol>
          <li>Goldfish</li>
          <li>Trout</li>
          <li>Carp</li>
          <li>Flounder</li>
          <li>Sharks</li>
        </ol>
      </FishDiv>
    );
  }
}
 
export default Fish;
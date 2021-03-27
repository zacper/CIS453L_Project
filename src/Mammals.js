import React, { Component } from "react";
 
import styled from "styled-components";
 
const MammalDiv = styled.div`
background-color: #c4deba;
padding: 40px;
`;
class Mammals extends Component {
  render() {
    return (
      <MammalDiv>
        <h2>Mammals</h2>
        <p>Mammals are warm-blooded creatures that usually do not hatch from eggs.

        </p>
        <ol>
          <li>Dogs</li>
          <li>Cats</li>
          <li>Horses</li>
          <li>Dolphins</li>
          <li>Platypuses</li>
        </ol>
      </MammalDiv>
    );
  }
}
 
export default Mammals;
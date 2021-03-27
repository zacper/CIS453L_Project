import React, { Component } from "react";
import styled from "styled-components";
 
const AmphibianDiv = styled.div`
background-color: #c4deba;
padding: 40px;
`; 
class Amphibians extends Component {
  render() {
    return (
      <AmphibianDiv>
        <h2>Amphibians</h2>
        <p>Amphibians are smooth cold blooded creatures that are famous
          for hatching in the water, living as aquatic creatures until
          they later transform into a more terrestrial creature.

        </p>
        <ol>
          <li>Frogs</li>
          <li>Toads</li>
          <li>Newts</li>
          <li>Salamanders</li>
          <li>Caecilians</li>
        </ol>
      </AmphibianDiv>
    );
  }
}
 
export default Amphibians;
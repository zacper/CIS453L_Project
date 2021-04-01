import React, { Component } from "react";
import styled from "styled-components";
 


const HomeTitle = styled.h2`
 font-size: 2em;
 font-family: Cursive, Times, sans-serif;
 
`;

const HomeDiv = styled.div`
background-color: #c4deba;
padding: 40px;
`;

class Home extends Component {
  render() {
    return (
      <HomeDiv>
        <HomeTitle>
          Home
        </HomeTitle>
        
        <p>This is a website that teaches about the types of animals, specifically vertebrates.
        </p>
 
      </HomeDiv>
    );
  }
}
 
export default Home;
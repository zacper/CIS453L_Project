import React, { Component } from "react";
import styled from "styled-components";
 


const HomeTitle = styled.h2`
 font-size: 2em;
 
`;

const HomeDiv = styled.div`
background-color: #f2e8ae;
padding: 40px;
`;

class Home extends Component {
  render() {
    return (
      <HomeDiv>
        <HomeTitle>
          Home
        </HomeTitle>
        
        <p>This is a website that teaches about the types of animals.
        </p>
 
      </HomeDiv>
    );
  }
}
 
export default Home;
import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import Mammals from "./Mammals";
  import Birds from "./Birds"; 
  import Fish from "./Fish";
  import Reptiles from "./Reptiles";
  import Amphibians from "./Amphibians";

  import styled from "styled-components";

const MainTitle = styled.h1`
padding: 20px;
background-color: #333333;
color: #f7f4e1;
font-family: Cursive, Times, sans-serif;
font-size: 2em;

`;

const MainLi = styled.li`
  font-family: Cursive, Times, serif;
`;



  class Main extends React.Component {
    render() {
      return (
        <HashRouter>
          <div>
            
            <MainTitle>Types of Animals</MainTitle>
            <ul className="header">
              <MainLi><NavLink exact to="/">Home</NavLink></MainLi>
              <MainLi><NavLink to="/mammals">Mammals</NavLink></MainLi>
              <MainLi><NavLink to="/birds">Birds</NavLink></MainLi>
              <MainLi><NavLink to="/fish">Fish</NavLink></MainLi>
              <MainLi><NavLink to="/reptiles">Reptiles</NavLink></MainLi>
              <MainLi><NavLink to="/amphibians">Amphibians</NavLink></MainLi>
            </ul>
            
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/mammals" component={Mammals}/>
              <Route path="/birds" component={Birds}/>
              <Route path="/fish" component={Fish}/>
              <Route path="/reptiles" component={Reptiles}/>
              <Route path="/amphibians" component={Amphibians}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
 
export default Main;
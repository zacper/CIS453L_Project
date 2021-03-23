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
`;

  class Main extends React.Component {
    render() {
      return (
        <HashRouter>
          <div>
            <MainTitle>Types of Animals</MainTitle>
            <ul className="header">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/mammals">Mammals</NavLink></li>
              <li><NavLink to="/birds">Birds</NavLink></li>
              <li><NavLink to="/fish">Fish</NavLink></li>
              <li><NavLink to="/reptiles">Reptiles</NavLink></li>
              <li><NavLink to="/amphibians">Amphibians</NavLink></li>
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
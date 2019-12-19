import React from "react";
import Characters from "./characters/Characters";
import Character from "./character/Character";
import Episode from "./episodes/Episode";
import { Route } from "react-router-dom";
import Header from "./shared/Header"
import "../styles/app.scss";

const App = () => (
  <>
  <Header/>
    <Route path="/" exact component={Characters} />
    <Route path="/character/:characterID" exact component={Character} />
    <Route path="/episodes" exact component={Episode} />
  </>
);

export default App;

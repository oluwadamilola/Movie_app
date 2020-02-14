import React from "react";
import { Route } from "react-router-dom";
import Header from "./shared/Header";
import routes from "../core/routing";

const App = () => {
  return (
    <>
      <Header />
      {routes.map(({ path, component }, key) => {
        return <Route path={path} exact component={component} key={key} />;
      })}
    </>
  );
};

export default App;

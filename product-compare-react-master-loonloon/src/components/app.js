import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./home";
import NotFound from "./not-found";

const App = () => {
  return (
    <div className="app">
      <div className="container mt-4">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default App;

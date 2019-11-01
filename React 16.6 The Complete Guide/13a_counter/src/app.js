import React, { Component } from "react";

import Counter from "./containers/counter";
import "./app.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;

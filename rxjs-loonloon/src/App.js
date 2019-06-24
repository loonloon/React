import React, { Component } from "react";
import ProducerA from "./ProducerA";
import ConsumerB from "./ConsumerB";

class App extends Component {
  render() {
    return (
      <div>
        <ProducerA />
        <hr />
        <ConsumerB />
      </div>
    );
  }
}

export default App;

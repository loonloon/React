import React, { Component } from "react";
import { subscriber } from "./messageService";
import ConsumerA from "./ConsumerA";

class ProducerA extends Component {
  render() {
    return (
      <div>
        <h3>ProducerA</h3>
        <button onClick={e => subscriber.next(1)}>Increment Counter</button>
        <ConsumerA />
      </div>
    );
  }
}

export default ProducerA;

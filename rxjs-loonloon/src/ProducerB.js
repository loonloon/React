import React, { Component } from "react";
import { subscriber } from "./messageService";

class ProducerB extends Component {
  render() {
    return (
      <div>
        <h3>ProducerB</h3>
        <button onClick={e => subscriber.next(-1)}>Decrement Counter</button>
      </div>
    );
  }
}

export default ProducerB;

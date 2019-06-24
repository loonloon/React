import React, { Component } from "react";
import { subscriber } from "./messageService";
import ProducerB from "./ProducerB";

class ConsumerB extends Component {
  state = {
    counter: 0
  };

  componentDidMount() {
    subscriber.subscribe(v => {
      console.log("ConsumerB subscribe");
      let { counter } = this.state;
      counter += v;
      this.setState({ counter });
    });
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        <hr />
        <h3>Counter for Consumer B</h3>
        <div>Countre: {counter}</div>
        <hr />
        <ProducerB />
      </div>
    );
  }
}

export default ConsumerB;

import React, { Component } from "react";
import { subscriber } from "./messageService";

class ConsumerA extends Component {
  state = {
    counter: 0
  };

  componentDidMount() {
    subscriber.subscribe(v => {
      console.log("ConsumerA subscribe");
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
        <h3>Counter for Consumer A</h3>
        <div>Countre: {counter}</div>
      </div>
    );
  }
}

export default ConsumerA;

import React from "react";
import { connect } from "react-redux";

import "./app.css";
import Display from "./display";
import ButtonPanel from "./button-panel";
import { calculate } from "../actions";

class App extends React.Component {
  handleClick = buttonName => {
    this.props.calculate(buttonName);
  };

  render() {
    return (
      <div className="component-app">
        <Display
          value={
            this.props.calculator.next || this.props.calculator.total || "0"
          }
        />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { calculator: state.calculator };
};

export default connect(
  mapStateToProps,
  { calculate }
)(App);

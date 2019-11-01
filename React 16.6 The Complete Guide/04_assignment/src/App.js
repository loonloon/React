import React, { Component } from "react";
import Validation from "./validation";
import Char from "./char";

class App extends Component {
  state = {
    userInput: ""
  };

  inputChangedHandler = event => {
    this.setState({ userInput: event.target.value });
  };

  deleteCharHandler = characterIndex => {
    var userInput = this.state.userInput
      .split("")
      .filter((ch, index) => index !== characterIndex)
      .join("");
    this.setState({ userInput });
  };

  render() {
    const charList = this.state.userInput
      .split("")
      .map((ch, index) => (
        <Char
          key={index}
          character={ch}
          clicked={() => this.deleteCharHandler(index)}
        />
      ));
    return (
      <div>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.inputChangedHandler}
        />
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;

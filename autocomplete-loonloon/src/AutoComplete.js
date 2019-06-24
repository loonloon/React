import React, { Component } from "react";

class AutoComplete extends Component {
  state = {
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: ""
  };

  onChangeHandler = e => {
    const { options } = this.props;
    const userInput = e.currentTarget.value;
    const filteredOptions = options.filter(
      optionName =>
        optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      filteredOptions: filteredOptions,
      showOptions: true,
      userInput: userInput
    });
  };

  onKeyDownHandler = e => {
    const { activeOption, filteredOptions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        showOptions: false,
        userInput: filteredOptions[activeOption]
      });
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }

      this.setState({ activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        return;
      }

      this.setState({ activeOption: activeOption - 1 });
    }
  };

  onClickHandler = e => {
    this.setState({
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText
    });
  };

  renderOptionsList = () => {
    if (this.state.showOptions && this.state.userInput) {
      return (
        <ul className="options">
          {this.state.filteredOptions.map((optionName, index) => {
            let className =
              index === this.state.activeOption ? "option-active" : "";
            return (
              <li
                className={className}
                key={optionName}
                onClick={this.onClickHandler}
              >
                {optionName}
              </li>
            );
          })}
        </ul>
      );
    }

    return (
      <div className="no-options">
        <em>No Options!</em>
      </div>
    );
  };

  render() {
    return (
      <>
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={this.state.userInput}
            onChange={this.onChangeHandler}
            onKeyDown={this.onKeyDownHandler}
          />
          <input type="submit" value="" className="search-btn" />
        </div>
        {this.renderOptionsList()}
      </>
    );
  }
}

export default AutoComplete;

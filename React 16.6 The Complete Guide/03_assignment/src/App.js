import React from "react";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserInput";

class App extends React.Component {
  state = { userName: "supermax" };

  userNameChangedHandler = e => {
    this.setState({
      userName: e.target.value
    });
  };

  render() {
    return (
      <div>
        <UserInput
          changed={this.userNameChangedHandler}
          currentName={this.state.userName}
        />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName="Max" />
      </div>
    );
  }
}

export default App;

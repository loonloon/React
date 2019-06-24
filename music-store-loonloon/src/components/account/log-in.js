import React from "react";
import { connect } from "react-redux";
import LogInForm from "./log-in-form";
import LogInSuccess from "./log-in-success";
import { logIn } from "../../actions";

class LogIn extends React.Component {
  onSubmit = formValues => {
    this.props.logIn(formValues.userName, formValues.password);
  };

  render() {
    const { authentication } = this.props;
    
    if (authentication && authentication.loggedIn) {
      return <LogInSuccess />;
    } else {
      return (
        <LogInForm onSubmit={this.onSubmit} authentication={authentication} />
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    authentication: state.authentication
  };
};

export default connect(
  mapStateToProps,
  { logIn }
)(LogIn);

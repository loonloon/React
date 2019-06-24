import React from "react";
import { connect } from "react-redux";
import RegisterAccountForm from "./register-account-form";
import { createUser } from "../../actions";

class RegisterAccount extends React.Component {
  onRegister = formValues => {
    this.props.createUser(formValues);
  };

  render() {
    return (
      <RegisterAccountForm
        onRegister={this.onRegister}
        user={this.props.user}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { createUser }
)(RegisterAccount);

import React from "react";
import { Field, reduxForm } from "redux-form";

class RegisterAccountForm extends React.Component {
  renderSummaryError = () => {
    const { submitSucceeded, user } = this.props;
    if (submitSucceeded && user && user.creating && user.registered) {
      return (
        <div className="validation-summary-errors">
          <span>
            Account creation was unsuccessful. Please correct the errors and try
            again.
          </span>
        </div>
      );
    }
  };

  renderError({ error, touched }) {
    if (touched && error) {
      return error;
    }
  }

  renderInput = ({ input, type, label, meta }) => {
    const className = `${
      meta.error && meta.touched ? "input-validation-error" : ""
    }`;

    return (
      <>
        <div className="editor-label">{label}</div>
        <div className="editor-field">
          <input className={className} {...input} type={type} />
          {""}
          <span className="field-validation-error">
            {this.renderError(meta)}
          </span>
        </div>
      </>
    );
  };

  onRegister = formValues => {
    this.props.onRegister(formValues);
  };

  render() {
    return (
      <>
        <h2>Create a New Account</h2>
        <p>Use the form below to create a new account.</p>
        <p>Passwords are required to be a minimum of 7 characters in length.</p>
        {this.renderSummaryError()}
        <form onSubmit={this.props.handleSubmit(this.onRegister)}>
          <div>
            <fieldset>
              <legend>Account Information</legend>
              <Field
                name="userName"
                component={this.renderInput}
                label="User name"
                type="text"
              />
              <Field
                name="emailAddress"
                component={this.renderInput}
                label="Email address"
                type="text"
              />
              <Field
                name="password"
                component={this.renderInput}
                label="Password"
                type="password"
              />
              <Field
                name="confirmPassword"
                component={this.renderInput}
                label="Confirm password"
                type="password"
              />
              <p>
                <input type="submit" value="Register" />
              </p>
            </fieldset>
          </div>
        </form>
      </>
    );
  }
}

const validate = ({ userName, emailAddress, password, confirmPassword }) => {
  const errors = {};

  if (!userName) {
    errors.userName = "The User name field is required.";
  }

  if (!emailAddress) {
    errors.emailAddress = "The Email address field is required.";
  }

  if (!password) {
    errors.password = "The Password field is required.";
  } else {
    if (password && password.length < 6) {
      errors.password = "The Password must be at least 6 characters long.";
    } else {
      if (!confirmPassword || password !== confirmPassword) {
        errors.confirmPassword =
          "The password and confirmation password do not match.";
      }
    }
  }

  return errors;
};

export default reduxForm({
  form: "registerAccountForm",
  validate
})(RegisterAccountForm);

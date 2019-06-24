import React from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

class LogInForm extends React.Component {
  renderSummaryError = () => {
    const { submitSucceeded, authentication } = this.props;
    if (
      submitSucceeded &&
      authentication &&
      !authentication.logging &&
      !authentication.loggedIn
    ) {
      return (
        <div className="validation-summary-errors">
          <span>
            Login was unsuccessful. Please correct the errors and try again.
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

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <>
        <h2>Log On</h2>
        <p>
          Please enter your user name and password.{" "}
          <Link to="/account/register">Register</Link> if you don't have an
          account.
        </p>
        {this.renderSummaryError()}
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div>
            <fieldset>
              <legend>Account Information</legend>
              <Field
                name="userName"
                component={this.renderInput}
                label="User Name"
                type="text"
              />
              <Field
                name="password"
                component={this.renderInput}
                label="Password"
                type="password"
              />
              <div className="editor-label">
                <input type="checkbox" /> Remember me
              </div>
              <p>
                <input type="submit" value="Log On" />
              </p>
            </fieldset>
          </div>
        </form>
      </>
    );
  }
}

const validate = ({ userName, password }) => {
  const errors = {};

  if (!userName) {
    errors.userName = "The User name field is required.";
  }

  if (!password) {
    errors.password = "The Password field is required.";
  }

  return errors;
};

export default reduxForm({
  form: "logInForm",
  validate
})(LogInForm);

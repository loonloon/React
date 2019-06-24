import React from "react";
import { Field, reduxForm } from "redux-form";

class CheckOutForm extends React.Component {
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

  onCheckOut = formValues => {
    this.props.onCheckOut(formValues);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onCheckOut)}>
        <h2>Address And Payment</h2>
        <fieldset>
          <legend>Shipping Information</legend>
          <Field
            name="firstName"
            component={this.renderInput}
            label="First Name"
            type="text"
          />
          <Field
            name="lastName"
            component={this.renderInput}
            label="Last Name"
            type="text"
          />
          <Field
            name="address"
            component={this.renderInput}
            label="Address"
            type="text"
          />
          <Field
            name="city"
            component={this.renderInput}
            label="City"
            type="text"
          />
          <Field
            name="state"
            component={this.renderInput}
            label="State"
            type="text"
          />
          <Field
            name="postalCode"
            component={this.renderInput}
            label="Postal Code"
            type="text"
          />
          <Field
            name="country"
            component={this.renderInput}
            label="Country"
            type="text"
          />
          <Field
            name="phone"
            component={this.renderInput}
            label="Phone"
            type="text"
          />
          <Field
            name="emailAddress"
            component={this.renderInput}
            label="Email Address"
            type="text"
          />
        </fieldset>
        <fieldset>
          <legend>Payment</legend>
          <p>
            We're running a promotion: all music is free with the promo code:
            "FREE"
          </p>
          <Field
            name="promoCode"
            component={this.renderInput}
            label="Promo Code"
            type="text"
          />
        </fieldset>
        <input type="submit" value="Submit Order" />
      </form>
    );
  }
}

const validate = ({
  firstName,
  lastName,
  address,
  city,
  state,
  postalCode,
  country,
  phone,
  emailAddress,
  promoCode
}) => {
  const errors = {};

  if (!firstName) {
    errors.firstName = "First Name is required";
  }

  if (!lastName) {
    errors.lastName = "Last Name is required";
  }

  if (!address) {
    errors.address = "Address is required";
  }

  if (!city) {
    errors.city = "City is required";
  }

  if (!state) {
    errors.state = "State is required";
  }

  if (!postalCode) {
    errors.postalCode = "Postal Code is required";
  }

  if (!country) {
    errors.country = "Country is required";
  }

  if (!phone) {
    errors.phone = "Phone is required";
  }

  if (!emailAddress) {
    errors.emailAddress = "Email Address is required";
  }

  if (
    firstName &&
    lastName &&
    address &&
    city &&
    state &&
    postalCode &&
    country &&
    phone &&
    emailAddress &&
    !promoCode
  ) {
    errors.promoCode = "Please enter promo code";
  }

  return errors;
};

export default reduxForm({
  form: "checkOutForm",
  validate
})(CheckOutForm);

import React from "react";
import { connect } from "react-redux";
import CheckOutForm from "./check-out-form";
import { checkoutCart } from "../../actions";

class CheckOut extends React.Component {
  onCheckOut = formValues => {
    const { cart, authentication } = this.props;
    const date = new Date();
    const orderDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
    const totalAmount =
      cart.length > 0
        ? cart.reduce((a, { Price, Quantity }) => a + Price * Quantity, 0)
        : 0;

    this.props.checkoutCart({
      ...formValues,
      orderDate,
      totalAmount,
      userName: authentication.user,
      cart
    });
  };

  render() {
    return <CheckOutForm onCheckOut={this.onCheckOut} />;
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
    authentication: state.authentication
  };
};

export default connect(
  mapStateToProps,
  { checkoutCart }
)(CheckOut);

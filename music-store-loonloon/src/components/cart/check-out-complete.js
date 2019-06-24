import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class CheckOutComplete extends React.Component {
  render() {
    return (
      <>
        <h2>Checkout Complete</h2>
        <p>Thanks for your order! Your order number is: {this.props.orderId}</p>
        <p>
          How about shopping for some more music in our{" "}
          <Link to="/">store</Link>
        </p>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // ownProps from parent passing in
  return { orderId: ownProps.match.params.id };
};

export default connect(mapStateToProps)(CheckOutComplete);

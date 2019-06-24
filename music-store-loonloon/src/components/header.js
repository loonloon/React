import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    const { cart } = this.props;

    return (
      <div id="header">
        <h1>
          <Link to="/">React MUSIC STORE</Link>
        </h1>
        <ul id="navlist">
          <li className="first">
            <Link to="/" className="first">
              Home
            </Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
          <li>
            <Link to="/cart">
              Cart (
              {cart.length > 0
                ? cart.reduce((a, { Quantity }) => a + Quantity, 0)
                : 0}
              )
            </Link>
          </li>
          <li>
            <Link to="/account/login">Admin</Link>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(Header);

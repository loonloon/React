import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../actions";

class Cart extends React.Component {
  onRemoveFromCart = album => {
    this.props.removeFromCart(album);
  };

  render() {
    const { cart, authentication } = this.props;
    
    return (
      <>
        <h3>
          <em>Review</em> your cart:
        </h3>
        <p className="button">
          <Link to={authentication.loggedIn ? "/checkOut" : "/account/login"}>
            Checkout
          </Link>
        </p>
        <div id="update-message" />
        <table>
          <tbody>
            <tr>
              <th>Album Name</th>
              <th>Price (each)</th>
              <th>Quantity</th>
              <th />
            </tr>
            {cart &&
              cart.map(cartItem => (
                <tr key={cartItem.AlbumId}>
                  <td>
                    <Link to={`/album/${cartItem.AlbumId}`}>
                      {cartItem.Title}
                    </Link>
                  </td>
                  <td>{cartItem.Price}</td>
                  <td>{cartItem.Quantity}</td>
                  <td>
                    <a
                      href="#"
                      className="RemoveLink"
                      onClick={() => this.onRemoveFromCart(cartItem)}
                    >
                      Remove from cart
                    </a>
                  </td>
                </tr>
              ))}
            <tr>
              <td>Total</td>
              <td />
              <td />
              <td id="cart-total">
                {cart.length > 0
                  ? cart.reduce((a, { Price, Quantity }) => a + Price * Quantity, 0)
                  : 0}
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
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
  { removeFromCart }
)(Cart);

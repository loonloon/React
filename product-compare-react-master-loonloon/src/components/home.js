import React from "react";
import { connect } from "react-redux";

import ProductList from "./product-list";
import Compare from "./compare";
import { getProducts, compareProduct } from "../actions";

class Home extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { products, compareProduct } = this.props;
    const compareProducts = products.filter(product => product.compare);

    return (
      <div className="home mt-5">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-3">Compare Products</h2>
          </div>
        </div>
        <ProductList products={products} compare={compareProduct} />
        {compareProducts.length >= 2 && <Compare products={compareProducts} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.product.products
  };
};

export default connect(
  mapStateToProps,
  { getProducts, compareProduct }
)(Home);

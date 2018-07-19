import React from 'react';
import { connect } from 'react-redux';

import { addProductToCart } from '../actions/products';

import '../css/ProductShow.css'
 
const ProductShow = ({ product, addProductToCart }) =>
  <div id="product-show" className="col-md-8">
    <h2>{product.title}</h2>
    <p>{product.description}</p>
    <button onClick={() => addProductToCart(product)}>Add to cart</button>
  </div>;
 
const mapStateToProps = (state, ownProps) => {
  const product = state.products.find(product => product.id === parseInt(ownProps.match.params.productId, 10))

  if (product) {
    return { 
      product
    }
  } else {
    return { product: {} }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProductToCart: (product) => dispatch(addProductToCart(product))
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);
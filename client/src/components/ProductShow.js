import React from 'react';
import { connect } from 'react-redux';
 
const ProductShow = ({ product }) =>
  <div className="col-md-8">
    <h2>{product.title}</h2>
    <p>{product.description}</p>
  </div>;
 
const mapStateToProps = (state, ownProps) => {
  const product = state.products.find(product => product.id === parseInt(ownProps.match.params.productId))

  if (product) {
    return { product }
  } else {
    return { product: {} }
  }
}
 
export default connect(mapStateToProps)(ProductShow);
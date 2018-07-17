import React from 'react';
// import { connect } from 'react-redux';
 
const ProductShow = ({ product }) =>
  <div>
    <h3>Product show page</h3>
  </div>;
 
// const mapStateToProps = (state, ownProps) => {
//   const product = state.products.find(product => product.id == ownProps.match.params.productId)

//   if (product) {
//     return { product }
//   } else {
//     return { product: {} }
//   }
// }
 
// export default connect(mapStateToProps)(ProductShow);
export default ProductShow
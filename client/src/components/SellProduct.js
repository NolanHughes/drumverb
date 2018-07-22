import React from 'react'
import { connect } from 'react-redux';

import { addNewProduct } from '../actions/index';//***

import '../css/NewProduct.css'

class SellProduct extends React.Component {
  render() {
    const { addNewProduct } = this.props
    
    return (
      <div id="new-product">
        <input ref="title" placeholder="Enter the title of the product" />
        <input ref="description" placeholder="Enter a description" />
        <input ref="price" placeholder="Enter a price" />
        <input ref="image_url" placeholder="Enter an image url" />
        <button onClick={() => addNewProduct(this)}>Submit</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewProduct: (product) => dispatch(addNewProduct(product))
  };
};

export default connect(null, mapDispatchToProps)(SellProduct);
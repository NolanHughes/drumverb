import React from 'react'
import { connect } from 'react-redux';

import { addNewProduct } from '../actions/products';

import '../css/NewProduct.css'

class NewProduct extends React.Component {
  // handleClick() {
  //   const title = this.refs.title.value;
  //   const description = this.refs.description.value;
  //   const price = this.refs.price.value;
  //   const image_url = this.refs.image_url.value;

  //   const data = { product: {title: title, description: description, price: price, image_url: image_url} }

  //   fetch('http://localhost:3000/api/products', {
  //     method: 'post',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   }).then(res => res.json())
  //     .then(res => console.log(res));
  // }

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

export default connect(null, mapDispatchToProps)(NewProduct);
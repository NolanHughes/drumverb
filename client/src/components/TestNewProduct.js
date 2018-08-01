import React from 'react'
import Form from './Form'

import '../css/NewProduct.css'

class TestNewProduct extends React.Component {
  render() {
    return (
      <div className="ProductNew col-md-8 col-md-offset-2">
        <h2>New Product</h2>
        <Form history={this.props.history} match={this.props.match} />
      </div>
    );
  }
}

export default TestNewProduct;


import React from 'react'
import RefactorForm from './RefactorForm'

import '../css/NewProduct.css'

class TestNewProduct extends React.Component {
  render() {
    return (
      <RefactorForm history={this.props.history} match={this.props.match} />
    );
  }
}

export default TestNewProduct;


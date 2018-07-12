import React, { Component } from 'react';
import Cart from './Cart';
import ProductSearch from './ProductSearch';

class App extends Component {
  state = {
    selectedProducts: [],
  }

  removeProduct = (itemIndex) => {
    const filteredProducts = this.state.selectedProducts.filter(
      (item, idx) => itemIndex !== idx,
    );
    this.setState({ selectedProducts: filteredProducts });
  }

  addProductToCart = (product) => {
    const newProducts = this.state.selectedProducts.concat(product);
    this.setState({ selectedProducts: newProducts });
  }

  render() {
    const { selectedProducts } = this.state;

    return (
      <div className='App'>
        <div className='ui text container'>
          <ProductSearch onProductClick={this.addProductToCart}/>
          <Cart products={selectedProducts} onProductClick={this.removeProduct}/>    
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Cart from './Cart';
import ProductSearch from './ProductSearch';
import ProductDisplay from './ProductDisplay'

class App extends Component {
  state = {
    cart: [],
    queriedProduct: []
  }

  removeProduct = (itemIndex) => {
    const filteredProducts = this.state.cart.filter(
      (item, idx) => itemIndex !== idx,
    );
    this.setState({ cart: filteredProducts });
  }

  addProductToCart = (product) => {
    const newProducts = this.state.cart.concat(product);
    this.setState({ cart: newProducts });
  }

  displayProduct = (product) => {
    this.setState({
      queriedProduct: product
    })
  }

  render() {
    const { cart } = this.state;
    const { queriedProduct } = this.state;

    return (
      <div className='App'>
        <div className='ui text container'>
          <ProductSearch displayProduct={this.displayProduct} />
          <Cart cart={cart} onProductClick={this.removeProduct}/> 
          <ProductDisplay product={queriedProduct} onProductClick={this.addProductToCart}/>  
        </div>
      </div>
    );
  }
}

export default App;

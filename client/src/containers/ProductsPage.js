import React from 'react';
import Cart from '../components/Cart';
import ProductSearch from './ProductSearch';
import ProductIndexDisplay from '../components/ProductIndexDisplay';
import { productsFetchData } from '../actions/products';
import ProductShow from '../components/ProductShow'
import Header from '../components/Header'

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

class ProductsPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cart: [],
      queriedProduct: []
    }
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
    debugger
    this.setState({
      queriedProduct: product
    })
  }

  componentDidMount() {
    this.props.fetchData('http://localhost:3000/api/products');
  }

  render() {
    const { cart } = this.state;//Figure out what to do with this
    const { queriedProduct } = this.state;//Figure out what to do with this
    const { products, match } = this.props

    return (
      <div className='App'>
        <div className='ui text container'>
        <ProductSearch products={products} displayProduct={this.displayProduct}/> 
          <div>
            <Switch>
              <Route 
                exact path='/products' 
                render={(props) => <ProductIndexDisplay products={products} onProductClick={this.addProductToCart} />} 
              />
              <Route path={`${match.url}/:productId`} component={ProductShow}/>
            </Switch>
          </div>        
          <Cart cart={cart} onProductClick={this.removeProduct}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    isLoading: state.productsAreLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(productsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
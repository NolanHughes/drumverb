import React from 'react';
import Cart from './components/Cart';
import ProductSearch from './containers/ProductSearch';
import ProductIndexDisplay from './components/ProductIndexDisplay';
import { productsFetchData } from './actions/products';
import ProductShow from './components/ProductShow'
import Header from './components/Header'

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends React.Component {
  state = {
    // cart: [],
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

  componentDidMount() {
    this.props.fetchData('http://localhost:3000/api/products');
  }

  render() {
    const { cart } = this.state;
    const { queriedProduct } = this.state;
    const { products } = this.props

    return (
      <div className='App'>
        <div className='ui text container'>
        <ProductSearch products={products} displayProduct={this.displayProduct}/>
          <Router>
            <div>
              <Header />
              <Switch>
                <Route exact path='/' render={(props) => <ProductIndexDisplay products={products} />} />
                <Route path="/product" component={ProductShow}/>
              </Switch>
            </div>
          </Router>
          {/*<Cart cart={cart} onProductClick={this.removeProduct}/>*/} 
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

export default connect(mapStateToProps, mapDispatchToProps)(App);


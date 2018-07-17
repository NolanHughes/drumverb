import React from 'react';
import Cart from './components/Cart';
import ProductSearch from './containers/ProductSearch';
import ProductDisplay from './components/ProductDisplay';
import { connect } from 'react-redux';
import { productsFetchData } from './actions/products';

class App extends React.Component {
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
  //Move to Client.js and set to products you want to display on index page
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
          <ProductSearch products={products} displayProduct={this.displayProduct} />
          {/*<Cart cart={cart} onProductClick={this.removeProduct}/>*/} 
          <ProductDisplay products={products} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    hasErrored: state.productsHasErrored,
    isLoading: state.productsIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(productsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

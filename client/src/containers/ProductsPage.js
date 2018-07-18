import React from 'react';
import Cart from '../components/Cart';
import ProductSearch from './ProductSearch';
import ProductIndexDisplay from '../components/ProductIndexDisplay';
import { productsFetchData, queriedProductsFetchData, clearQueriedProducts, clearSearchValue } from '../actions/products';
import ProductShow from '../components/ProductShow'
import Header from '../components/Header'

import { BrowserRouter as Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

class ProductsPage extends React.Component {
  //***change all this shit!
  constructor(props) {
    super(props)

    this.state = {
      cart: []
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
  //***

  componentDidMount() {
    this.props.fetchData('http://localhost:3000/api/products');
  }

  render() {
    const { cart } = this.state;//Figure out what to do with this
    const { products, 
            match, 
            queryProducts, 
            clearQueriedProducts,
            clearSearchValue 
          } = this.props

    return (
      <div className='App'>
        <div className='ui text container'>
        <ProductSearch 
          searchChange={queryProducts}
          searchCancel={clearQueriedProducts}
          clearSearchValue={clearSearchValue}
        /> 
        <Header />
          <div>
            <Switch>
              <Route 
                exact path='/products' 
                render={
                  (props) => <ProductIndexDisplay 
                  products={products} 
                  onProductClick={this.addProductToCart} />
                } 
              />
              <Route path={`${match.url}/:productId`} component={ProductShow}/>
            </Switch>
          </div>        
          {/*<Cart cart={cart} onProductClick={this.removeProduct}/>*/}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    areLoading: state.productsAreLoading,
    queriedProducts: state.queriedProducts,
    searchValue: state.searchValue
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(productsFetchData(url)),
    queryProducts: (query) => dispatch(queriedProductsFetchData(query)),
    clearQueriedProducts: () => dispatch(clearQueriedProducts()),
    clearSearchValue: () => dispatch(clearSearchValue())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
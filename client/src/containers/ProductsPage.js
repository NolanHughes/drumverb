import React from 'react';
import Cart from '../components/Cart';
import ProductIndexDisplay from '../components/ProductIndexDisplay';
import { productsFetchData } from '../actions/products';
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
    const { products, match } = this.props

    return (
      <div>      
        <Header />
        <div className='ui container'>
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    areLoading: state.productsAreLoading
  };
};

//Rename fetchData to be more specific about fetch all products
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(productsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
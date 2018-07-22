import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/Header'
import ProductShow from './components/ProductShow'
import ProductsPage from './containers/ProductsPage';
import Cart from './components/Cart'
import { fetchAllProducts } from './actions/products';
import SellProduct from './components/SellProduct'

import './css/App.css'

class App extends React.Component {
  componentDidMount() {
    this.props.fetchAllProducts('http://localhost:3000/api/products');
  }

  render() {
    const {cart} = this.props

    return (
      <Router>
        <div id='main-div'>          
          <Header />                  
          <Switch>
            <Route exact path='/' component={ProductsPage} />
            <Route path='/cart' render={(props) => <Cart cart={cart} />} />
            <Route path='/products/:productId' component={ProductShow}/>
            <Route path='/sell' component={SellProduct}/>            
          </Switch>
        </div>
      </Router>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProducts: (url) => dispatch(fetchAllProducts(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
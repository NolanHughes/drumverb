import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import Header from './components/Header'
import ProductShow from './components/ProductShow'
import ProductsPage from './containers/ProductsPage';
import Cart from './components/Cart'
import { fetchAllProducts } from './actions/index';//***
import SellProduct from './containers/SellProduct'
import FilteredProductsPage from './containers/FilteredProductsPage'
import SearchedProductsPage from './containers/SearchedProductsPage'
import NotFound from './NotFound'

import './css/App.css'

class App extends React.Component {
  componentDidMount() {
    this.props.fetchAllProducts('http://localhost:3000/products');
  }

  render() {
    const history = createBrowserHistory();

    return (
      <Router history={history}>
        <div id='main-div'>          
          <Header />                  
          <Switch>
            <Route exact path='/' component={ProductsPage} />
            <Route path='/cart' component={Cart} />
            <Route path='/products/:productId' component={ProductShow}/>
            <Route path='/sell' component={SellProduct}/> 
            <Route path={`/filtered-products/:searchValue`} component={FilteredProductsPage}/> 
            <Route path={`/searched-products/:searchValue`} component={SearchedProductsPage}/>  
            <Route path="*" component={NotFound} />             
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProducts: (url) => dispatch(fetchAllProducts(url))
  };
};

export default connect(null, mapDispatchToProps)(App);

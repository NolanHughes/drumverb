import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/Header'
import ProductShow from './components/ProductShow'
import ProductsPage from './containers/ProductsPage';
import Cart from './components/Cart'
import { productsFetchData } from './actions/products';
import NewProduct from './components/NewProduct'

import './css/App.css'

class App extends React.Component {
  componentDidMount() {
    this.props.fetchData('http://localhost:3000/api/products');
  }

  // handleClick = () => {
  //   debugger
  //   var name = this.refs.name.value;
  //   var description = this.refs.description.value;
  //   // $.ajax({
  //   //   url: "/api/v1/items",
  //   //   type: "POST",
  //   //   data: { item: { name: name, description: description } },
  //   //   success: response => {
  //   //     console.log("it worked!", response);
  //   //   }
  //   // });
  // }

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
            <Route path='/new' component={NewProduct}/>            
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

//Rename fetchData to be more specific about fetch all products
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(productsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
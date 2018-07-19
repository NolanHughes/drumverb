import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/Header'
import ProductShow from './components/ProductShow'
import ProductsPage from './containers/ProductsPage';
import Cart from './components/Cart'
import { productsFetchData } from './actions/products';

class App extends React.Component {
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
    const { cart } = this.state

    return (
      <Router>
        <div>          
          <Header />
                   
          <Switch>
            <Route exact path='/' component={ProductsPage} />
            <Route path='/cart' render={(props) => <Cart cart={cart} />} />
            <Route path='/products/:productId' component={ProductShow}/>           
          </Switch>
        </div>
      </Router>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    products: state.products
  };
};

//Rename fetchData to be more specific about fetch all products
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(productsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
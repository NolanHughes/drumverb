import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import ProductIndexDisplay from '../components/ProductIndexDisplay';
import Intro from '../components/Intro'

class ProductsPage extends React.Component {  
  render() {
    const { products } = this.props

    return (
      <div>
        <Intro />      
        <div className='ui container' id="switch-div">
          <Switch>
            <Route 
              path='/' 
              render={
                (props) => <ProductIndexDisplay 
                products={products} />
              } 
            />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  };
};


export default connect(mapStateToProps)(ProductsPage);
import React from 'react';
import ProductIndexDisplay from '../components/ProductIndexDisplay';

import { Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

class ProductsPage extends React.Component {  
  render() {
    const { products } = this.props

    return (       
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  };
};


export default connect(mapStateToProps)(ProductsPage);
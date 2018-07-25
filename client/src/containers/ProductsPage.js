import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import ProductIndexDisplay from '../components/ProductIndexDisplay';
import Intro from '../components/Intro'

class ProductsPage extends React.Component {  
  constructor() {
    super()

    this.state = {
      sortValue: 'select'
    }
  }

  change = (event) => {
    debugger
    this.setState({sortValue: event.target.value})
  }

  render() {
    const { products } = this.props

    return (
      <div>
        <Intro />      

        <div className='ui container' id="switch-div">    
          {/*Make sure it displays sorted products count and not all */}
          <div className="search-overview">
            <div className="search-overview_primary">
              <h2 className="product-count">{products.length} listings</h2>     
            </div> 
            <div className="search-overview_secondary ui grid">
              <div className="twelve wide column" id="filtered-by">
                Filtered by:
              </div>
              <div className="four wide column" id="sort-dropdown">
                {/*Map value to props. Make change function a prop and set state in Redux*/}
                <select name="sort" id="sort" onChange={this.change} value={this.state.sortValue}>
                  <option value="published_at|desc">Most Recent First</option>
                  <option value="price|asc">Price Low to High</option>
                  <option value="price|desc">Price High to Low</option>
                </select>
              </div>   
            </div> 
          </div>

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
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import ProductIndexDisplay from '../components/ProductIndexDisplay';
import SearchOverview from '../components/SearchOverview';
import Intro from '../components/Intro'

class ProductsPage extends React.Component {  
  constructor() {
    super()

    this.state = {
      sortValue: 'published_at|desc'
    }
  }

  change = (event) => {
    this.setState({sortValue: event.target.value})
  }

  render() {
    const { products } = this.props

    function dynamicSort(property) {
      var sortOrder = 1;

      if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
      }

      return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
      }
    }

    if (this.state.sortValue === "published_at|desc") {
        products.sort(dynamicSort("created_at"))
    } else if (this.state.sortValue === "price|asc") {
        products.sort(dynamicSort("price"))
    } else if (this.state.sortValue === "price|desc") {
        products.sort(dynamicSort("-price"))
    }

    return (
      <div>
        <Intro />      
        <div className='ui container' id="switch-div">  
          <SearchOverview change={this.change} sortValue={this.state.sortValue}/>
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
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import DisplayIndexProducts from '../components/DisplayIndexProducts';
import SearchOverview from '../components/SearchOverview';
import Intro from '../components/Intro'

class ProductsPage extends React.Component { 
  render() {
    const { products, sortValue, match } = this.props
    {/*Maybe move dynamicSort and if/else statement?*/}
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

    if (sortValue === "published_at|desc") {
        products.sort(dynamicSort("-created_at"))
    } else if (sortValue === "price|asc") {
        products.sort(dynamicSort("price"))
    } else if (sortValue === "price|desc") {
        products.sort(dynamicSort("-price"))
    }

    return (
      <div>
        <Intro />      
        <div className='ui container switch-div' id="switch-div">  
          <SearchOverview />
          <DisplayIndexProducts products={products} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    sortValue: state.sortValue
  };
};


export default connect(mapStateToProps)(ProductsPage);
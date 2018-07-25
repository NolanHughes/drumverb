import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import SearchOverview from '../components/SearchOverview';
import Intro from '../components/Intro'
import DisplayFilteredProducts from './DisplayFilteredProducts'
 
const FilteredProductsPage = ({ products, sortValue }) => {

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
        <DisplayFilteredProducts products={products} />
      </div>
    </div> 
  );
}
 
const mapStateToProps = (state, ownProps) => {

  const products = state.products.filter(product => 
    product.title.toLowerCase().includes(ownProps.match.params.searchValue.toLowerCase()) ||
    product.category.toLowerCase().includes(ownProps.match.params.searchValue.toLowerCase()) ||
    product.brand.toLowerCase().includes(ownProps.match.params.searchValue.toLowerCase()) ||
    product.model.toLowerCase().includes(ownProps.match.params.searchValue.toLowerCase()) ||
    product.description.toLowerCase().includes(ownProps.match.params.searchValue.toLowerCase())
  )

  if (products) {
    return { 
      products,
      sortValue: state.sortValue
    }
  } else {
    return { products: {} }
  }
}
 
export default connect(mapStateToProps)(FilteredProductsPage);
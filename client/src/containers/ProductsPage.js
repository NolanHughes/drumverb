import React from 'react';
import { connect } from 'react-redux';

import DisplayProducts from '../components/DisplayProducts';
import SearchOverview from '../components/SearchOverview';
import Intro from '../components/Intro'
import SidebarNav from '../components/SidebarNav'

class ProductsPage extends React.Component { 
  render() {
    const { products, sortValue } = this.props

    sortProducts(products, sortValue)

    return (
      <div>
        <Intro />    
        <div>
          <SidebarNav products={products}/>
          <div className='display-div'>              
            <SearchOverview products={products}/>
            <DisplayProducts products={products} />
          </div>
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

//Change to case statement
function sortProducts(products, sortValue) {
  if (sortValue === "published_at|desc") {
      products.sort(dynamicSort("-created_at"))
  } else if (sortValue === "price|asc") {
      products.sort(dynamicSort("price"))
  } else if (sortValue === "price|desc") {
      products.sort(dynamicSort("-price"))
  } 
}

function dynamicSort(property) {
  var sortOrder = 1;

  if(property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }

  return function (a,b) {
    let result
    
      if(property.includes("price")) {
        result = (a.price + a.shipping_price < b.price + b.shipping_price) ? -1 : (a.price + a.shipping_price > b.price + b.shipping_price) ? 1 : 0; 
      } else {
        result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      }

    return result * sortOrder;
  }
}

export default connect(mapStateToProps)(ProductsPage);
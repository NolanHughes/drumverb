import React from 'react';
import { connect } from 'react-redux';

import SearchOverview from '../components/SearchOverview';
import Intro from '../components/Intro'
import DisplaySearchedProducts from '../components/DisplaySearchedProducts'
import SidebarNav from '../components/SidebarNav'
// import { setFilteredProducts } from '../actions/index'
 
class SearchedProductsPage extends React.Component {
  // componentDidMount() {
  //   this.props.setFilteredProducts(this.props.products);
  // }

  render(){
    const { searchedProducts, sortValue, products } = this.props

    sortProducts(searchedProducts, sortValue)

    return (
      <div>
        <Intro />
        <div>
          <SidebarNav products={products}/>      
          <div className='display-div'>  
            <SearchOverview products={searchedProducts}/>
            <DisplaySearchedProducts products={searchedProducts} />
          </div>
        </div>
      </div> 
    );
  }
}
 
const mapStateToProps = (state, ownProps) => {
  const searchedProducts = filterProducts(state.products, ownProps.match.params.searchValue)

  if (searchedProducts) {
    return { 
      products: state.products,
      searchedProducts,
      sortValue: state.sortValue
    }
  } else {
    return { products: {} }
  }
}

function filterProducts(products, searchValue) {
  return products.filter(product => 
    product.title.toLowerCase().includes(searchValue.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchValue.toLowerCase()) ||
    product.model.toLowerCase().includes(searchValue.toLowerCase()) ||
    product.description.toLowerCase().includes(searchValue.toLowerCase())
  )
}

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
    var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    return result * sortOrder;
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setFilteredProducts: (products) => dispatch(setFilteredProducts(products))
//   }
// }

//Add mapDispatchToProps here when you uncomment FilteredProducts 
export default connect(mapStateToProps)(SearchedProductsPage);
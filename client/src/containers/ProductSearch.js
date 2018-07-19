import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { clearQueriedProducts, clearSearchValue, queriedProductsFetchData } from '../actions/products';
import QueriedProducts from '../components/QueriedProducts'
import '../css/ProductSearch.css'

class ProductSearch extends React.Component {
  //***use value to trigger queriedProductsFetchData() on search bar when it is set up for categories/tags***
  searchButton = (e) => {
    e.preventDefault()
    const value = e.target.firstChild.value
    alert(`Your input is ${value}`)
  }

  render() {   
    const { 
      queriedProducts, 
      clearQueriedProducts, 
      queryProducts, 
      searchValue,
      clearSearchValue } = this.props

    return (
      <div id='product-search' className="nav-element nine wide column">
        <form onSubmit={this.searchButton}>
          <input
            id='product-input'
            type='text'
            placeholder='Shop for new & used drums...'//Change to products upon expanding
            value={searchValue}
            onChange={queryProducts}
          />
          <button id="search-button"><i className="search icon"></i></button>
        </form>     
        <Link to='/products' id="products-link">Products</Link>
        <QueriedProducts 
          queriedProducts={queriedProducts}
          clearQueriedProducts={clearQueriedProducts} 
          clearSearchValue={clearSearchValue}
        />
      </div>     
    )
  }
}

const mapStateToProps = (state) => {
  return {
    queriedProducts: state.queriedProducts,
    searchValue: state.searchValue
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearQueriedProducts: () => dispatch(clearQueriedProducts()),
    clearSearchValue: () => dispatch(clearSearchValue()),
    queryProducts: (query) => dispatch(queriedProductsFetchData(query))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductSearch);
import React from 'react';
import SearchedProducts from '../components/SearchedProducts'
import { connect } from 'react-redux';
import { clearQueriedProducts } from '../actions/products';

class ProductSearch extends React.Component {
  //***use value to trigger queriedProductsFetchData() on search bar is set up for categories/tags***
  searchButton = (e) => {
    e.preventDefault()
    const value = e.target.firstChild.value
    alert(`Your input is ${value}`)
  }

  render() {   
    const { 
      queriedProducts, 
      clearQueriedProducts, 
      searchChange, 
      searchValue,
      clearSearchValue } = this.props
      
    return (
      <div>
      <SearchedProducts 
        queriedProducts={queriedProducts}
        searchChange={searchChange} 
        clearQueriedProducts={clearQueriedProducts} 
        searchValue={searchValue}
        clearSearchValue={clearSearchValue}
        searchButton={this.searchButton}
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
    clearQueriedProducts: () => dispatch(clearQueriedProducts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductSearch);
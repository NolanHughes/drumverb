import React from 'react';
import QueriedProducts from '../components/QueriedProducts'
import { connect } from 'react-redux';
import { clearQueriedProducts, clearSearchValue, queriedProductsFetchData } from '../actions/products';

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
      <QueriedProducts 
        queriedProducts={queriedProducts}
        queryProducts={queryProducts} 
        clearQueriedProducts={clearQueriedProducts} 
        searchValue={searchValue}
        clearSearchValue={clearSearchValue}
        searchButton={this.searchButton}
      />
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
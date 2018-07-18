import React from 'react';
import SearchedProducts from '../components/SearchedProducts'

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
      searchCancel, 
      searchChange, 
      searchValue,
      clearSearchValue } = this.props

    return (
      <div>
      <SearchedProducts 
        queriedProducts={queriedProducts}
        searchChange={searchChange} 
        searchCancel={searchCancel} 
        searchValue={searchValue}
        clearSearchValue={clearSearchValue}
        searchButton={this.searchButton}
      />
      </div>
    )
  }
}

export default ProductSearch;

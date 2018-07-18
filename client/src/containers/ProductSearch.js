import React from 'react';
import SearchedProducts from '../components/SearchedProducts'

class ProductSearch extends React.Component {
  //***Make this actually work***
  // searchButton = (e) => {
  //   debugger
  //   e.preventDefault()
  //   const value = document.getElementById("product-input").value
  //   alert(`Your input is ${value}`)
  // }

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
        // searchButton={this.searchButton}
      />
      </div>
    )
  }
}

export default ProductSearch;

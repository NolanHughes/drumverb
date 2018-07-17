import React from 'react';
import Client from '../Client';
import SearchedProducts from '../components/SearchedProducts'


const MATCHING_ITEM_LIMIT = 5;

class ProductSearch extends React.Component {
  constructor() {
    super()

    this.state = {
      searchValue: '',
      queriedProducts: []
    }
  }
  searchChange = (e) => {
    const value = e.target.value;
    this.setState({
      searchValue: value,
    });

    Client.search(value, (products) => {
      this.setState({
        queriedProducts: products.slice(0, MATCHING_ITEM_LIMIT),//Change to top 5 instead of first 5 and make categories or whatever.
      });
    });
  };

  searchCancel = () => {
    this.setState({
      products: [],
      searchValue: ''
    });
  };

  searchButton = (e) => {
    e.preventDefault()
    const value = document.getElementById("product-input").value
    alert(`Your input is ${value}`)
  }

  render() {   
    const { products, searchValue } = this.props;
    const { queriedProducts } = this.state

    return (
      <div>
      <SearchedProducts 
        products={queriedProducts} 
        searchValue={searchValue} 
        searchChange={this.searchChange} 
        searchCancel={this.searchCancel} 
        displayProduct={this.props.displayProduct}
        searchButton={this.searchButton}
      />
      </div>
    )
  }
}

export default ProductSearch;

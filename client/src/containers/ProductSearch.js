//This should all be in app
import React from 'react';
import Client from '../Client';
import Products from '../components/Products'


const MATCHING_ITEM_LIMIT = 5;

class ProductSearch extends React.Component {
  // constructor() {
  //   super()

  //   this.state = {
  //     searchValue: ''
  //   }
  // }
  searchChange = (e) => {
    const value = e.target.value;
    this.setState({
      searchValue: value,
    });

    Client.search(value, (products) => {
      this.setState({
        products: products.slice(0, MATCHING_ITEM_LIMIT),//Change to top 5 instead of first 5
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

    return (
      <div>
      <Products 
        products={products} 
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
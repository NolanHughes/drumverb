import React from 'react';
import Client from '../Client';
import Products from '../components/Products'

const MATCHING_ITEM_LIMIT = 5;

class ProductSearch extends React.Component {
  state = {
    products: [],
    searchValue: '',
  };

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


  helloThere = () => {
    alert("Hello There")
  }

  render() {   
    const { showRemoveIcon, products, searchValue } = this.state;
    
    return (
      <Products 
        products={products} 
        searchValue={searchValue} 
        searchChange={this.searchChange} 
        searchCancel={this.searchCancel} 
        displayProduct={this.props.displayProduct}
        helloThere={this.helloThere}
      />
    );
  }
}

export default ProductSearch;

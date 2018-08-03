import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

import { clearQueriedProducts, clearSearchValue, queriedProductsFetchData } from '../actions/index';
import QueriedProducts from '../components/QueriedProducts'
import '../css/ProductSearch.css'

class ProductSearch extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  searchButton = (e) => {
    e.preventDefault()

    this.props.history.push(`/searched-products/${this.props.searchValue}`);
    this.props.clearQueriedProducts()
    this.props.clearSearchValue()
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
        <form onSubmit={this.searchButton.bind(this)}>
          <input
            id='product-input'
            type='text'
            placeholder='Shop for new & used drums...'//Change to products upon expanding
            value={searchValue}
            onChange={queryProducts}
          />
          <button id="search-button"><i className="search icon"></i></button>
        </form>     
        <Link to='/' id="products-link">Products</Link>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductSearch));
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

import { clearQueriedProducts, clearSearchValue, queriedProductsFetchData } from '../actions/index';
import QueriedProducts from '../components/QueriedProducts'
import { changeFilteredBy } from '../actions/index';
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
    document.getElementById("queried-products-div").style.opacity = 0
    this.props.changeFilteredBy(this.props.searchValue)
  }

  showQueriedProducts = () => {
    document.getElementById("queried-products-div").style.opacity = 1
  }

  hideQueriedProducts = () => {
    document.getElementById("queried-products-div").style.opacity = 0
  }

  render() {   
    const { 
      queriedProducts, 
      clearQueriedProducts, 
      queryProducts, 
      searchValue,
      clearSearchValue, 
      changeFilteredBy } = this.props

    return (
      <div id='product-search' className="nav-element nine wide column">
        <form 
          onSubmit={this.searchButton.bind(this)} 
          onFocus={() => this.showQueriedProducts()} 
          onBlur={() => this.hideQueriedProducts()}
        >
          <input
            id='product-input'
            type='text'
            placeholder='Shop for new & used drums...'//Change to products upon expanding
            value={searchValue}
            onChange={queryProducts}
          />
          <button id="search-button"><i className="search icon"></i></button>
        </form>     

        <QueriedProducts 
          queriedProducts={queriedProducts}
          clearQueriedProducts={clearQueriedProducts} 
          clearSearchValue={clearSearchValue}
          changeFilteredBy={changeFilteredBy}
        />

        <Link to='/' id="products-link" onClick={() => changeFilteredBy('Drums and Percussion')}>Products</Link>
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
    queryProducts: (query) => dispatch(queriedProductsFetchData(query)),
    changeFilteredBy: (categoryName) => dispatch(changeFilteredBy(categoryName))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductSearch));
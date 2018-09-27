import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

import { clearQueriedProducts, clearSearchValue, setSearchValue } from '../actions/index';
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

  render() {   
    const { 
      queriedProducts, 
      clearQueriedProducts, 
      setSearchValue, 
      searchValue,
      clearSearchValue, 
      changeFilteredBy } = this.props

    return (
      <div id='product-search' className="nav-element nine wide column">
        <form onSubmit={this.searchButton.bind(this)}>
          <input
            id='product-input'
            type='text' 
            placeholder='Shop for new & used drums...'
            value={searchValue}
            onChange={setSearchValue}
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

const mapStateToProps = (state, ownProps) => {
  const queriedProducts = filterProducts(state.products, state.searchValue)

  if (queriedProducts) {
    return { 
      queriedProducts: queriedProducts,
      searchValue: state.searchValue
    }
  } else {
    return { 
      queriedProducts: state.queriedProducts,
      searchValue: state.searchValue
    }
  }
};

function filterProducts(products, searchValue) {
  return products.filter(product => 
    product.title.toLowerCase().includes(searchValue.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchValue.toLowerCase()) ||
    product.model.toLowerCase().includes(searchValue.toLowerCase()) ||
    product.description.toLowerCase().includes(searchValue.toLowerCase())
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearQueriedProducts: () => dispatch(clearQueriedProducts()),
    clearSearchValue: () => dispatch(clearSearchValue()),
    setSearchValue: (query) => dispatch(setSearchValue(query)),
    changeFilteredBy: (categoryName) => dispatch(changeFilteredBy(categoryName))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductSearch));
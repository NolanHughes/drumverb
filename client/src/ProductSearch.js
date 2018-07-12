import React from 'react';
import Client from './Client';

const MATCHING_ITEM_LIMIT = 5;

class ProductSearch extends React.Component {
  state = {
    products: [],
    showRemoveIcon: false,
    searchValue: '',
  };

  handleSearchChange = (e) => {
    const value = e.target.value;
    this.setState({
      searchValue: value,
    });

    if (value === '') {
      this.setState({
        products: [],
        showRemoveIcon: false,
      });
    } else {
      this.setState({
        showRemoveIcon: true,
      });

      Client.search(value, (products) => {
        this.setState({
          products: products.slice(0, MATCHING_ITEM_LIMIT),//Change to top 5 instead of first 5
        });
      });
    }
  };

  handleSearchCancel = () => {
    this.setState({
      products: [],
      showRemoveIcon: false,
      searchValue: '',
    });
  };

  render() {
    const { showRemoveIcon, products } = this.state;
    const removeIconStyle = showRemoveIcon ? {} : { visibility: 'hidden' };

    const productRows = products.map((product, idx) => (
      <tr key={idx} onClick={() => this.props.onProductClick(product)}>
        <td>{product.title}</td>
      </tr>
    ));

    return (
      <div id='product-search'>
        <table className='ui selectable structured large table'>
          <thead>
            <tr>
              <th colSpan='5'>
                <div className='ui fluid search'>
                  <div className='ui icon input'>
                    <input
                      className='prompt'
                      type='text'
                      placeholder='Search drums...'//Change to product upon expanding
                      value={this.state.searchValue}
                      onChange={this.handleSearchChange}
                    />
                    <i className='search icon' />
                  </div>
                  <i
                    className='remove icon'
                    onClick={this.handleSearchCancel}
                    style={removeIconStyle}
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {productRows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductSearch;

import React from 'react'
import { connect } from 'react-redux';

import { addNewProduct } from '../actions/index';//***

import '../css/NewProduct.css'

class SellProduct extends React.Component {
  render() {
    const { addNewProduct } = this.props
    
    return (

      <div id="new-product" className="ui two column centered grid">
        <div className="column">
          <h1>Sell on Drumverb. No listing fees. Reach millions of musicians.</h1>
        </div>
        <div className="two column centered row">
          <div className="column listing-editor">
            <div className="listing-header">
              <h3>What are you selling?</h3>
            </div>
            <form id="new-product-form">
              <div className='ui grid'>
                <div className="six wide column">
                  <label>Brand*</label>
                  <input ref="brand" />
                  <p>e.g. Tama</p>
                </div>
                <div className="ten wide column">
                  <label>Model*</label>
                  <input ref="model" />
                  <p>e.g. Starclassic Performer B/B Lacquer 5-piece</p>
                </div>
              </div>

              <div className='ui grid' id="condition-row">
                <div className="five wide column">
                  <label>Condition*</label>
                  <select id="product-condition">
                    <option value="">Select Condition</option>
                    <option value=""></option>
                    <option value="brand-new">Brand New</option>
                    <option value="mint">Mint</option>
                    <option value="excellent">Excellent</option>
                    <option value="very-good">Very Good</option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                    <option value="poor">Poor</option>
                    <option value="non-functioning">Non Functioning</option>
                  </select>
                </div>
                <div className="five wide column">
                  <label>Year</label>
                  <input ref="year" />
                </div>
                <div className="five wide column">
                  <label>Finish</label>
                  <input ref="finish" />
                </div>
              </div>

              <div className="ui grid">
                <div className="column">
                  <label>Listing Title*</label>
                  <input ref="title" />
                  <p>Feel free to modify this</p>
                </div>
              </div>

              <div className="ui grid">
                <div className="five wide column">
                  <span>$</span>
                  <input id="product_price" />
                  <span>USD</span>
                </div>
                <div className="ten wide column">
                  <label>Where was it made?</label>
                  <select id="country-select">
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="GB">United Kingdom</option>
                    <option value="AU">Australia</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
              </div>
              

            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewProduct: (product) => dispatch(addNewProduct(product))
  };
};

export default connect(null, mapDispatchToProps)(SellProduct);

              // <input ref="price" placeholder="Enter a price" />
              // <input ref="image_url" placeholder="Enter an image url" />
              // <button onClick={() => addNewProduct(this)}>Submit</button>
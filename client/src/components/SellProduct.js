import React from 'react'
import { connect } from 'react-redux';

import { addNewProduct } from '../actions/index';//Add to this when implementing filteredProducts***

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
            <div id="new-product-form">
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
                  <select ref="condition" id="product-condition">
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
                <div className="six wide column">
                  <span>$</span>
                  <input ref="price" id="product_price" />
                  <span>USD</span>
                </div>
                <div className="ten wide column">
                  <label>Where was it made?</label>
                  <select ref="made_in" id="country-select">
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="GB">United Kingdom</option>
                    <option value="AU">Australia</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
              </div>

              <div className="ui grid">
                <div className="column">
                  <label>Category*</label>
                  <select ref="category" id="category-select">
                    <option value="">Find Category</option>
                    <option value="87">Drums and Percussion &gt; Acoustic Drums &gt; Bass Drum</option>
                    <option value="81">Drums and Percussion &gt; Acoustic Drums &gt; Full Acoustic Kits</option>
                    <option value="79">Drums and Percussion &gt; Acoustic Drums &gt; Snare</option>
                    <option value="80">Drums and Percussion &gt; Acoustic Drums &gt; Tom</option>
                    <option value="99">Drums and Percussion &gt; Auxiliary Percussion</option>
                    <option value="397">Drums and Percussion &gt; Concert Percussion &gt; Concert Bass Drums</option>
                    <option value="401">Drums and Percussion &gt; Concert Percussion &gt; Concert Cymbals</option>
                    <option value="398">Drums and Percussion &gt; Concert Percussion &gt; Concert Snare Drums</option>
                    <option value="399">Drums and Percussion &gt; Concert Percussion &gt; Concert Toms</option>
                    <option value="402">Drums and Percussion &gt; Concert Percussion &gt; Gongs</option>
                    <option value="400">Drums and Percussion &gt; Concert Percussion &gt; Timpani</option>
                    <option value="82">Drums and Percussion &gt; Cymbals &gt; Crash</option>
                    <option value="237">Drums and Percussion &gt; Cymbals &gt; Cymbal Packs</option>
                    <option value="84">Drums and Percussion &gt; Cymbals &gt; Hi-Hats</option>
                    <option value="140">Drums and Percussion &gt; Cymbals &gt; Other (Splash, China, etc)</option>
                    <option value="83">Drums and Percussion &gt; Cymbals &gt; Ride</option>
                    <option value="94">Drums and Percussion &gt; Drum Machines and Samplers</option>
                    <option value="95">Drums and Percussion &gt; Electronic Drums &gt; Full Electronic Kits</option>
                    <option value="96">Drums and Percussion &gt; Electronic Drums &gt; Modules</option>
                    <option value="200">Drums and Percussion &gt; Hand Drums &gt; Cajons</option>
                    <option value="198">Drums and Percussion &gt; Hand Drums &gt; Congas and Bongos</option>
                    <option value="199">Drums and Percussion &gt; Hand Drums &gt; Djembes</option>
                    <option value="223">Drums and Percussion &gt; Hand Drums &gt; Shakers</option>
                    <option value="411">Drums and Percussion &gt; Mallet Percussion &gt; Bells and Glockenspiels</option>
                    <option value="409">Drums and Percussion &gt; Mallet Percussion &gt; Marimbas</option>
                    <option value="412">Drums and Percussion &gt; Mallet Percussion &gt; Vibraphones</option>
                    <option value="410">Drums and Percussion &gt; Mallet Percussion &gt; Xylophones</option>
                    <option value="404">Drums and Percussion &gt; Marching Percussion &gt; Marching Bass Drums</option>
                    <option value="407">Drums and Percussion &gt; Marching Percussion &gt; Marching Cymbals</option>
                    <option value="405">Drums and Percussion &gt; Marching Percussion &gt; Marching Snare Drums</option>
                    <option value="406">Drums and Percussion &gt; Marching Percussion &gt; Marching Toms and Tenors</option>
                    <option value="373">Drums and Percussion &gt; Pad Controllers</option>
                    <option value="92">Drums and Percussion &gt; Parts and Accessories &gt; Cases and Bags</option>
                    <option value="194">Drums and Percussion &gt; Parts and Accessories &gt; Drum Keys and Tuners</option>
                    <option value="253">Drums and Percussion &gt; Parts and Accessories &gt; Drum Parts</option>
                    <option value="224">Drums and Percussion &gt; Parts and Accessories &gt; Drum Sticks and Mallets</option>
                    <option value="226">Drums and Percussion &gt; Parts and Accessories &gt; Heads</option>
                    <option value="89">Drums and Percussion &gt; Parts and Accessories &gt; Mounts</option>
                    <option value="90">Drums and Percussion &gt; Parts and Accessories &gt; Pedals</option>
                    <option value="88">Drums and Percussion &gt; Parts and Accessories &gt; Stands</option>
                    <option value="91">Drums and Percussion &gt; Parts and Accessories &gt; Thrones</option>
                    <option value="413">Drums and Percussion &gt; Practice Pads</option>
                  </select>
                </div>
              </div>

              <div className="ui grid">
                <div className="column">
                  <label>Description</label>
                  <textarea ref="description" id="description-text-area"></textarea>
                </div>
              </div>
              
              {/*<input ref="image" placeholder="Enter an image url" />Last thing to modify for this page*/}
                <div class="field">
                  <label>Image</label>
                  <input ref="image" type="file" />
                </div>

              <button onClick={() => addNewProduct(this)}>Save Listing</button>
            </div>
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


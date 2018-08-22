import React from 'react'

import '../css/NewProduct.css'

const SellProductInfo = ({product, handleAttributeChange, productInfoError}) => {
  return(
    <div className="column listing-editor">
      <div className="listing-header">
        <h3>What are you selling?</h3>
      </div>
      <div id="new-product-form">
        <div className='ui grid'>
          <div className="six wide column">
            <label>Brand*</label>
            <input
              type="text"
              onChange={e => handleAttributeChange(e)}
              value={product.brand}
              className="form-control"
              name="brand"
            />
            <div id="error-message">
              {productInfoError("brand")}
            </div>
            <p className="sell-product-under-text">e.g. Tama</p>
          </div>

          <div className="ten wide column">
             <label>Model*</label>
             <input
               type="text"
               onChange={e => handleAttributeChange(e)}
               value={product.model}
               className="form-control"
               name="model"
             />
             <div id="error-message">
               {productInfoError("model")}
             </div>
             <p className="sell-product-under-text">e.g. Starclassic Performer B/B Lacquer 5-piece</p>
           </div>   
        </div>

        <div className='ui grid' id="condition-row">
          <div className="five wide column">
            <label>Condition*</label>
            <select onChange={e => handleAttributeChange(e)} id="product-condition" name="condition">
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
            <div id="error-message">
              {productInfoError("condition")}
            </div>
          </div>
          <div className="five wide column">
            <label>Year</label>
            <input
              type="text"
              onChange={e => handleAttributeChange(e)}
              value={product.year}
              className="form-control"
              name="year"
            />
          </div>
          <div className="five wide column">
            <label>Finish/Color</label>
            <input
              type="text"
              onChange={e => handleAttributeChange(e)}
              value={product.finish}
              className="form-control"
              name="finish"
            />
          </div>
        </div>

        <div className="ui grid">
          <div className="column">
            <label>Listing Title*</label>
            <input
              type="text"
              onChange={e => handleAttributeChange(e)}
              value={product.title}
              className="form-control"
              name="title"
            />
            <div id="error-message">
              {productInfoError("title")}
            </div>
            <p className="sell-product-under-text">Feel free to modify this</p>
          </div>
        </div>

        <div className="ui grid">
          <div className="six wide column" id="product-price-div">
            <label>Price*</label> 
            <span>$</span>
            <input
              type="text"
              onChange={e => handleAttributeChange(e)}
              value={product.price}
              id="product_price"
              className="form-control"
              name="price"
            />
            <span className="usd-span">USD</span>
            <div id="error-message">
              {productInfoError("price")}
            </div>
          </div>
          <div className="ten wide column">
            <label>Where was it made?</label>
            <select onChange={e => handleAttributeChange(e)} id="country-select" name="made_in">
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
            <select onChange={e => handleAttributeChange(e)} id="category-select" name="category">
              <option value="">Find Category</option>
              <option value="1">Drums and Percussion &gt; Bass Drum</option>
              <option value="2">Drums and Percussion &gt; Full Acoustic Kits</option>
              <option value="3">Drums and Percussion &gt; Snare</option>
              <option value="4">Drums and Percussion &gt; Tom</option>
              <option value="5">Drums and Percussion &gt; Crash</option>
              <option value="6">Drums and Percussion &gt; Cymbal Packs</option>
              <option value="7">Drums and Percussion &gt; Hi-Hats</option>
              <option value="8">Drums and Percussion &gt; Other (Splash, China, etc)</option>
              <option value="9">Drums and Percussion &gt; Ride</option>
            </select>
            <div id="error-message">
              {productInfoError("category")}
            </div>              
          </div>
        </div>           
      </div>
    </div>
  )
}

export default SellProductInfo
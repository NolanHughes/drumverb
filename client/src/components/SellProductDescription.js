import React from 'react'

import '../css/NewProduct.css'

const SellProductDescription = ({description, descriptionChange}) => {
	return(
  <div className="ui grid" id="sell-product-description-div">
	    <div className="listing-header">
	      <h3>How would you describe it?*</h3>
	    </div>
	    <div id="description-content-div">
	      <label>Describe your item</label>
	      <textarea
	        type="text"
	        onChange={descriptionChange}
	        value={description}
	        className="form-control"
	        id="description-text-area"
	        name="description"
	      />
	    </div>
	  </div>
	)
}

export default SellProductDescription
import React from 'react'

import '../css/NewProduct.css'

const SellProductImages = ({imageFiles, uploadImagesButton, imagesError}) => {
  return(
    <div className="form-group sell-product-images-div">
      <div className="listing-header">
        <h3>What does it look like?*</h3>
      </div>
      <div className="images-upload-content-div">
        <h4>Click below to upload photos of your gear</h4>
        <div>
          {imageFiles}
          {uploadImagesButton}      
        </div> 
        <div id="error-message">
          {imagesError}
        </div>       
      </div>
    </div>
  )
}

export default SellProductImages
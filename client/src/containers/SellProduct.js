import React from 'react'
import { connect } from 'react-redux';

import { addNewProduct } from '../actions/index';

import SellProductDescription from '../components/SellProductDescription'
import SellProductSidebar from '../components/SellProductSidebar'
import SellProductImages from '../components/SellImages' //Why won't this let me rename it to SellProductImages?
import SellProductInfo from '../components/SellProductInfo'
import '../css/NewProduct.css'

class SellProduct extends React.Component {
  state = {
    selectedProductImageFiles: [],
    isSubmittingForm: false,
    product: {
      id: this.props.match.params.id,
      brand: '',
      model: '',
      condition: '',
      year: '',
      finish: '',
      title: '',
      price: '',
      made_in: 'US',
      category: '',
      description: ''
    }
  };

  render() {
    return (
      <div id="new-product" className="ui grid container">
        <div className="sixteen wide column">
          <h1>Sell on Drumverb. No listing fees. Reach millions of musicians.</h1>
        </div>
        <div className="eleven wide column">

          <SellProductInfo 
             product={this.state.product}
             productInfoError={(e) => this.renderProductError(e)}
             handleAttributeChange={(e) => this.handleProductAttributeChange(e)}
           />       

          <SellProductImages 
            imageFiles={this.renderSelectedProductImageFiles()}
            uploadImagesButton={this.renderUploadImagesButton()}
            imagesError={this.renderProductError("product_images")}
          />

          <SellProductDescription 
            description={this.state.product.description} 
            descriptionChange={e => this.handleProductAttributeChange(e)}
            descriptionError={this.renderProductError("description")}
          />

          {this.renderUploadFormProgress()}

          <button
            disabled={this.state.isSubmittingForm}
            onClick={e => this.handleFormSubmit()}
            className="btn btn-primary"
            id="save-listing-button"
          >
            {this.state.isSubmittingForm ? 'Saving...' : 'Save Listing'}
          </button>

        </div>

        <SellProductSidebar />
      </div>
    );
  }

  handleProductAttributeChange(e) {
    let { product } = this.state;
    let productAttribute = e.target.name   
    product[productAttribute] = e.target.value;
    this.setState({ product: product });
  }

  renderUploadImagesButton() {
    return (
      <div id="image-upload-div">        
        <label htmlFor="product_images" className="custom-file-upload">
          <i className="plus icon"></i>
          Upload Photos
        </label>
        <input
          name="images[]"
          ref={field => (this.productImagesField = field)}
          type="file"
          disabled={this.state.isSubmittingForm}
          multiple={true}
          accept="image/*"
          id="product_images"
          onChange={e => this.handleProductImagesChange(e)}
          className="form-control"
        />
      </div>
    );
  }

  renderSelectedProductImageFiles() {
    let fileDOMs = this.state.selectedProductImageFiles.map((el, index) => {
      if (el._destroy) { 
        return null;
      }

      return (
        <li key={index}>
          <div className="photo">
            <img
              width={150}
              src={URL.createObjectURL(el)}
              style={{ alignSelf: 'center' }}
              alt={''}
            />
            <div
              className="remove"
              onClick={() => this.removeSelectedProductImageFile(el, index)}>
              <span style={{ top: 2 }} className="glyphicon glyphicon-remove" />
            </div>
          </div>
        </li>
      );
    });

    return (
      <ul className="selected-images">
        {fileDOMs}
      </ul>
    );
  }

  removeSelectedProductImageFile(image, index) {
    let { selectedProductImageFiles } = this.state;
    if (image.id) { 
      selectedProductImageFiles[index]._destroy = true;
    } else {
      selectedProductImageFiles.splice(index, 1);
    }

    this.setState({
      selectedProductImageFiles: selectedProductImageFiles
    });
  }

  handleProductImagesChange() {
    let selectedFiles = this.productImagesField.files;
    let { selectedProductImageFiles } = this.state;
    for (let i = 0; i < selectedFiles.length; i++) {
      selectedProductImageFiles.push(selectedFiles.item(i));
    } 

    this.setState(
      {
        selectedProductImageFiles: selectedProductImageFiles
      },
      () => {
        this.productImagesField.value = null;
      }
    );
  }

  renderProductError(name) {
    if (Object.keys(this.props.errors).length !== 0 && this.props.errors[name]) {
      return (
        <div className="inline-error alert alert-danger error-content">
          {this.props.errors[name][0]}{/*Iterate through all errors*/}
        </div>
      );
    } else {
      return null;
    }
  }

  handleFormSubmit() {
    this.props.addNewProduct(this.state, this.props.history);
  }

  renderUploadFormProgress() {
    if (this.state.isSubmittingForm === false) {
      return null;
    }

    return (
      <div>
        <div className="loader"></div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewProduct: (state, history) => dispatch(addNewProduct(state, history))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SellProduct);
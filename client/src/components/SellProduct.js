import React from 'react'
import { connect } from 'react-redux';

import { addNewProduct } from '../actions/index';//Add to this when implementing filteredProducts***

import SellProductDescription from './SellProductDescription'
import '../css/NewProduct.css'

class SellProduct extends React.Component {
    state = {
    selectedProductImageFiles: [],
    isSubmittingForm: false,
    errors: {},
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
      description: '',
      created_at: ''
    }
  };

  render() {
    return (
      <div id="new-product" className="ui grid container">
        <div className="sixteen wide column">
          <h1>Sell on Drumverb. No listing fees. Reach millions of musicians.</h1>
        </div>
        <div className="eleven wide column">

          {/*PRODUCT INFO*/}
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
                    onChange={e => this.handleProductAttributeChange(e)}
                    value={this.state.product.brand}
                    className="form-control"
                    name="brand"
                  />
                  <div id="error-message">
                    {this.renderProductError("brand")}
                  </div>
                  <p className="sell-product-under-text">e.g. Tama</p>
                </div>

                <div className="ten wide column">
                  <label>Model*</label>
                  <input
                    type="text"
                    onChange={e => this.handleProductAttributeChange(e)}
                    value={this.state.product.model}
                    className="form-control"
                    name="model"
                  />
                  <div id="error-message">
                    {this.renderProductError("model")}
                  </div>
                  <p className="sell-product-under-text">e.g. Starclassic Performer B/B Lacquer 5-piece</p>
                </div>   
              </div>

              <div className='ui grid' id="condition-row">
                <div className="five wide column">
                  <label>Condition*</label>
                  <select onChange={e => this.handleProductAttributeChange(e)} id="product-condition" name="condition">
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
                    {this.renderProductError("condition")}
                  </div>
                </div>
                <div className="five wide column">
                  <label>Year</label>
                  <input
                    type="text"
                    onChange={e => this.handleProductAttributeChange(e)}
                    value={this.state.product.year}
                    className="form-control"
                    name="year"
                  />
                </div>
                <div className="five wide column">
                  <label>Finish/Color</label>
                  <input
                    type="text"
                    onChange={e => this.handleProductAttributeChange(e)}
                    value={this.state.product.finish}
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
                    onChange={e => this.handleProductAttributeChange(e)}
                    value={this.state.product.title}
                    className="form-control"
                    name="title"
                  />
                  <div id="error-message">
                    {this.renderProductError("title")}
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
                    onChange={e => this.handleProductAttributeChange(e)}
                    value={this.state.product.price}
                    id="product_price"
                    className="form-control"
                    name="price"
                  />
                  <span className="usd-span">USD</span>
                  <div id="error-message">
                    {this.renderProductError("price")}
                  </div>
                </div>
                <div className="ten wide column">
                  <label>Where was it made?</label>
                  <select onChange={e => this.handleProductAttributeChange(e)} id="country-select" name="made_in">
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
                  <select onChange={e => this.handleProductAttributeChange(e)} id="category-select" name="category">
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
                    {this.renderProductError("category")}
                  </div>              
                </div>
              </div>           
            </div>
          </div>

          {/*IMAGE UPLOAD*/}
          <div className="form-group sell-product-images-div">
            <div className="listing-header">
              <h3>What does it look like?*</h3>
            </div>
            <div className="images-upload-content-div">
              <h4>Click below to upload photos of your gear</h4>
              <div>
                {this.renderSelectedProductImageFiles()}
                {this.renderUploadImagesButton()}      
              </div> 
              <div id="error-message">
                {this.renderProductError("product_images")}
              </div>       
            </div>
          </div>

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

        {/*SIDEBAR*/}
        <div className="five wide column right-side-sell-column">
          <h3>The lowest fees around</h3>
          <ul>
            <li><i className="check icon"></i>3.5% selling fee.</li>
            <li><i className="check icon"></i>2.7% + $0.25 payment processing fee. </li>
            <li><i className="check icon"></i>$0.50 min and a $350 max selling fee.</li>
          </ul>
        </div>

      </div>
    );
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
              src={el.id ? el.url : URL.createObjectURL(el)}
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

  handleProductAttributeChange(e) {
    let { product } = this.state;
    let productAttribute = e.target.name   
    product[productAttribute] = e.target.value;
    this.setState({ product: product });
  }

  renderProductError(name) {
    if (Object.keys(this.state.errors).length !== 0 && this.state.errors[name]) {
      return (
        <div className="inline-error alert alert-danger error-content">
          {this.state.errors[name][0]}{/*Iterate through all errors*/}
        </div>
      );
    } else {
      return null;
    }
  }

  buildFormData() {
    let formData = new FormData();
    
    formData.append('product[category]', this.state.product.category);
    formData.append('product[made_in]', this.state.product.made_in);
    formData.append('product[price]', this.state.product.price);
    formData.append('product[finish]', this.state.product.finish);
    formData.append('product[year]', this.state.product.year);
    formData.append('product[condition]', this.state.product.condition);
    formData.append('product[model]', this.state.product.model);
    formData.append('product[brand]', this.state.product.brand);
    formData.append('product[title]', this.state.product.title);
    formData.append('product[description]', this.state.product.description);

    let { selectedProductImageFiles } = this.state;
    for (let i = 0; i < selectedProductImageFiles.length; i++) {
      let file = selectedProductImageFiles[i];
      if (file.id) {
        if (file._destroy) {
          formData.append(`product[images_attributes][${i}][id]`, file.id);
          formData.append(`product[images_attributes][${i}][_destroy]`, '1');
        }
      } else {
        formData.append(
          `product[product_images_attributes][${i}][photo]`,
          file,
          file.name
        );
      }
    }
    return formData;
  }

  submitForm() {    
    fetch('http://localhost:3000/products', {
      method: "POST",
      body: this.buildFormData()
    })
    .then((response) => response.json())
    .then((product) => {
      if (product.hasOwnProperty('id')) {
        this.props.addNewProduct(product)
        this.props.history.push('/');
      } else {
        this.setState({
          isSubmittingForm: false,
          errors: product
        })
      }
    }) 

  }

  handleFormSubmit() {
    let { product } = this.state;

    this.setState({
        isSubmittingForm: true,
        product: product
      },
      () => {
        this.submitForm();
      }
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewProduct: (product) => dispatch(addNewProduct(product))
  };
};

export default connect(null, mapDispatchToProps)(SellProduct);
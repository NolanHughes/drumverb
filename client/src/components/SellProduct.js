import React from 'react'
import { connect } from 'react-redux';

import { addNewProduct } from '../actions/index';//Add to this when implementing filteredProducts***

import '../css/NewProduct.css'

class RefactorForm extends React.Component {
    state = {
    selectedProductImageFiles: [],
    submitFormProgress: 0,
    isSubmittingForm: false,
    didFormSubmissionComplete: false,
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
      created_at: '',
      error: ''
    }
  };

  render() {
    return (
      <div id="new-product" className="ui grid container">
        <div className="sixteen wide column">
          <h1>Sell on Drumverb. No listing fees. Reach millions of musicians.</h1>
        </div>
        <div className="eleven wide column">
          <div className="column listing-editor">
            <div className="listing-header">
              <h3>What are you selling?</h3>
            </div>
            <div id="new-product-form">
              
              <div id="error-message">
                {this.renderProductError()}
              </div>

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
                </div>
              </div>           
            </div>
          </div>

          <div className="form-group sell-product-images-div">
            <div className="listing-header">
              <h3>What does it look like?</h3>
            </div>
            <div className="images-upload-content-div">
              <h4>Click below to upload photos of your gear</h4>
              <div>
                {this.renderSelectedProductImageFiles()}
                {this.renderUploadImagesButton()}      
              </div>       
            </div>
          </div>

          <div className="ui grid">
            <div className="column">
              <label>Description*</label>
              <textarea
              type="text"
              onChange={e => this.handleProductAttributeChange(e)}
              value={this.state.product.description}
              className="form-control"
              id="description-text-area"
              name="description"
              />
            </div>
          </div>

          {this.renderUploadFormProgress()}

          <button
            disabled={this.state.isSubmittingForm}
            onClick={e => this.handleFormSubmit()}
            className="btn btn-primary">
            {this.state.isSubmittingForm ? 'Saving...' : 'Save Listing'}
          </button>

        </div>
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

  //THIS IS FOR WHEN I HAVE EDIT ABILITIES
  // componentWillMount() {
  //   if (this.props.match.params.id) {
  //     fetch(`http://localhost:3000/products/${this.props.match.params.id}`)
  //     .then(response => {
  //       this.setState({
  //         selectedProductImageFiles: response.data.product_image_photos,
  //         product: {
  //           id: response.data.id, 
  //           brand: response.data.brand,
  //           model: response.data.model,
  //           condition: response.data.condition,
  //           year: response.data.year,
  //           finish: response.data.finish,
  //           title: response.data.title,
  //           price: response.data.price,
  //           made_in: response.data.made_in,
  //           category: response.data.category,
  //           description: response.data.description,
  //           created_at: response.data.created_at,
  //           error: ''
  //         }
  //       });
  //     });
  //   }
  // }

  getNumberOfSelectedFiles() {
    return this.state.selectedProductImageFiles.filter(el => {
      return el._destroy !== true;
    }).length;
  }

  renderUploadImagesButton() {
    // let numberOfSelectedImages = this.getNumberOfSelectedFiles();
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

{/*        <label
        //   disabled={this.state.isSubmittingForm}
        //   className="btn btn-success"
        //   htmlFor="product_images">
        //   <span className="glyphicon glyphicon-cloud-upload" />
        //   &nbsp; &nbsp;
        //   {numberOfSelectedImages === 0
        //     ? 'Upload Files'
        //     : `${numberOfSelectedImages} file${numberOfSelectedImages !== 1
        //       ? 's'
        //       : ''} selected`}
        // </label>*/}
      </div>
    );
  }

  renderSelectedProductImageFiles() {
    let fileDOMs = this.state.selectedProductImageFiles.map((el, index) => {
      if (el._destroy) { 
        return null;
      }
      // debugger
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
      <div className="progress">
        <div
          className={
            'progress-bar progress-bar-info progress-bar-striped' +
            (this.state.submitFormProgress < 100 ? 'active' : '')
          }
          role="progressbar"
          aria-valuenow={this.state.submitFormProgress}
          areavaluemin="0"
          areavaluemax="100"
          style={{ width: this.state.submitFormProgress + '%' }}>
          {this.state.submitFormProgress}% Complete
        </div>
      </div>
    );
  }

  removeSelectedProductImageFile(image, index) {
    let { selectedProductImageFiles } = this.state;
    if (image.id) { // cover file that has been uploaded will be marked as destroy
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

  renderProductError() {
    if (this.state.product.error !== '') {
      return (
        <div className="inline-error alert alert-danger">
          {this.state.product.error}
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
    //USE THESE TWO VARIABLES IF EDIT FUNCTION IS IMPLEMENTED
    // let submitMethod = this.state.product.id ? 'patch' : 'post';
    // let url = this.state.product.id
    //   ? `/products/${this.state.product.id}.json`
    //   : '/products.json';

    fetch('http://localhost:3000/products', {
      method: "POST",
      body: this.buildFormData()
    })
    .then(response => {
      if (!response.ok) {
        let { product } = this.state;
        product.error = response.statusText.concat('. It is possible you did not fill out all of the inputs that have * by them or some other error is happening.')
        this.setState({
          isSubmittingForm: false,
          submitFormProgress: 0,
          product: product
        })
      } else {
        this.setState({
          didFormSubmissionComplete: true
        });
        this.props.history.push('/');
      }
    }) 
  }

  handleFormSubmit() {
    let { product } = this.state;
    product.error = '';
    this.setState(
      {
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

export default connect(null, mapDispatchToProps)(RefactorForm);


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
                  <p>e.g. Tama</p>
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
                  <p>e.g. Starclassic Performer B/B Lacquer 5-piece</p>
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
                  <label>Finish</label>
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
                  <p>Feel free to modify this</p>
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
                  <span>USD</span>
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
                    <option value="1">Find Category</option>
                    <option value="2">Drums and Percussion &gt; Acoustic Drums &gt; Bass Drum</option>
                    <option value="3">Drums and Percussion &gt; Acoustic Drums &gt; Full Acoustic Kits</option>
                    <option value="4">Drums and Percussion &gt; Acoustic Drums &gt; Snare</option>
                    <option value="5">Drums and Percussion &gt; Acoustic Drums &gt; Tom</option>
                    <option value="6">Drums and Percussion &gt; Auxiliary Percussion</option>
                    <option value="7">Drums and Percussion &gt; Concert Percussion &gt; Concert Bass Drums</option>
                    <option value="8">Drums and Percussion &gt; Concert Percussion &gt; Concert Cymbals</option>
                    <option value="9">Drums and Percussion &gt; Concert Percussion &gt; Concert Snare Drums</option>
                    <option value="10">Drums and Percussion &gt; Concert Percussion &gt; Concert Toms</option>
                    <option value="11">Drums and Percussion &gt; Concert Percussion &gt; Gongs</option>
                    <option value="12">Drums and Percussion &gt; Concert Percussion &gt; Timpani</option>
                    <option value="13">Drums and Percussion &gt; Cymbals &gt; Crash</option>
                    <option value="14">Drums and Percussion &gt; Cymbals &gt; Cymbal Packs</option>
                    <option value="15">Drums and Percussion &gt; Cymbals &gt; Hi-Hats</option>
                    <option value="16">Drums and Percussion &gt; Cymbals &gt; Other (Splash, China, etc)</option>
                    <option value="17">Drums and Percussion &gt; Cymbals &gt; Ride</option>
                    <option value="18">Drums and Percussion &gt; Drum Machines and Samplers</option>
                    <option value="19">Drums and Percussion &gt; Electronic Drums &gt; Full Electronic Kits</option>
                    <option value="20">Drums and Percussion &gt; Electronic Drums &gt; Modules</option>
                    <option value="21">Drums and Percussion &gt; Hand Drums &gt; Cajons</option>
                    <option value="22">Drums and Percussion &gt; Hand Drums &gt; Congas and Bongos</option>
                    <option value="23">Drums and Percussion &gt; Hand Drums &gt; Djembes</option>
                    <option value="24">Drums and Percussion &gt; Hand Drums &gt; Shakers</option>
                    <option value="25">Drums and Percussion &gt; Mallet Percussion &gt; Bells and Glockenspiels</option>
                    <option value="26">Drums and Percussion &gt; Mallet Percussion &gt; Marimbas</option>
                    <option value="27">Drums and Percussion &gt; Mallet Percussion &gt; Vibraphones</option>
                    <option value="28">Drums and Percussion &gt; Mallet Percussion &gt; Xylophones</option>
                    <option value="29">Drums and Percussion &gt; Marching Percussion &gt; Marching Bass Drums</option>
                    <option value="30">Drums and Percussion &gt; Marching Percussion &gt; Marching Cymbals</option>
                    <option value="31">Drums and Percussion &gt; Marching Percussion &gt; Marching Snare Drums</option>
                    <option value="32">Drums and Percussion &gt; Marching Percussion &gt; Marching Toms and Tenors</option>
                    <option value="33">Drums and Percussion &gt; Pad Controllers</option>
                    <option value="34">Drums and Percussion &gt; Parts and Accessories &gt; Cases and Bags</option>
                    <option value="35">Drums and Percussion &gt; Parts and Accessories &gt; Drum Keys and Tuners</option>
                    <option value="36">Drums and Percussion &gt; Parts and Accessories &gt; Drum Parts</option>
                    <option value="37">Drums and Percussion &gt; Parts and Accessories &gt; Drum Sticks and Mallets</option>
                    <option value="38">Drums and Percussion &gt; Parts and Accessories &gt; Heads</option>
                    <option value="39">Drums and Percussion &gt; Parts and Accessories &gt; Mounts</option>
                    <option value="40">Drums and Percussion &gt; Parts and Accessories &gt; Pedals</option>
                    <option value="41">Drums and Percussion &gt; Parts and Accessories &gt; Stands</option>
                    <option value="42">Drums and Percussion &gt; Parts and Accessories &gt; Thrones</option>
                    <option value="43">Drums and Percussion &gt; Practice Pads</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Images*</label>
                {this.renderUploadImagesButton()}
                {this.renderSelectedProductImageFiles()}
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
          </div>
        </div>
      </div>
    );
  }

  //THIS IS FOR WHEN I HAVE EDIT ABILITIES
  // componentWillMount() {
  //   if (this.props.match.params.id) {
  //     axiosClient.get(`/products/${this.props.match.params.id}`).then(response => {
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
    let numberOfSelectedImages = this.getNumberOfSelectedFiles();
    return (
      <div>
        <input
          name="images[]"
          ref={field => (this.productImagesField = field)}
          type="file"
          disabled={this.state.isSubmittingForm}
          multiple={true}
          accept="image/*"
          style={{
            width: 0.1,
            height: 0.1,
            opacity: 0,
            overflow: 'hidden',
            position: 'absolute',
            zIndex: -1
          }}
          id="product_images"
          onChange={e => this.handleProductImagesChange(e)}
          className="form-control"
        />
        <label
          disabled={this.state.isSubmittingForm}
          className="btn btn-success"
          htmlFor="product_images">
          <span className="glyphicon glyphicon-cloud-upload" />
          &nbsp; &nbsp;
          {numberOfSelectedImages === 0
            ? 'Upload Files'
            : `${numberOfSelectedImages} file${numberOfSelectedImages !== 1
                ? 's'
                : ''} selected`}
        </label>
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
          <div className="file-name">
            {el.name}
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


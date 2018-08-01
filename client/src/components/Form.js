import React from 'react';
import axiosClient from '../axiosClient';
import '../css/Form.css';

class Form extends React.Component {
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
      made_in: '',
      category: '',
      description: '',
      created_at: '',
      errors: {}
    }
  };

  componentWillMount() {
    if (this.props.match.params.id) {
      axiosClient.get(`/products/${this.props.match.params.id}`).then(response => {
        this.setState({
          selectedProductImageFiles: response.data.product_image_photos,
          product: {
            id: response.data.id, 
            brand: response.data.brand,
            model: response.data.model,
            condition: response.data.condition,
            year: response.data.year,
            finish: response.data.finish,
            title: response.data.title,
            price: response.data.price,
            made_in: response.data.made_in,
            category: response.data.category,
            description: response.data.description,
            created_at: response.data.created_at,
            errors: {}
          }
        });
      });
    }
  }

  getNumberOfSelectedFiles() {
    return this.state.selectedProductImageFiles.filter(el => {
      return el._destroy !== true;
    }).length;
  }

  render() {
    return (
      <div className="ProductForm">
        <form>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              onChange={e => this.handleProductTitleChange(e)}
              value={this.state.product.title}
              className="form-control"
            />
            {this.renderProductTitleInlineError()}
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              type="text"
              onChange={e => this.handleProductDescriptionChange(e)}
              value={this.state.product.description}
              className="form-control"
            />
            {this.renderProductDescriptionInlineError()}
          </div>
          <div className="form-group">
            <label>Images</label>
            {this.renderUploadImagesButton()}
            {this.renderSelectedProductImageFiles()}
          </div>
          {this.renderUploadFormProgress()}
          <button
            disabled={this.state.isSubmittingForm}
            onClick={e => this.handleFormSubmit()}
            className="btn btn-primary">
            {this.state.isSubmittingForm ? 'Saving...' : 'Save'}
          </button>
          &nbsp;
          <button
            disabled={this.state.isSubmittingForm}
            onClick={e => this.handleCancel()}
            className="btn btn-default">
            Cancel
          </button>
        </form>
        <br />
      </div>
    );
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
          id="product_covers"
          onChange={e => this.handleProductImagesChange(e)}
          className="form-control"
        />
        <label
          disabled={this.state.isSubmittingForm}
          className="btn btn-success"
          htmlFor="product_covers">
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
      if (el._destroy) { // we use _destroy to mark the removed photo
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
    } //end for

    this.setState(
      {
        selectedProductImageFiles: selectedProductImageFiles
      },
      () => {
        this.productImagesField.value = null;
      }
    );
  }

  handleProductTitleChange(e) {
    let { product } = this.state;
    product.title = e.target.value;
    this.setState({ product: product });
  }

  handleProductDescriptionChange(e) {
    let { product } = this.state;
    product.description = e.target.value;
    this.setState({ product: product });
  }

  renderProductTitleInlineError() {
    if (this.state.product.errors.title) {
      return (
        <div className="inline-error alert alert-danger">
          {this.state.product.errors.title.join(', ')}
        </div>
      );
    } else {
      return null;
    }
  }

  renderProductDescriptionInlineError() {
    if (this.state.product.errors.description) {
      return (
        <div className="inline-error alert alert-danger">
          {this.state.product.errors.description.join(', ')}
        </div>
      );
    } else {
      return null;
    }
  }

  handleCancel() {
    this.props.history.push('/');
  }

  buildFormData() {
    let formData = new FormData();
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
    let submitMethod = this.state.product.id ? 'patch' : 'post';
    let url = this.state.product.id
      ? `/products/${this.state.product.id}.json`
      : '/products.json';

    axiosClient
      [submitMethod](url, this.buildFormData(), {
        onUploadProgress: progressEvent => {
          let percentage = progressEvent.loaded * 100.0 / progressEvent.total;
          this.setState({
            submitFormProgress: percentage
          });
        }
      })
      .then(response => {
        this.setState({
          didFormSubmissionComplete: true
        });
        this.props.history.push('/');
      })
      .catch(error => {
        let { product } = this.state;
        product.errors = error.response.data;
        this.setState({
          isSubmittingForm: false,
          submitFormProgress: 0,
          product: product
        });
      });
  }

  handleFormSubmit() {
    let { product } = this.state;
    product.errors = {};
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

export default Form;
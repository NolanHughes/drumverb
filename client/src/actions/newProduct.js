export function addNewProduct(state, history) {
	return(dispatch) => {
		fetch('https://drumverb.herokuapp.com/products', {
	    method: "POST",
	    body: buildFormData(state)
	  })
	  .then((response) => response.json())
    .then((product) => {
      if (product.hasOwnProperty('id')) {
	    	dispatch(addNewProductSuccess(product))
        dispatch(clearProductErrors())
	    	history.push('/');
      } else {
      	const errors = product
      	dispatch(addNewProductFailed(errors))
      }
    }) 
	}
}

function buildFormData(state) {
  let formData = new FormData();

  formData.append('product[category]', state.product.category);
  formData.append('product[made_in]', state.product.made_in);
  formData.append('product[price]', state.product.price);
  formData.append('product[finish]', state.product.finish);
  formData.append('product[year]', state.product.year);
  formData.append('product[condition]', state.product.condition);
  formData.append('product[model]', state.product.model);
  formData.append('product[brand]', state.product.brand);
  formData.append('product[title]', state.product.title);
  formData.append('product[description]', state.product.description);

  let { selectedProductImageFiles } = state;

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


export function addNewProductSuccess(product) {
  return {
    type: 'ADD_NEW_PRODUCT_SUCCESS',
    product
  };
}

export function clearProductErrors() {
  return {
    type: 'CLEAR_PRODUCT_ERRORS'
  };
}

export function addNewProductFailed(errors) {
	return {
		type: 'ADD_NEW_PRODUCT_FAILED',
		errors
	}
}
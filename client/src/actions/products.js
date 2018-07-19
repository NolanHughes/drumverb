//Refactor some of these into seperate files
export function productsAreLoading(bool) {
  return {
    type: 'PRODUCTS_ARE_LOADING',
    isLoading: bool
  };
}

export function productsFetchDataSuccess(products) {
  return {
 		type: 'PRODUCTS_FETCH_DATA_SUCCESS',
 		products
  };
}

export function searchValue(value) {
  return{
    type: 'SET_SEARCH_VALUE',
    value
  }
}

export function productsFetchData(url) {
  return (dispatch) => {
    dispatch(productsAreLoading(true));

    fetch(url)
    .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(productsAreLoading(false));

        return response;
    })
    .then((response) => response.json())
    .then((products) => dispatch(productsFetchDataSuccess(products)))
  };
}

export function queriedProductsFetchDataSuccess(manyProducts) {
  const MATCHING_ITEM_LIMIT = 5;//Change to top 5 instead of first 5 and make categories or whatever.
  const products = manyProducts.slice(0, MATCHING_ITEM_LIMIT)

  return {
    type: 'QUERIED_PRODUCTS_FETCH_DATA_SUCCESS',
    products
  };
}

export function queriedProductsFetchData(query) {
  const url = `http://localhost:3000/api/products?q=${query.target.value}`

  return (dispatch) => {
    dispatch(productsAreLoading(true));
    dispatch(searchValue(query.target.value))

    fetch(url)
    .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(productsAreLoading(false));

        return response;
    })
    .then((response) => response.json())
    .then((products) => dispatch(queriedProductsFetchDataSuccess(products)))
  };
}

export function clearQueriedProducts() {
  return {
    type: 'CLEAR_QUERIED_PRODUCTS'  
  };
}

export function clearSearchValue() { 
  return {
    type: 'CLEAR_SEARCH_VALUE'  
  };
}

export function addProductToCart(product) {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    product
  }
}
                
export function removeProductFromCart(index) {
  return {
    type: 'REMOVE_PRODUCT_FROM_CART',
    index
  }
}



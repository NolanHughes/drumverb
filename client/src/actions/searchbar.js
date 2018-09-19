export function queriedProductsFetchData(query) {
  const value = query.target.value
  const url = `https://drumverb.herokuapp.com/products?q=${value}`

  return (dispatch) => {
    dispatch(searchValue(query.target.value))

    fetch(url)
    .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
    })
    .then((response) => response.json())
    .then((products) => dispatch(queriedProductsFetchDataSuccess(products)))
  };
}

export function queriedProductsFetchDataSuccess(products) {
  return {
    type: 'QUERIED_PRODUCTS_FETCH_SUCCESS',
    products
  };
}

export function searchValue(value) {
  return{
    type: 'SET_SEARCH_VALUE',
    value
  }
}

export function clearSearchValue() { 
  return {
    type: 'CLEAR_SEARCH_VALUE'  
  };
}

export function clearQueriedProducts() {
  return {
    type: 'CLEAR_QUERIED_PRODUCTS'  
  };
}

export function productsIsLoading(bool) {
  return {
    type: 'PRODUCTS_IS_LOADING',//Change to are
    isLoading: bool
  };
}

export function productsFetchDataSuccess(products) {
  return {
 		type: 'PRODUCTS_FETCH_DATA_SUCCESS',
 		products
  };
}

export function productsFetchData(url) {
  return (dispatch) => {
    dispatch(productsIsLoading(true));//Change to are

    fetch(url)
    .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(productsIsLoading(false));//Change to are

        return response;
    })
    .then((response) => response.json())
    .then((products) => dispatch(productsFetchDataSuccess(products)))
  };
}

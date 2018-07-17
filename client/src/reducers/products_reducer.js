// export default (state = {products: []}, action) => {
//   switch (action.type) {
//     case 'FETCH_PRODUCTS':
//       return {products: action.payload};
//     default:
//       return state;
//   }
// };

export function productsIsLoading(state = false, action) {//Change to are
	switch (action.type) {
		case 'PRODUCTS_IS_LOADING'://Change to are
			return action.isLoading;
		default:
			return state;
	}
}
export function products(state = [], action) {
	switch (action.type) {
		case 'PRODUCTS_FETCH_DATA_SUCCESS':
			return action.products;
		default:
			return state;
	}
}

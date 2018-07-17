export function productsAreLoading(state = false, action) {
	switch (action.type) {
		case 'PRODUCTS_ARE_LOADING':
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

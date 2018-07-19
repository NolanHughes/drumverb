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

export function queriedProducts(state = [], action) {
	switch (action.type) {
		case 'QUERIED_PRODUCTS_FETCH_DATA_SUCCESS':
			return action.products;
		case 'CLEAR_QUERIED_PRODUCTS':
			return [];
		default:
			return state;
	}
}

export function searchValue(state = '', action) {
	switch (action.type) {
		case 'SET_SEARCH_VALUE':
			return action.value;
		case 'CLEAR_SEARCH_VALUE':
			return "";
		default:
			return state;
	}
}

export function cart(state = [], action) {
	switch (action.type) {
		case 'ADD_PRODUCT_TO_CART':
			return [...state, action.product];
		default:
			return state
	}
}

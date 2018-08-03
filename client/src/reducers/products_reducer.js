export function products(state = [], action) {
	switch (action.type) {
		case 'PRODUCTS_FETCH_SUCCESS':
			return action.products;
		case 'ADD_NEW_PRODUCT_SUCCESS':
			return [...state, action.product ]
		default:
			return state;
	}
}

export function filteredBy(state = 'Drums and Percussion', action) {
	switch (action.type) {
		case 'SET_FILTERED_BY':
			return action.string
		default:
			return state;
	}
}

// export function filteredProducts(state = [], action) {
// 	switch (action.type) {
// 		case 'SET_FILTERED_PRODUCTS':
// 			return action.products;
// 		default:
// 			return state;
// 	}
// }

export function queriedProducts(state = [], action) {
	switch (action.type) {
		case 'QUERIED_PRODUCTS_FETCH_SUCCESS':
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
		case 'REMOVE_PRODUCT_FROM_CART':
			return [
				...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    case 'DELETE_CART':
    	return []
		default:
			return state
	}
}

export function sortValue(state = 'published_at|desc', action) {
	switch (action.type) {
		case 'SET_SORT_VALUE':
			return action.value;
		default:
			return state
	}
}


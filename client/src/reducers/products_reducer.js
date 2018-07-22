export function productsAreLoading(state = false, action) {
	switch (action.type) {
		case 'PRODUCTS_ARE_LOADING':
			return action.isLoading;
		default:
			return state;
	}
}

export function products(state = [], action) {
	// debugger
	switch (action.type) {
		case 'PRODUCTS_FETCH_DATA_SUCCESS':
			return action.products;
		case 'ADD_NEW_PRODUCT_SUCCESS':
			return [...state, action.product ]//work on this one
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
			return [...state, action.product];//Alert on success?
		case 'REMOVE_PRODUCT_FROM_CART':
			return [
				...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
		default:
			return state
	}
}

// export function addProduct(state = [], action) {
// 	// debugger
// 	switch (action.type) {
// 		case 'ADD_NEW_PRODUCT_SUCCESS':
// 			// return [...state, action.product];
// 			 return { 
//         ...state,
//         arr: [...state.arr, action.product]
//     	}
// 		default:
// 			return state;
// 	}
// }

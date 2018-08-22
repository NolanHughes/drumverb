import { combineReducers } from 'redux';
import {products, queriedProducts, searchValue, cart, sortValue, filteredBy, errors} from './products_reducer';

export default combineReducers({
  products,
  queriedProducts,
  searchValue,
  cart,
  sortValue,
  filteredBy,
  errors
});
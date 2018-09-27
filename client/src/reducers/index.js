import { combineReducers } from 'redux';
import {products, searchValue, cart, sortValue, filteredBy, errors} from './products_reducer';

export default combineReducers({
  products,
  searchValue,
  cart,
  sortValue,
  filteredBy,
  errors
});
import { combineReducers } from 'redux';
import {products, productsIsLoading} from './products_reducer';//Change to are

export default combineReducers({
  products,
  productsIsLoading
});
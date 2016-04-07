import { combineReducers } from 'redux';
import addProduct from './addProductReducer'

const rootReducer = combineReducers({
  addProduct: addProduct
});

export default rootReducer;

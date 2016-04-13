'use strict';

import { combineReducers } from 'redux';
import products from './addProductReducer'
import basket from './basketReducer'


const rootReducer = combineReducers({
  products,
  basket
});

export default rootReducer;

import { ADD_PRODUCT } from '../actions/addProductAction';

const intialState = {};

export default function(state = intialState, action) {

  if (action.type === 'ADD_PRODUCT') {
    return action;
  }

  return state;
};

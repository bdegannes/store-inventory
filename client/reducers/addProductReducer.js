import { ADD_PRODUCT } from '../actions/addProductAction';

const intialState = {products:[]};

export default function(state = intialState, action) {
  console.log("reducer ", action);

  if (action.type === 'ADD_PRODUCT') {
    return Object.assign({}, state, {
      products: [
        ...state.products,
        {
          product: action.name,
          cost: action.cost,
          stock: action.stock
        }
      ]
    });
  }

  return state;
};

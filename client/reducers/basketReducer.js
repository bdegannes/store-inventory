'use strict';

import { ADD_TO_BASKET, REMOVE_FROM_STOCK } from '../actions/addToBasketAction';
import { REMOVE_FROM_BASKET, ADD_TO_STOCK  } from '../actions/removeFromBasketAction';


export default function basket(state = [], action){

  switch(action.type) {
    case ADD_TO_BASKET:
      return [
        ...state,
        action.item,
      ];
    case REMOVE_FROM_BASKET:
      let idx = 0;
      state.map((item, index) => {
        if ( item.id === action.id ){
          idx = index;
        }
      })
      return [
        ...state.slice(0, idx),
        ...state.slice(idx + 1)
      ];
    default:
      return state;
  }
}

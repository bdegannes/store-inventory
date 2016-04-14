'use strict';

import { ADD_TO_BASKET, INCREASE_ITEM_QUANTITY} from '../actions/addToBasketAction';
import { REMOVE_FROM_BASKET, DECREASE_ITEM_QUANTITY } from '../actions/removeFromBasketAction';



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
    case INCREASE_ITEM_QUANTITY:
      return state.map((item, index) => {
        if(item.id === action.id){
          return Object.assign({}, item, {
            [item.quantity]: item.quantity++
          });
        }
      return item;
      });
    case DECREASE_ITEM_QUANTITY:
      return state.map((item, index) => {
        if(item.id === action.id){
          return Object.assign({}, item, {
            [item.quantity]: item.quantity--
          });
        }
      return item;
      });
    default:
      return state;
  }
}

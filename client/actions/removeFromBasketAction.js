'use strict';

export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';
export const ADD_TO_STOCK = 'ADD_TO_STOCK';
export const DECREASE_ITEM_QUANTITY = 'DECREASE_ITEM_QUANTITY';


export function removeFromBasket(id) {
console.log("this is click action ", id)

  return {
    type: REMOVE_FROM_BASKET,
    id,
  };
}

export function addToStock(id) {
console.log("update action called ", id)

  return {
    type: ADD_TO_STOCK,
    id,
  };
}

export function decreaseQuantity(id) {
  return {
    type: DECREASE_ITEM_QUANTITY,
    id,
  };
}

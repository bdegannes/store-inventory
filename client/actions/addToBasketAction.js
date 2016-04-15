'use strict';

export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const INCREASE_ITEM_QUANTITY = 'INCREASE_ITEM_QUANTITY';
export const REMOVE_FROM_STOCK = 'REMOVE_FROM_STOCK';

export function addToBasket( item ) {
  return {
    type: ADD_TO_BASKET,
    item,
  };
}

export function removeFromStock( id ) {
  return {
    type: REMOVE_FROM_STOCK,
    id,
  };
}

export function increaseQuantity( id ) {
  return {
    type: INCREASE_ITEM_QUANTITY,
    id,
  };
}

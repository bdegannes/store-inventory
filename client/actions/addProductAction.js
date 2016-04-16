'use strict';

export const ADD_PRODUCT = 'ADD_PRODUCT';

// set unique key for each new product added
let productId = 0;

export function addProduct( item ) {

  item.id = productId++;
  item.quantity = 0;

  ( !item.stock ) ? item.outOfStock = true : item.outOfStock = false ;

  return {
    type: ADD_PRODUCT,
    item
  };
}

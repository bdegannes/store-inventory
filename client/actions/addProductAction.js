'use strict';

export const ADD_PRODUCT = 'ADD_PRODUCT';

// set unique key for each new product added
let productId = 0

export function addProduct( item ) {

  return {
    type: ADD_PRODUCT,
    id: productId++,
    item
  };
}

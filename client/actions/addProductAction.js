'use strict';

export const ADD_PRODUCT = 'ADD_PRODUCT';

let productId = 0

export function addProduct(item) {

  return {
    type: ADD_PRODUCT,
    id: productId++,
    item
  };
}

'use strict';

export const UPDATE_STOCK = 'UPDATE_STOCK';

export function updateStock(id) {
console.log("update action called ", id)

  return {
    type: UPDATE_STOCK,
    id,
  };
}

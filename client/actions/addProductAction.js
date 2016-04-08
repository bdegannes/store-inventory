export const ADD_PRODUCT = 'ADD_PRODUCT';

export function addProduct(id, name, cost, stock) {

  return {
    type: ADD_PRODUCT,
    id,
    name,
    cost,
    stock
  };
}

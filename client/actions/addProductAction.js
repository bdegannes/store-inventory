export const ADD_PRODUCT = 'ADD_PRODUCT';

export function addProduct(name, cost, stock) {

console.log("action ", name, cost, stock);
  return {
    type: ADD_PRODUCT,
    name,
    cost,
    stock
  };
}

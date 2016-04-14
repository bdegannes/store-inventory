'use strict';

export const DISABLE_ITEM = 'DISABLE_ITEM';
export const ENABLE_ITEM = 'ENABLE_ITEM';


export function disableItem(id) {
console.log("disable ", id)

  return {
    type: DISABLE_ITEM,
    id,
  };
}

export function enableItem(id) {
console.log("enable ", id)

  return {
    type: ENABLE_ITEM,
    id,
  };
}

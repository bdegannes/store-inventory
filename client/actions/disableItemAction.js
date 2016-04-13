'use strict';

export const DISABLE_ITEM = 'DISABLE_ITEM';

export function disableItem(id) {
console.log("this is click action ", id)

  return {
    type: DISABLE_ITEM,
    id,
  };
}

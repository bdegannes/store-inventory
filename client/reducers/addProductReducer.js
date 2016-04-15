'use strict';

import { ADD_PRODUCT } from '../actions/addProductAction';
import { DISABLE_ITEM, ENABLE_ITEM } from '../actions/disableItemAction';
import { REMOVE_FROM_STOCK } from '../actions/addToBasketAction';
import { ADD_TO_STOCK } from '../actions/removeFromBasketAction';
import update from 'react-addons-update'


export default function products ( state = [], action ) {

  switch ( action.type ) {
   case ADD_PRODUCT:
    return [
      ...state,
      {
        id: action.id,
        product: action.item.product,
        cost: +action.item.cost,
        stock: +action.item.stock,
        quantity: 0,
        outOfStock: false
      }
    ];
   case REMOVE_FROM_STOCK:
     return state.map( ( item, index ) => {
       if ( item.id === action.id ) {
         return Object.assign( {}, item, {
           [item.stock]: item.stock--
         })
       }
       return item;
     });
   case ADD_TO_STOCK:
     return state.map( ( item, index ) => {
       if( item.id === action.id ){
         return Object.assign( {}, item, {
           [item.stock]: item.stock++
         });
       }
       return item;
     });
   case DISABLE_ITEM:
      return state.map( ( item, index ) => {
        if( item.id === action.id && !item.stock ){
            return Object.assign( {}, item, {
              outOfStock: true,
              stock: "Out of Stock"
            });
        }
        return item;
      });
    case ENABLE_ITEM:
       return state.map( ( item, index ) => {
         if( item.id === action.id && !!item.stock ){
           return Object.assign( {}, item, {
             outOfStock: false,
             stock: 0
           });
         }
         return item;
       });
   default:
     return state;
   }
}

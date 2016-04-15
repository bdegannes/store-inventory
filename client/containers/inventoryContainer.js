'use strict';

import { connect } from 'react-redux'
import { addToBasket, removeFromStock, increaseQuantity } from '../actions/addToBasketAction'
import { disableItem} from '../actions/disableItemAction'
import InventoryList from '../components/inventory'


const mapStateToProps = ( { products } ) => {
  return { products };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    onAddToBasket: ( item ) => {
      dispatch( removeFromStock( item.id ) );
      dispatch( disableItem( item.id ) );
      dispatch( addToBasket( item ) );
      dispatch( increaseQuantity( item.id ) );
    }
  };
};

const Inventory = connect( mapStateToProps, mapDispatchToProps )( InventoryList )

export default Inventory

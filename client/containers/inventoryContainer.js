'use strict';

import { connect } from 'react-redux'
import { addToBasket, removeFromStock } from '../actions/addToBasketAction'
import InventoryList from '../components/inventoryComponent'


const mapStateToProps = ({ products }) => {
  return { products };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToBasket: (item) => {
      dispatch(removeFromStock(item.id));
      dispatch(addToBasket(item));
    }
  };
};

const Inventory = connect( mapStateToProps, mapDispatchToProps)(InventoryList)

export default Inventory

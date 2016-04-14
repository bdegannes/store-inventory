'use strict';

import { connect } from 'react-redux'
import { removeFromBasket, addToStock, decreaseQuantity } from '../actions/removeFromBasketAction'
import { enableItem } from '../actions/disableItemAction'
import BasketList from '../components/basketComponent'

const mapStateToProps = ({ basket }) => {
  return { basket };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveFromBasket: (id) => {
      dispatch(addToStock(id));
      dispatch(removeFromBasket(id));
      dispatch(decreaseQuantity(id));
    },
    enable: (item) => {
      dispatch(enableItem(item.id));
    }
  };
};

const Basket = connect( mapStateToProps, mapDispatchToProps)(BasketList)

export default Basket

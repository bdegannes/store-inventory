'use strict';

import { connect } from 'react-redux'
import { removeFromBasket, addToStock } from '../actions/removeFromBasketAction'
import BasketList from '../components/basketComponent'

const mapStateToProps = ({ basket }) => {
  return { basket };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveFromBasket: (id) => {
      dispatch(addToStock(id));
      dispatch(removeFromBasket(id));
     }
  };
};

const Basket = connect( mapStateToProps, mapDispatchToProps)(BasketList)

export default Basket

'use strict';

import React, { Component, PropTypes } from 'react'
import Item from './itemComponent'


class Basket extends Component {

removeAction (item) {
  this.props.onRemoveFromBasket(item.id)
  this.props.enable(item)
}

  render () {
    console.log("this is props", this.props);
    return (
      <div className="List">
        <h2> Basket </h2>
        <div >
          {this.props.basket.map(item =>
            <Item
              key={ item.id }
              product={ item.product }
              cost={ item.cost }
              stock={ item.quantity }
              type="Quantity"
              onClick={ () => this.removeAction(item) }
              icon="remove_shopping_cart"
            />
          )}
        </div>
      </div>
    )
  }
}

Basket.propTypes = {
  basket: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    product: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  onRemoveFromBasket: PropTypes.func.isRequired,
  enable: PropTypes.func.isRequired,
}

export default Basket

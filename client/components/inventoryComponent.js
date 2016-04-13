'use strict';

import React, { Component, PropTypes } from 'react'
import Item from './itemComponent'

class Inventory extends Component {

  render () {
    return (
      <div className="List">
      <h2> Inventory </h2>
        <div >
          {this.props.products.map(product =>
            <Item
              key={product.id}
              {...product}
              type="Stock"
              onClick={() => this.props.onAddToBasket(product)}
              icon="shopping_cart"
            />
          )}
        </div>
      </div>
    )
  }
}

Inventory.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    product: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  onAddToBasket: PropTypes.func.isRequired
}

export default Inventory

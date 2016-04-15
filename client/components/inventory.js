'use strict';

import React, { Component, PropTypes } from 'react'
import Item from './itemComponent'

class Inventory extends Component {

  clickAction (product) {
     if (!product.outOfStock) {
       this.props.onAddToBasket(product);
     }
  }

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
              icon="shopping_cart"
              onClick={ () => this.clickAction( product ) }
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
    outOfStock: PropTypes.bool,
  }).isRequired).isRequired,
  onAddToBasket: PropTypes.func.isRequired,
}

export default Inventory

import React, { Component, PropTypes } from 'react'
import Item from './itemComponent'

class Inventory extends Component {

  render () {
    console.log("this is props", this.props);
    return (
      <div className="inventory">
        <ul>
          {this.props.products.map(product =>
            <Item
              key={product.id}
              {...product}
            />
          )}
        </ul>
      </div>

    )
  }
}

Inventory.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired, 
    product: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired
  }).isRequired).isRequired
}

export default Inventory

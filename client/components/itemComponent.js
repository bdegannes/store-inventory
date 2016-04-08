import React, { PropTypes } from 'react'

const Item = ({product, cost, stock}) => (
  <ul>
    <li>{product}</li>
    <li>${cost}</li>
    <li>{stock}</li>
  </ul>
)

Item.proptypes = {
  product: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired
}

export default Item

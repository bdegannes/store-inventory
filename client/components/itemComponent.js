'use strict';

import React, { PropTypes } from 'react'
import Colors from 'material-ui/lib/styles/colors'
import FontIcon from 'material-ui/lib/font-icon'

const iconStyles = {
  marginRight: 20,
  marginLeft: 20,
  fontSize: 30
};

const Item = ({ product, cost, stock, onClick, type, icon}) => (
  <div className="listItem">
    <ul className="product">
      <li>{product}</li>
      <li>Price: ${cost}</li>
      <li>{type}: {stock}</li>
    </ul>
    <div
      className="icon"
      onClick={onClick}
      >
      <FontIcon className="material-icons" style={iconStyles}>{icon}</FontIcon>
    </div>
  </div>
)

Item.proptypes = {
  product: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  stock: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired
}

export default Item

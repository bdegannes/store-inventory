'use strict';

import React, { PropTypes, Component } from 'react'
import { FontIcon } from 'material-ui'
import { minBlack } from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const iconStyles = {
  marginRight: 20,
  marginLeft: 20,
  fontSize: 30
};

console.log("Colors", minBlack)
const styles = {
  item: {
    color: '#7f8c8d'
  },
  hover: {
    background: '#34495e'
  },
  hoverDisabled: {
    color: '#7f8c8d',
    cursor: 'not-allowed'
  },
  iconHover: {
    cursor: 'pointer',
    background: '#2c3e50',
    transition: '.5s'
  }
};

class Item extends Component {
  constructor ( props ){
    super( props );
    this.state = {
      isHovering: false,
    };
  }

  handleMouseOver () {
    this.setState( { isHovering: true } );
  }

  handleMouseOut () {
    this.setState( { isHovering: false } );
  }


  render () {

    if ( this.state.isHovering && this.props.outOfStock ) {
        var itemStyling = styles.hoverDisabled;
        var iconColor = minBlack;
    }
    else if ( this.state.isHovering && !this.props.outOfStock ) {
        var iconStyling = styles.iconHover;
        itemStyling = styles.hover;
    }
    else if ( !this.state.isHovering && this.props.outOfStock ) {
        itemStyling = styles.item;
        iconColor = minBlack;
    }

    const stock = this.props.outOfStock ? "Out of Stock" : this.props.stock;

    return (
      <div
          className="listItem"
          onMouseOver={ () => this.handleMouseOver() }
          onMouseOut={ () => this.handleMouseOut() }
          style={ itemStyling }
        >
        <ul className="product">
          <li>{ this.props.product }</li>
          <li>Price: ${ this.props.cost }</li>
          <li>{ this.props.type }: { stock }</li>
        </ul>
        <div
            className="icon"
            onClick={ this.props.onClick }
            style={ iconStyling }
            >
            <MuiThemeProvider>
              <FontIcon className="material-icons" style={ iconStyles } color={ iconColor }>{ this.props.icon }</FontIcon>
            </MuiThemeProvider>
        </div>
      </div>
    )

  }

}
Item.proptypes = {
  product: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  stock: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
}

export default Item

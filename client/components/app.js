import React, { Component } from 'react'
import Product from '../containers/productContainer'
import Inventory from '../containers/inventoryContainer'

export default class App extends Component {
  render() {
    return (
      <div>
        <Product />
        <Inventory />
      </div>
    )
  }
}

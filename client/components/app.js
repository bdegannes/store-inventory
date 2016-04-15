'use strict';

import React, { Component } from 'react'
import Product from '../components/productForm'
import Inventory from '../containers/inventoryContainer'
import Basket from '../containers/basketContainer'


export default class App extends Component {
  render() {
    return (
      <div className="main">
        <Product />
        <Inventory />
        <Basket />
      </div>
    )
  }
}

'use strict';

import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { addProduct } from '../actions/addProductAction'
import RaisedButton from 'material-ui/lib/raised-button'

export default class Product extends Component {

  constructor(props){
    super(props);
    this.state = {
      product: "",
      cost: 0,
      stock: 0
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    var selectedClass = event.target.getAttribute("class");
    switch (selectedClass){
      case "form-product" :
        this.setState({ product: event.target.value });
        break;
      case "form-currency" :
        this.setState({ cost: +event.target.value });
        break;
      case "form-stock" :
        this.setState({ stock: +event.target.value });
        break;
    }
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.addProduct(this.state);
    this.setState({
      product: "",
      cost: 0,
      stock: 0
    });
  }

  render () {
    return (
      <div className="productForm">
      <h2> New Product </h2>
      <div className="form">
        <form className="formRow" onSubmit={this.onFormSubmit}>
          <div className="formInput">
            <label>Product Name</label>
            <div>
              <input
                  type="text"
                  value={this.state.product}
                  className="form-product"
                  onChange={this.onInputChange}
                  />
            </div>
          </div>
          <div className="formInput">
            <label>Price</label>
            <div>
              <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={this.state.cost}
                  className="form-currency"
                  onChange={this.onInputChange}
                  />
            </div>
          </div>
          <div className="formInput">
            <label>Stock</label>
            <div>
              <input
                  type="number"
                  min="0"
                  step="1"
                  value={this.state.stock}
                  className="form-stock"
                  onChange={this.onInputChange}
                  />
            </div>
          </div>
          <div className="submitBtn" >
            <RaisedButton
                label="Submit"
                primary={true}
                onClick={this.onFormSubmit}
                />
          </div>
        </form>
      </div>
    </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addProduct }, dispatch)
}

export default connect(null, mapDispatchToProps)(Product);

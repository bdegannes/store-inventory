'use strict';

import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { addProduct } from '../actions/addProductAction'
import RaisedButton from 'material-ui/lib/raised-button'
import FormInput from './inputField'
import isEmpty from 'lodash/isEmpty'

export default class Product extends Component {

  constructor(props){
    super(props);
    this.state = {
      product: "",
      cost: 0,
      stock: 0,
    };
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  setProductForm(event) {
    return {
      product: (event) => {
        this.setState({ product: event.target.value })
      },
      cost: (event) => {
        this.setState({ cost: +event.target.value })
      },
      stock: (event) => {
        this.setState({ stock: +event.target.value })
      }
    }
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.addProduct(this.state);
    this.setState({
      product: "",
      cost: 0,
      stock: 0,
    });
   }

   validateText (value) {
     return !isEmpty(value)
   }

   validateCurrency (value) {
     //will accept dollar amounts with two digits after the decimal or no decimal
     //will also accept a number with or without a dollar sign
     var regex  = /^\$?[0-9]+(\.[0-9][0-9])?$/;
     return regex.test(value);
   }

   validateStock (value) {
     return !isEmpty(value)
   }

   validateSubmit () {
     if(isEmpty(this.state.product) || this.state.cost === 0 || this.state.stock === 0){
       return true
     }
   }

  render () {
    return (
      <div className="productForm">
      <h2> New Product </h2>
      <div className="form">
        <form className="formRow" onSubmit={this.onFormSubmit}>
          <div className="formInput">
            <label>Product Name</label>
              <FormInput
                  uniqueName="form-product"
                  type="text"
                  required={true}
                  validate={this.validateText}
                  onChange={this.setProductForm().product}
                  errorMessage="Product is required!"
                  />
          </div>
          <div className="formInput">
            <label>Price</label>
              <FormInput
                  uniqueName="form-currency"
                  type="number"
                  min="0"
                  step="0.01"
                  required={true}
                  validate={this.validateCurrency}
                  onChange={this.setProductForm().cost}
                  errorMessage="Input product cost!"
                  />
          </div>
          <div className="formInput">
            <label>Stock</label>
              <FormInput
                  uniqueName="form-stock"
                  type="number"
                  min="0"
                  step="1"
                  required={true}
                  validate={this.validateStock}
                  onChange={this.setProductForm().stock}
                  errorMessage="Enter stock."
                  />
          </div>
          <div className="submitBtn" >
            <RaisedButton
                label="Submit"
                primary={true}
                onClick={this.onFormSubmit}
                disabled={this.validateSubmit()}
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

/*
if ( selectedClass === "form-product" ){
   this.setState({ product: event.target.value });
} else if ( selectedClass === "form-currency" ){
   this.setState({ cost: +event.target.value });
} else if ( selectedClass === "form-stock" ){
   this.setState({ stock: +event.target.value });
}
*/
'use strict';

import React, { PropTypes, Component } from 'react'
import InputError from './inputErrors'
import isEmpty from 'lodash/isEmpty'

class FormInput extends Component {

  constructor (props) {
    super(props);
    this.state = {
      isEmpty: true,
      value: null,
      valid: false,
      errorMessage: '',
      errorVisible: false
    };
    this.handleBlur = this.handleBlur.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.validation = this.validation.bind(this)
  }

  handleChange (event) {
    this.validation(event.target.value);

    console.log("logging Props", this.props.onChange)

    if(this.props.onChange){
      this.props.onChange(event);
    }
  }

  validation (value, valid) {
    if (typeof valid === 'undefined') {
      valid = true
    }

    console.log("is this valid", value, valid);

    var message = '';
    var errorVisible = false;

    if(!valid){
      console.log("i fired !valid");
      message = this.props.errorMessage;
      valid = false;
      errorVisible = true;
    }
    else if ( this.props.required && isEmpty(value) ){
      console.log("i fired empty");
      message = this.props.errorMessage;
      valid = false;
      errorVisible = true;
    }
    else if ( value.length < this.props.minCharacters ){
      message = this.props.errorMessage;
      valid = false;
      errorVisible = true;
    }

    this.setState({
      value: value,
      isEmpty: isEmpty(value),
      valid: valid,
      errorMessage: message,
      errorVisible: errorVisible
    });
  }

  handleBlur (event) {
    console.log("the event", event);
    var valid = this.props.validate(event.target.value);
    this.validation(event.target.value, valid);
  }

  render () {
    return (
      <div className={this.props.uniqueName}>
        <input
          type={this.props.type}
          min={this.props.min}
          step={this.props.step}
          placeholder={this.props.text}
          className={'input input-' + this.props.uniqueName}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          value={this.state.value}
          />

        <InputError
          visible={this.state.errorVisible}
          errorMessage={this.state.errorMessage} />
      </div>
    )
  }
}

export default FormInput

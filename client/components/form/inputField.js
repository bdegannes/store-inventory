'use strict';

import React, { PropTypes, Component } from 'react'
import InputError from './inputErrors'
import isEmpty from 'lodash/isEmpty'

class FormInput extends Component {

  constructor ( props ) {
    super( props );
    this.state = {
      isEmpty: true,
      value: null,
      valid: false,
      errorMessage: '',
      errorVisible: false
    };
    this.handleBlur = this.handleBlur.bind( this )
    this.handleChange = this.handleChange.bind( this )
    this.validation = this.validation.bind( this )
  }

  handleChange ( event ) {
    // validate the field
    this.validation( event.target.value );

    // Invoke the parents onChange method to update its staet
    if( this.props.onChange ){
      this.props.onChange( event );
    }
  }

  validation ( value, valid ) {
    if ( typeof valid === 'undefined' ) {
      valid = true
    }

    var message = '';
    var errorVisible = false;

    // validate fields based on the information passed through props
    if( !valid ){
      // checks valid field entry when user leaves
      message = this.props.errorMessage;
      valid = false;
      errorVisible = true;
    }
    else if ( this.props.required && isEmpty( value ) ){
      // required field check
      message = this.props.errorMessage;
      valid = false;
      errorVisible = true;
    }
    else if ( value.length < this.props.minCharacters ){
      // char length check
      message = this.props.errorMessage;
      valid = false;
      errorVisible = true;
    }

    // setting final state to update display
    // error message will display if there is one
    this.setState({
      value: value,
      isEmpty: isEmpty( value ),
      valid: valid,
      errorMessage: message,
      errorVisible: errorVisible
    });
  }

  handleBlur ( event ) {
    var valid = this.props.validate( event.target.value );
    // pass valid to local validation
    this.validation( event.target.value, valid );
  }

  componentWillReceiveProps( newProps ){
    // clear state value on submission
    if ( newProps.clear ){
      this.setState({
        value: null
      })
    }
  }

  render () {
    return (
      <div className={ this.props.uniqueName }>
        <input
          type={ this.props.type }
          min={ this.props.min }
          step={ this.props.step }
          placeholder={ this.props.text }
          className={ 'input input-' + this.props.uniqueName }
          onChange={ this.handleChange }
          onBlur={ this.handleBlur }
          value={ this.state.value }
          />

        <InputError
          visible={ this.state.errorVisible }
          errorMessage={ this.state.errorMessage } />
      </div>
    )
  }
}

FormInput.proptypes = {
  type: PropTypes.string,
  min: PropTypes.number,
  step: PropTypes.number,
  text: PropTypes.string,
  uniqueName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  required: PropTypes.bool,
}

export default FormInput

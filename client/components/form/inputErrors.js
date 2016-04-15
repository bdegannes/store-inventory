'use strict';

import React, { PropTypes, Component } from 'react'
import classNames from 'classnames'

class InputError extends Component{
  constructor ( props ){
    super( props );
    this.state = {
      message: 'Input is invalid'
    };
  }

  render () {
    // set className base on error state
    const errorClass = classNames( this.props.className,{
      error_container : true,
      visible : this.props.visible,
      invisible : !this.props.visible
    });

    return(
      <div className={ errorClass }>
        <span
          style={ { color:'red' } }
        >{ this.props.errorMessage }</span>
      </div>
    )
  }
}

InputError.proptypes ={
  visible: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
}


export default InputError

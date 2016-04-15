'use strict';

import React, { PropTypes, Component } from 'react'
import classNames from 'classnames'

class InputError extends Component{
  constructor (props){
    super(props);
    this.state = {
      message: 'Input is invalid'
    };
  }

  render () {
    const errorClass = classNames(this.props.className,{
      error_container : true,
      visible : this.props.visible,
      invisible : !this.props.visible
    });

    return(
      <div className={errorClass}>
        <span
          style={{color:'red'}}
        >{this.props.errorMessage}</span>
      </div>
    )
  }
}


export default InputError

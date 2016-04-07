import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import RaisedButton from 'material-ui/lib/raised-button'

export default class Product extends Component {

  render () {
    return (
      <div>
        <form className="formRow">
          <div>
            <label>Product Name</label>
            <div>
              <input type="text" className="product" required />
            </div>
          </div>
          <div>
            <label>Price</label>
            <div>
              <input type="number" value="0.00" min="0" step="0.01" className="currency" required />
            </div>
          </div>
          <div>
            <label>Stock</label>
            <div>
              <input type="number" value="0" min="0" step="1" className="stock" required />
            </div>
          </div>
          <div>
            <RaisedButton className="submitBtn" label="Submit" primary={true} />
          </div>
        </form>
      </div>
    )
  }
}

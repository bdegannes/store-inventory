import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { addProduct } from '../actions/addProductAction'
import RaisedButton from 'material-ui/lib/raised-button'

export default class Product extends Component {

  constructor(props){
    super(props);
    this.state = {
      id: 0,
      product: "",
      cost: 0,
      stock: 0
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    console.log("this is the event", event.target.value)
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
    let newID = this.state.id;
    this.setState({id: newID+=1});
    this.props.addProduct(this.state.id, this.state.product, this.state.cost, this.state.stock);
    this.setState({
      product: "",
      cost: 0,
      stock: 0
    });
    console.log("After State", this.state);
  }

  render () {
    return (
      <div>
        <form className="formRow" onSubmit={this.onFormSubmit}>
          <div>
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
          <div>
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
          <div>
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
          <div>
            <RaisedButton
                className="submitBtn"
                label="Submit"
                primary={true}
                onClick={this.onFormSubmit}
                />
          </div>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addProduct }, dispatch)
}

export default connect(null, mapDispatchToProps)(Product);

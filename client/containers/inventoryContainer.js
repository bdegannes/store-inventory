import { connect } from 'react-redux'
import InventoryList from '../components/inventoryComponent'

/*const InventoryContainer = () => (
)*/

const mapStateToProps = ({ addProduct }) => {
  console.log("from the inventory Container", addProduct)
  return addProduct;
};

const Inventory = connect( mapStateToProps, null )(InventoryList)

export default Inventory

import React from "react";
import DatePicker from "react-datepicker";
import "./EditProduct.css";
import autoBind from "auto-bind";
import {getProducts} from "../../mockAPI";
import "react-datepicker/dist/react-datepicker.css";

class EditProduct extends React.Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
    this.setData = this.setData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDatePickerChange = this.handleDatePickerChange.bind(this);
  }

  componentWillMount() {
    this.setState({products: getProducts()});
    this.setState({productToEditId: localStorage.getItem('productToEditId')});
    this.buyProduct = this.buyProduct.bind(this);
  }

  componentDidMount() {
    this.setData();
  }

  handleDatePickerChange(date) {
    this.setState({
      endDate: date
    });
  }

  setData() {
    this.setState({
      imageUrl: this.state.products[this.state.productToEditId].imageUrl,
      name: this.state.products[this.state.productToEditId].name,
      quantity: this.state.products[this.state.productToEditId].quantity,
      price: this.state.products[this.state.productToEditId].price,
      endDate: this.state.products[this.state.productToEditId].endDate
    });
  }

  handleChange(event) {
    this.name = this.state.products[this.state.productToEditId].name;
    if (event.target.id === 'new_product_imageUrl') {
      this.setState({imageUrl: event.target.value});
      this.state.products[this.state.productToEditId].imageUrl = event.target.value;
    } else if (event.target.id === 'new_product_name') {
      this.setState({name: event.target.value});
      this.state.products[this.state.productToEditId].name = event.target.value;
    } else if (event.target.id === 'new_product_quantity') {
      this.setState({quantity: event.target.value});
      this.state.products[this.state.productToEditId].quantity = event.target.value;
    } else if (event.target.id === 'new_product_price') {
      this.setState({price: event.target.value});
      this.state.products[this.state.productToEditId].price = event.target.value;
    }
    this.setState({products: this.state.products});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({products: this.state.products});
    alert('Product updated :)');
  }

  buyProduct(selected_item_id) {
    this.state.products.forEach(product => {
      if (product.id === selected_item_id) {
        product.quantity--;
        this.setState({products: getProducts()});
      }
    });
  }

  render() {
    return (
      <div className="shop">
        <div className="products-container">
          <form className="addProductForm" onSubmit={this.handleSubmit} onLoad={this.setData}>
            <div>
              Product image url:
              <input id="new_product_imageUrl" type="text" value={this.state.imageUrl} onChange={this.handleChange}/>
            </div>
            <div>
              Product name:
              <input id="new_product_name" type="text" value={this.state.name} onChange={this.handleChange}/>
            </div>
            <div>
              Product quantity:
              <input id="new_product_quantity" type="number" value={this.state.quantity} onChange={this.handleChange}/>
            </div>
            <div>
              Product price:
              <input id="new_product_price" type="number" value={this.state.price} onChange={this.handleChange}/>
            </div>
            <div>
              Product end date:
              <DatePicker
                selected={this.state.endDate}
                onChange={this.handleDatePickerChange}
              />
            </div>
            <div className="product-image-container">
              <img alt={this.state.name} className="product-image" src={this.state.imageUrl}/>
            </div>
            <input type="submit" value="Save"/>
          </form>
        </div>
      </div>
    )
  }
}

export default EditProduct;

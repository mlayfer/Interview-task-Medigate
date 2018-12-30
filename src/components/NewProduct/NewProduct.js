import React from "react";
import DatePicker from "react-datepicker";
import "./NewProduct.css";
import autoBind from "auto-bind";
import {getProducts} from "../../mockAPI";
import "react-datepicker/dist/react-datepicker.css";

class NewProduct extends React.Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDatePickerChange = this.handleDatePickerChange.bind(this);
  }

  handleDatePickerChange(date) {
    this.setState({
      endDate: date
    });
    this.endDate = date;
  }

  handleChange(event) {
    if (event.target.id === 'new_product_imageUrl') this.imageUrl = event.target.value;
    else if (event.target.id === 'new_product_name') this.name = event.target.value;
    else if (event.target.id === 'new_product_quantity') this.quantity = event.target.value;
    else if (event.target.id === 'new_product_price') this.price = event.target.value;
  }

  handleSubmit(event) {
    const today = new Date();
    if (this.endDate >= today) {
      this.state.products.push({
        id: this.state.products.length + 1,
        imageUrl: this.imageUrl,
        name: this.name,
        quantity: this.quantity,
        price: this.price
      });
    }
    event.preventDefault();
    alert('Product added :)');
  }

  componentWillMount() {
    this.setState({products: getProducts()});
    this.buyProduct = this.buyProduct.bind(this);
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
          <form className="addProductForm" onSubmit={this.handleSubmit}>
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
            <input type="submit" value="Add product"/>
          </form>
        </div>
      </div>
    )
  }
}

export default NewProduct;

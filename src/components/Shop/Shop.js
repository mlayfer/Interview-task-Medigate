import React from "react";
import "./Shop.css";
import autoBind from "auto-bind";
import Product from "../Product/Product";
import {getProducts} from "../../mockAPI";

class Shop extends React.Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  componentWillMount() {
    this.setState({products: getProducts()});
    this.buyProduct = this.buyProduct.bind(this);
  }

  buyProduct(selected_item_id) {
    this.state.products.forEach(product => {
      if (product.id === selected_item_id) {
        console.log(product.id);
        if (product.quantity === 'Sold Out') return;
        else if (product.quantity === 1) product.quantity = 'Sold Out';
        else product.quantity--;
        this.setState({products: this.state.products});
      }
    });
    console.log(this.state.products);
  }

  editProduct(selected_item_id) {
    localStorage.setItem('productToEditId', selected_item_id);
    window.location = 'editProduct';
  }

  deleteProduct(selected_item_id) {
    var removeIndex = this.state.products.map(function (item) {
      return item.id;
    }).indexOf(selected_item_id);
    this.state.products.splice(removeIndex, 1);
    this.setState({products: this.state.products});
  }

  onBuyClick(selected_product) {
    this.buyProduct(selected_product.id);
  }

  onEditClick(selected_product) {
    this.editProduct(selected_product.id);
  }

  onDeleteClick(selected_product) {
    this.deleteProduct(selected_product.id);
  }

  render() {
    return (
      <div className="shop">
        <div className="products-container">
          {
            this.state.products.map(product =>
              <div className="product-container">
                <Product
                  product={product}
                  onBuyClick={this.onBuyClick}
                  onEditClick={this.onEditClick}
                  onDeleteClick={this.onDeleteClick}
                />
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default Shop;

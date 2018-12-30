import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Shop from "./components/Shop";
import NewProduct from "./components/NewProduct";
import EditProduct from "./components/EditProduct";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          {/* <Route exact path="/about" component={About} />
            <Route exact path="/code" component={Code} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/presence" component={info} /> */}
          <Route exact path="/" component={Shop} />
          <Route exact path="/addProduct" component={NewProduct} />
          <Route exact path="/editProduct" component={EditProduct} />
        </div>
      </Router>
    );
  }
}

export default App;

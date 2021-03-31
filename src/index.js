import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Login from "./components/login.js";
import SignUp from "./components/signup.js";
import Products from "./components/products.js";
import Account from "./components/account";
import Donation from "./components/donation";
import Home from "./components/home.js";
import "font-awesome/css/font-awesome.min.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Thrift from "./components/thrift.js";
import Contact from "./components/contact.js";
import Cart from "./components/Cart.jsx";
import SingleProduct from "./components/SingleProduct.jsx";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { getCurrentUserID, getCurrentUserName } from "./helper/functions";

function getUserName() {
  if (getCurrentUserID() !== "null") {
    return getCurrentUserID();
  } else {
    return null;
  }
}
class Index extends Component {
  // https://stackoverflow.com/questions/46845543/react-bootstrap-tab-not-changing-content
  constructor(props) {
    super(props);
    this.state = {
      key: 1,
      userName: null,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(key) {
    console.log("selected" + key);
    this.setState({ key: key });
  }

  render = () => {
    return (
      <div>
        <Header userName={getUserName()}></Header>
        <BrowserRouter>
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/signup" exact component={SignUp}></Route>
          <Route path="/products" exact component={Products}></Route>
          <Route path="/contact" exact component={Contact}></Route>
          <Route path="/Cart" exact component={Cart}></Route>
          <Route path="/SingleProduct" exact component={SingleProduct}></Route>
          <Route path="/account" exact component={Account}></Route>
          <Route path="/thrift" exact component={Thrift}></Route>
          <Route path="/donation" exact component={Donation}></Route>
          </BrowserRouter>
      </div>
    );
  };
}

ReactDOM.render(<Index />, document.getElementById("root"));

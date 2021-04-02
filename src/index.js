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
import Thrift from "./components/thrift.js";
import Contact from "./components/contact.js";
import Cart from "./components/Cart.jsx";
import team from "./components/Team.js";
import Faqs from "./components/Faqs.js";
import SingleProduct from "./components/SingleProduct.jsx";
import { Redirect } from 'react-router'

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { getCurrentUserID, getCurrentUserName } from "./helper/functions";
import Orders from "./components/orders";
import { checkUserLogin, checkUserAccountCompleteness} from "./helper/functions";

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
    function isUserLoggedIn() {
      if (localStorage.getItem("current_user_id") == "null" ){
        return false;
      }
      else {
        return true;
      }
    }
    return (
      <div>
        <Header userName={getUserName()}></Header>
        <BrowserRouter>
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/signup" exact component={SignUp}></Route>
          <Route path="/products" exact component={Products}></Route>
          <Route path="/contact" exact component={Contact}></Route>
          <Route exact path="/Cart" render={(props) => (
            isUserLoggedIn() ? (
              <Cart {...props} />
            ) : (
              <Redirect to="/login"/>
            )
          )}/>
          <Route exact path="/products/:product_id" render={(props) => (
            isUserLoggedIn() ? (
              <SingleProduct {...props} />
            ) : (
              <Redirect to="/login"/>
            )
          )}/>
          <Route path="/account" exact component={Account}></Route>
          <Route path="/thrift" exact component={Thrift}></Route>
          <Route path="/donation" exact component={Donation}></Route>
          <Route path="/team" exact component={team}></Route>
          <Route path="/faqs" exact component={Faqs}></Route>
          <Route path="/orders" exact component={Orders}></Route>
        </BrowserRouter>
      </div>
    );
  };
}

ReactDOM.render(<Index />, document.getElementById("root"));

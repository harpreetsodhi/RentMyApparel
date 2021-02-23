import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import styles from "./style.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { myValue: "value" };
  }

  render = () => {
    return (
      <div
        className="site-header sticky-top py-1"
        style={{
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.851)",
        }}
      >
        <a className="text-center" href="/">
          <img
            src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
            width="30"
            height="30"
            alt=""
          />
        </a>
        <Navbar>
          <div class="container d-flex flex-column flex-md-row justify-content-between">
            <Nav className="m-auto">
              <Nav.Link
                style={{
                  color: "#EEEEEE",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
                href="/login"
              >
                Login
              </Nav.Link>
              <Nav.Link
                style={{
                  color: "#EEEEEE",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
                href="/signup"
              >
                Sign Up
              </Nav.Link>
              <Nav.Link
                style={{
                  color: "#EEEEEE",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
                href="/products"
              >
                Products
              </Nav.Link>
              <Nav.Link
                style={{
                  color: "#EEEEEE",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
                href="/contact"
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </div>
        </Navbar>
      </div>
    );
  };
}

export default Header;

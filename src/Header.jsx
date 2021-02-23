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
        <div className="text-center" href="/">
          <img
            src={window.location.origin + "/logo.svg"}
            width="50"
            style={{
              fill: "white",
            }}
            height="50"
            alt=""
          />
        </div>
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

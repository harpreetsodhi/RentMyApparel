import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import styles from "./style.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

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
        <div className="text-center">
          <a href="/">
            <img
              src={window.location.origin + "/logo.png"}
              width="50"
              style={{
                fill: "white",
              }}
              height="50"
              alt=""
            />
          </a>
        </div>

        <Navbar>
          <div className="container d-flex flex-column flex-md-row justify-content-between">
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
                href="/contact"
              >
                Contact Us
              </Nav.Link>
              <Nav.Link
                style={{
                  color: "#EEEEEE",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
                href="/Cart"
              >
                Cart
              </Nav.Link>
              <Nav.Link
                style={{
                  color: "#EEEEEE",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
                href="/account"
              >
                {/* https://icons.getbootstrap.com/icons/person-circle/ */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
              </Nav.Link>
            </Nav>
          </div>
        </Navbar>
      </div>
    );
  };
}

export default Header;

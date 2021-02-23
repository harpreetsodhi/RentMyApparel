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
      <Navbar className={styles.nav}>
        <Navbar.Brand style={{ color: "white" }} href="/">
          Rent My Apperal
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link style={{ color: "white" }} href="/login">
            Login
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} href="/signup">
            Sign Up
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} href="/products">
            Products
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} href="/thrift">
            Thrift
          </Nav.Link>
        </Nav>
        <Form inline>
          <Nav.Link style={{ color: "white" }} href="/contact">
            Contact Us
          </Nav.Link>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    );
  };
}

export default Header;

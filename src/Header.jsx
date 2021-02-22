import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import styles from "./style.module.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { myValue: "value" };
  }

  render = () => {
    return (
      <Navbar className={styles.nav}>
        <Navbar.Brand style={{ color: "white" }} href="#home">
          Rent My Apperal
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link style={{ color: "white" }} href="#home">
            Home
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} href="#thrift">
            Thrift Store
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} href="#donation">
            Donation
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} href="#features">
            Login
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} href="#pricing">
            Sign Up
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    );
  };
}

export default Header;

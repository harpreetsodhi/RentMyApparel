// @Author - Harpreet Singh

import React, { Component } from "react";
import axios from 'axios';
import ReactDOM from "react-dom";
import { Container, Media, Row, Col, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import addDays from "date-fns/addDays";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      total_price: 0
    };
  }

  // function to remove the items from the cart
  removeFromCart = (product_id) => {
    axios.get("https://rent-my-apparel-backend.herokuapp.com/api/cart/admin/"+product_id)
    const items =  this.state.items;
    for (var item of items) {
      if (item.product_id === product_id){
        var total_price = this.state.total_price;
        total_price -= item.product_price*item.days;
        this.setState({total_price});
        break;
      }
    }
    this.setState({items: this.state.items.filter(function(item) { 
      return item.product_id !== product_id
    })});
  }

  // load the api when the component loads
  async componentDidMount() {
    const { data: items }  = await axios.get("https://rent-my-apparel-backend.herokuapp.com/api/cart/admin")
    this.setState({ items });
    var total_price = 0
    for (var item of items) {
      total_price += item.product_price*item.days
    }
    this.setState({total_price})
  }

  render = () => {
    var footer = {
      width: '100%',
      position: 'fixed',
      bottom: '0',
      }
    const { items } = this.state; 
    // render the cart items on the UI
    return (
      <div>
        <div>
        <Container>
            <br></br>
        <ul className="list-unstyled">
          {items.map((item) => (
          <Media as="li" key={item.product_id} value={item.product_id}>
          <img
            className="w-50 p-3"
            src={item.product_img}
            alt="Generic placeholder"
          />
          <Media.Body>
            <br></br>
          <h3>{item.product_title} (From: {item.product_type.toUpperCase()} Store)</h3>
          <br></br>
          {
            item.product_type.toUpperCase() === "RENTAL" && 
            <div>
              <h5>Price: {item.product_price}$ /day</h5>
              <div className="font-weight-bold ">Days: {item.days}</div>
              <div className="font-weight-bold ">Delivery Date: {new Date(new Date(item.event_date).setDate(new Date(item.event_date).getDate() - 1)).toISOString().substring(0,10)}</div>
              <div className="font-weight-bold ">Event Date: {item.event_date.substring(0,10)}</div>
              <div className="font-weight-bold ">Pickup Date: {new Date(new Date(item.event_date).setDate(new Date(item.event_date).getDate() + item.days )).toISOString().substring(0,10)}</div>
              <div className="font-weight-bold ">Size: {item.product_size}</div>
              <div className="font-weight-bold ">Color: {item.product_color}</div>
            </div>
          }
          {
            item.product_type.toUpperCase() === "THRIFT" && 
            <div>
              <h5>Price: {item.product_price}$</h5>
              <div className="font-weight-bold ">Size: {item.product_size}</div>
              <div className="font-weight-bold ">Color: {item.product_color}</div>
            </div>
          }

          <p style={{cursor: "pointer"}} className="text-right"  onClick={ () => this.removeFromCart(item.product_id) }><span className="font-weight-bold">Remove </span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
          </p>

          </Media.Body>
          <hr></hr>
        </Media>
      ))}

      </ul>
      </Container>
      </div>
      <div style={footer} className="p-3 mb-2 bg-light text-dark">
      <Row>
        <Col md={{span: 3, offset: 5}}><h3>Total: {this.state.total_price}$</h3></Col>
        <Col md={{ span: 3 }}>
          <Button variant="primary" disabled={this.state.total_price === 0? true:false} >Place Order</Button>
        </Col>
      </Row>
      </div>
      </div>
    );
  };
}

export default Cart;
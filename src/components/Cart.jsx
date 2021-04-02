// @Author - Harpreet Singh

import React, { Component } from "react";
import axios from 'axios';
import ReactDOM from "react-dom";
import { Container, Card, Media, Row, Col, Button, ListGroupItem, ListGroup } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import addDays from "date-fns/addDays";
import { getCurrentUserID } from "../helper/functions";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

toast.configure();
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      total_price: 0
    };
    this.user_id = getCurrentUserID()
  }

  // function to remove the items from the cart
  removeFromCart = (product_id) => {
    axios.get("https://rent-my-apparel-backend.herokuapp.com/api/cart/"+this.user_id+"/"+product_id)
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
    const { data: items }  = await axios.get("https://rent-my-apparel-backend.herokuapp.com/api/cart/"+this.user_id)
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

    async function handleToken(token){
      const response = await axios.post("https://rent-my-apparel-backend.herokuapp.com/api/checkout", {token, items});
      const {status} = response.data
      console.log(response.data);
      if(status === 'success'){
        toast('Order has been placed! Please Check your Email!', 
        {type: 'success'});

      } else {
        toast('Something went wrong',
        {type: "error"});
      }
    }
    return (
      <div>
        <div>
        <Container>
        <ul className="list-unstyled">
          {items.map((item) => (
            <Card className="m-3">
              <Card.Body>
              <Card.Text>
              <Button variant="outline-danger" onClick={ () => this.removeFromCart(item.product_id) } style={{width: 200}} className="float-right">Remove from Cart</Button>
              </Card.Text>
              </Card.Body>
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
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <strong>Price: </strong>
                {item.product_price}$ /day
              </ListGroupItem>
              <ListGroupItem>
                <strong>Days: </strong>
                {item.days}
              </ListGroupItem>
              <ListGroupItem>
                <strong>Delivery Date: </strong>
                {new Date(new Date(item.event_date).setDate(new Date(item.event_date).getDate() - 1)).toISOString().substring(0,10)}
              </ListGroupItem>
              <ListGroupItem>
                <strong>Event Date: </strong>
                {item.event_date.substring(0,10)}
              </ListGroupItem>
              <ListGroupItem>
                <strong>Pickup Date: </strong>
                {new Date(new Date(item.event_date).setDate(new Date(item.event_date).getDate() + item.days )).toISOString().substring(0,10)}
              </ListGroupItem>
              <ListGroupItem>
                <strong>Size: </strong>
                {item.product_size}
              </ListGroupItem>
              <ListGroupItem>
                <strong>Color: </strong>
                {item.product_color}
              </ListGroupItem>
              </ListGroup>
          }
          {
            item.product_type.toUpperCase() === "THRIFT" && 
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <strong>Price: </strong>
                {item.product_price}$
              </ListGroupItem>
              <ListGroupItem>
                <strong>Size: </strong>
                {item.product_size}
              </ListGroupItem>
              <ListGroupItem>
                <strong>Color: </strong>
                {item.product_color}
              </ListGroupItem>
            </ListGroup>
          }
          </Media.Body>
          <hr></hr>
        </Media>
        <br></br>
        </Card>
      ))}

      </ul>
      </Container>
      </div>
      <div style={footer} className="p-3 mb-2 bg-light text-dark">
      <Row>
        <Col md={{span: 3, offset: 5}}><h3>Total: {this.state.total_price}$</h3></Col>
        <Col md={{ span: 3 }}>
          <StripeCheckout disabled={this.state.total_price === 0? true:false} stripeKey="pk_test_51IbYPpALkSJauFTTXG0pnzGaV7AsybmLz1AljGAbtIktsRRIwa1hqEyuSaWfhQqiXxLaLfqWBfJF18fDbZmWvtCF00Y2oxvsKU"
          token={handleToken}
          billingAddress
          shippingAddress
          amount={items.product_price * 100}
          name={items.product_title}/>
        </Col>
      </Row>
      </div>
      </div>
    );
  };
}

export default Cart;
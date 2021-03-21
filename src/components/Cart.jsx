// @Author - Harpreet Singh

import React, { Component } from "react";
import axios from 'axios';
import ReactDOM from "react-dom";
import { Container, Media, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  // function to remove the items from the cart
  removeFromCart = (product_id) => {
    axios.get("https://rent-my-apparel-backend.herokuapp.com/api/cart/admin/"+product_id)
    this.setState({items: this.state.items.filter(function(item) { 
      return item.product_id !== product_id
    })});
  }

  // load the api when the component loads
  async componentDidMount() {
    const { data: items }  = await axios.get("https://rent-my-apparel-backend.herokuapp.com/api/cart/admin")
    this.setState({ items });
  }

  render = () => {
    const { items } = this.state; 
    // render the cart items on the UI
    return (
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
          <h3>{item.product_title}</h3>
          <br></br>

           <h5 className="text-right">{item.product_price} CAD</h5>
            <br></br>

          <p className="text-right"><span className="font-weight-bold ">Size: {item.product_size}</span></p>
           <br></br>

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
    );
  };
}

export default Cart;
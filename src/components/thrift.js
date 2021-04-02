//Author - Shivani Sharma

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import {
  Card,
  Button,
  CardColumns,
  Row, ListGroup, ListGroupItem
} from "react-bootstrap";
import "../css/thrift.css";
import { getCurrentUserID, isUserAccountComplete, checkUserLogin } from "../helper/functions";
import Dialog from 'react-bootstrap-dialog'

const axios = require('axios');

class Thrift extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      users: [],
      searchResults: []
    };
    this.user_id = getCurrentUserID()

  }

  // function to add the items to  cart
  addtoCart = (product) => {
    if (this.user_id === null){
      this.dialog.showAlert('"Please login first!')
    }
    else{
      const item = {
        user_id: this.user_id,
        product_id: product.product_id,
        product_title: product.product_title,
        product_desc: product.product_desc,
        product_size: product.product_size,
        product_img: product.product_img,
        product_color: product.product_color,
        product_type: product.product_type,
        product_price: product.product_price,
        days: 1
      };
      axios.post("https://rent-my-apparel-backend.herokuapp.com/api/cart/", item);
      this.dialog.showAlert('Added to Cart!')
    }
  };

  //search a component//
  searchProduct = (e) => {
    let product_title = e.target.value;
    axios.get("https://rent-my-apparel-backend.herokuapp.com/api/products/title/"+product_title).then(
      res=>{
        console.log(res);
        this.setState({searchResults: [res.data]})
      }
    ).catch(err=>console.log)
  }

  componentDidMount(){
    axios.get("https://rent-my-apparel-backend.herokuapp.com/api/products/thrift",{
    }).then(res=>{
      console.log(res);
      this.setState({products: res.data.result})
    }).catch(err=>console.log(err))
  }

  render() {
    return (
      <form>
      <Dialog ref={(component) => { this.dialog = component }} />
        <nav class="navbar navbar-light justify-content-between">
          <a class="navbar-brand">
            <div className="row ">
              <div className="col-lg-5 mt-0 mr-5 ml-5 mb-3 "style={{
                fontSize: "medium"
              }} >
                <h2 className="display-4 font-weight-light" >Thrift Store</h2>
                <p className="font-italic text-muted" >
                  Over 700+ Wedding & Party Rentals, Clothing for every event, Men's and Women's clothing to choose from!
                </p>
              </div>
            </div>
          </a>
          <form className="form-inline">
            <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search" onChange={this.searchProduct} />
          </form>
        </nav>

        <div className="card mb-2">
          <h4>Search Results:</h4>
          <Row>
            {
              this.state.searchResults.map(product => {
                return(
                <div className="col-md-4">
                  <Card className="h-100">
                    <Card.Body>
                      <Card.Img
                        class="card-img-top"
                        variant="top"
                        src={product.product_img}
                      />
                      <Card.Text className="text-center">
                        <a href="#">
                        {product.product_title}
                        </a>
                      </Card.Text>
                      <Card.Text className="text-center">
                        Product Color - {product.product_color}
                      </Card.Text>
                      <Card.Text className="description">
                          {product.product_desc}
                      </Card.Text>
                      <Card.Footer>
                      <Card.Subtitle className="text-center">Price: ${product.product_price}</Card.Subtitle>
                      </Card.Footer>
                      <Card.Footer>
                      <Card.Subtitle className="text-center">Size: {product.product_size}
                      </Card.Subtitle>
                      </Card.Footer>
                      <Card.Footer>
                        <div className="col text-center">
                        <Button
                          onClick={() => this.addtoCart(product)}
                          variant="btn btn-primary"
                      >
                        Add to Cart
                      </Button>
                        </div>
                        <br />
                        <div className="col text-center">
                        </div>
                      </Card.Footer>
                    </Card.Body>
                  </Card>
                </div>

                );
              })
            }
            
          </Row>
        </div>

        <div className="card-deck">
          <CardColumns className="mt-0 mr-5 ml-5 mb-5">
            {this.state.products.map((product) => {
              return (
                  <Card
                      style={{ max: "18rem" }}
                      key={product.product_id}
                      value={product.product_id}
                  >
                    <Card.Img
                        className="p-3"
                        variant="top"
                        src={product.product_img}
                    />

                    <Card.Body>
                      <Card.Title> {product.product_title}</Card.Title>
                      <Card.Text>{product.product_desc}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>
                        <strong>Colors: </strong>
                        {product.product_color}
                      </ListGroupItem>
                      <ListGroupItem>
                        <strong>Size: </strong>
                        {product.product_size}
                      </ListGroupItem>
                      <ListGroupItem>
                        <strong>Price: </strong>${product.product_price}
                      </ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                      <Button
                          onClick={() => this.addtoCart(product)}
                          variant="btn btn-primary"
                      >
                        Add to Cart
                      </Button>
                    </Card.Body>
                  </Card>
              );
            })}
          </CardColumns>
        </div>
      </form>
    );
  }
}

export default Thrift;

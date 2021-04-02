//Author - Shivani Sharma

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import {
  Card,
  Button,
  CardColumns,
  Row
} from "react-bootstrap";
import "../css/thrift.css";
import { getCurrentUserID } from "../helper/functions";

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
      alert("Please login first!")
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
      alert("Added to Cart!");
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
        <nav class="navbar navbar-light justify-content-between">
          <a class="navbar-brand"> 
          <strong> Thrift Store</strong>  
          </a>
          <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.searchProduct} />
          </form>
        </nav>

        <div className="card-dick">
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
                        <Button variant="btn btn-outline-success" >Add to Cart</Button>
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
        <hr className="mb-5 mt-5" />
        <div className="card-dick">
          <Row>
            {
              this.state.products.map(product => {
                return(
                <div className="col-md-4 mb-3">
                  <Card key={product.product_id} value={product.product_id} className="h-100">
                    <Card.Body>
                      <Card.Img
                        className="card-img-top"
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
                          variant="btn btn-outline-success"
                        >
                          Add to Cart
                        </Button>
                      </div>
                      <br />
                      <div className="col text-center"></div>
                    </Card.Footer>
                  </Card.Body>
                </Card>
                </div>
              );
            })}
          </Row>
        </div>
      </form>
    );
  }
}

export default Thrift;

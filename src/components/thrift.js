//Author - Shivani Sharma

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import {
  Card,
  Button,
  CardColumns,
} from "react-bootstrap";
import "../css/thrift.css";
const axios = require('axios');

class Thrift extends React.Component {

  constructor(props){
    super(props);
    this.state={
      products: [], 
      users:[],
    }
  }

  //search a component//
  searchProduct = (product_title) => {
    axios.get("https://rent-my-apparel-backend.herokuapp.com/api/products/title/"+product_title).then(
      res=>{
        console.log(res);
        this.setState({products: this.state.products})
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
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.searchProduct.bind(this)} />
          </form>
        </nav>

        <div className="card-deck">
          <CardColumns>
            {
              this.state.products.map(product => {
                return(
                  <Card>
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

                );
              })
            }
            


            
          </CardColumns>
        </div>
      </form>
    );
}
}


export default Thrift;
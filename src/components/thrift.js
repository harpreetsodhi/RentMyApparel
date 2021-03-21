//Author - Shivani Sharma

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import {
  Card,
  Button,
  CardColumns,
} from "react-bootstrap";

const axios = require('axios');

class Thrift extends React.Component {

  constructor(props){
    super(props);
    this.state={
      products: [], 
      users:[],
    }
  }
  componentDidMount(){
    axios.get("https://rent-my-apparel-backend.herokuapp.com/api/products",{
      // headers:{
      //   "content-type": "application/json"
      // }
    }).then(res=>{
      console.log(res);
      this.setState({products: res.data.result})
    }).catch(err=>console.log(err))

  }

  render() {
    return (
      <form>
        <h1 className="text-left">
          <strong>Thrift Store</strong>
        </h1>
        <div className="card-deck">
          <CardColumns>
            {
              this.state.products.map(product => {
                return(
                  <Card>
                    <Card.Body>
                      <Card.Img
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
                      <Card.Text className="text-center">
                      <strong className="text-center">
                          {product.product_desc}
                      </strong>
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
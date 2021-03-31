import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  CardDeck,
  ListGroup,
  ListGroupItem,
  CardColumns,
} from "react-bootstrap";
import Footer from "./footer";

const axios = require("axios");
export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://rent-my-apparel-backend.herokuapp.com/api/products/rental")
      .then((res) => {
        console.log(res);
        this.setState({ products: res.data.result });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <form>
        <div className="card-deck">
          <CardColumns
            className="m-5"
            style={{
              columnCount: 4,
            }}
          >
            {this.state.products.map((product) => {
              return (
                <Card
                  style={{ max: "18rem" }}
                  key={product.product_id}
                  value={product.product_id}
                >
                  <Link to={`/products/${product.product_id}`}>
                  <Card.Img
                    className="p-3"
                    variant="top"
                    src={product.product_img}
                  />
                  </Link>
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
                    <Button variant="primary">Rent Product</Button>
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

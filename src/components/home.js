import React, { Component, useState, handleSelect } from "react";
import styles from "../style.module.css";
import { Carousel } from "react-bootstrap";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  CardDeck,
  CardColumns,
} from "react-bootstrap";
import Thrift from "../components/thrift.js";
import Products from "../components/products.js";
import Contact from "../components/contact.js";
// Ref
// carousel: https://react-bootstrap.github.io/components/carousel/
export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                style={{
                  maxHeight: "400px",
                  objectFit: "cover",
                }}
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1542060748-10c28b62716f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>New Outerwear Collection</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                style={{
                  maxHeight: "400px",
                  objectFit: "cover",
                }}
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1542060748-10c28b62716f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>New Man's Collection</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{
                  maxHeight: "400px",
                  objectFit: "cover",
                }}
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>New Woman's Collection</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div
          style={{
            margin: "15px",
          }}
        >
          <CardColumns
            style={{
              columnCount: "2",
            }}
          >
            <Card className="text-center">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1571867424485-369464ed33cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80/100px160"
              />
              <Card.Body>
              <Card.Subtitle><strong>Rental Store</strong></Card.Subtitle>
                <Card.Text><strong>One Stop for all the apparels at an affordable price.</strong>
                </Card.Text>
                <Button variant="dark" href="/products">
                  Visit Rental Store
                </Button>
              </Card.Body>
            </Card>

            <Card className="text-center">
              <Card.Body>
              <Card.Subtitle><strong>Thrift Store
                </strong></Card.Subtitle>
                <Card.Text><strong>
                Give yourself a never-fading fashion and feel great with fantastic costumes
                </strong>
                </Card.Text>
                <Button variant="dark" href="/thrift">
                  Visit Thrift Store
                </Button>
              </Card.Body>
              <Card.Img
                variant="bottom"
                src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              />
            </Card>
            
            <Card className="text-center"> 
            <Card.Body>
            <Card.Subtitle><strong>Donations</strong></Card.Subtitle>
              <Card.Text><strong>
                </strong>
              </Card.Text>
              <Button variant="dark" href="/contact">
                  Donation Page
                </Button>
              </Card.Body>
              <Card.Img
                variant="bottom"
                src=" https://images.unsplash.com/photo-1603827457577-609e6f42a45e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
              />
            </Card>
          </CardColumns>
        </div>

        <div></div>
      </div>
    );
  }
}

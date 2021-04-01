//Author - Shivani Sharma
import React, { Component, useState, handleSelect } from "react";
import styles from "../style.module.css";
import { Carousel } from "react-bootstrap";
import Footer from "../components/footer.js";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  CardDeck,
  CardColumns,
} from "react-bootstrap";
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
                src="https://images.unsplash.com/photo-1591729652476-e7f587578d9c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
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
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
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
            <Card className="">
              <Card.Img
                style={{
                  height: "300px",
                  objectFit: "cover",
                }}
                variant="top"
                src="https://images.unsplash.com/photo-1571867424485-369464ed33cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80/100px160"
              />
              <Card.Body>
                <Card.Subtitle>
                  <h1>Rental Store</h1>
                </Card.Subtitle>
                <Card.Text>
                  <h5>One Stop for all the apparels at an affordable price.</h5>
                </Card.Text>
                <Button variant="dark" href="/products">
                  Visit Rental Store
                </Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Subtitle>
                  <h1>Thrift Store</h1>
                </Card.Subtitle>
                <Card.Text>
                  <h5>
                    Give yourself a never-fading fashion and feel great with
                    fantastic costumes.
                  </h5>
                </Card.Text>
                <Button variant="dark" href="/thrift">
                  Visit Thrift Store
                </Button>
              </Card.Body>
              <Card.Img
                style={{
                  height: "300px",
                  objectFit: "cover",
                }}
                variant="bottom"
                src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              />
            </Card>
          </CardColumns>
        </div>

        <div
          style={{
            margin: "15px",
          }}
        >
          <Card className="text-center">
            <Card.Body>
              <Card.Subtitle>
                <h1>Donations</h1>
              </Card.Subtitle>
              <Card.Text>
                <h5>“Alone we can do so little; together we can do so much”</h5>
                <h6>-Helen Keller</h6>
              </Card.Text>
              <Button variant="dark" href="/donation">
                Donation Page
              </Button>
            </Card.Body>
            <Card.Img
              style={{
                height: "300px",
                objectFit: "cover",
              }}
              variant="bottom"
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            />
          </Card>
        </div>
        <Footer />
      </div>
    );
  }
}

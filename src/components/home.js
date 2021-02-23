import React, { Component, useState, handleSelect } from "react";
import styles from "../style.module.css";
import { Carousel } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
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
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

import React, { Component } from "react";
import { Container, Row, Col, Nav, Form, Button, Image } from "react-bootstrap";

class Donation extends Component {
  render = () => {
    return (
      <div
        className="p-5 text-center bg-contact-image"
        style={{ backgroundImage: "url(donate.jpg)" }}
      >
        <Form style={{ maxWidth: "1000px" }}>
          <h3 className="text-center">Donate</h3>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridName" className="text-left">
              <Form.Label><strong>Name</strong></Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail" className="text-left">
              <Form.Label><strong>Email</strong></Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridDesc" className="text-left">
            <Form.Label><strong>Description</strong></Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="Enter description" />
          </Form.Group>

          <Form.Group controlId="formGridFile" className="text-left">
            <Form.Label><strong>Image</strong></Form.Label>
            <Form.File id="custom-file" label="Upload image" custom />
          </Form.Group>

          <Button variant="dark" type="submit">Submit</Button>
        </Form>
      </div>
    );
  };
}

export default Donation;
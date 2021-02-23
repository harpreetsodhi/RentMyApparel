import React, { Component } from "react";
import { Container, Row, Col, Nav, Form, Button, Image } from "react-bootstrap";

class Account extends Component {

  render = () => {
    return (
      <Container fluid="sm" style={{ marginTop: "3%", marginBottom: "3%" }}>
        <h3 className="text-center">My Account</h3>
        <Row className="justify-content-md-center" style={{ marginTop: "2%" }}>
          <Col md={12} lg={3} className="text-center" style={{ marginBottom: "2%" }}>
            <Image src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" roundedCircle height="180" width="180" />
          </Col>
          <Col md={12} lg={9}>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter First Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Last Name" />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridProvince">
                  <Form.Label>Province/Territory</Form.Label>
                  <Form.Control as="select" defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>Ontario (ON)</option>
                    <option>Quebec (QC)</option>
                    <option>Nova Scotia (NS)</option>
                    <option>New Brunswick (NB)</option>
                    <option>Manitoba (MB)</option>
                    <option>British Columbia (BC)</option>
                    <option>Prince Edward Island (PE)</option>
                    <option>Saskatchewan (SK)</option>
                    <option>Alberta (AB)</option>
                    <option>Newfoundland and Labrador (NL)</option>
                    <option>Northwest Territories (NT)</option>
                    <option>Yukon (YT)</option>
                    <option>Nunavut (NU)</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPostal">
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Form.Row>

              <Button variant="primary" type="submit">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  };
}

export default Account;
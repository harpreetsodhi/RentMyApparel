import React, { Component } from "react";
import { Container, Row, Col, Nav, Form, Button, Image } from "react-bootstrap";
import "../account.css";

class Account extends Component {

  render = () => {
    return (
      <div className="p-5 text-center bg-account-page"
        style={{ backgroundImage: "url(parcelDelivery.jpeg)" }}>
        <Container className="personal-info" fluid="sm" style={{ marginTop: "3%", marginBottom: "3%" }}>
          <Form>
            <h3 className="text-center">Personal Details</h3>
            <Row className="justify-content-md-center" style={{ marginTop: "2%" }}>
              <Col md={12} lg={3} className="text-center" style={{ marginBottom: "2%" }}>
                <Image src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" roundedCircle height="180" width="180" />
              </Col>
              <Col md={12} lg={9}>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridFirstName" className="text-left">
                    <Form.Label><strong>First Name</strong></Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridLastName" className="text-left">
                    <Form.Label><strong>Last Name</strong></Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridEmail" className="text-left">
                  <Form.Label><strong>Email</strong></Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formGridAddress1" className="text-left">
                  <Form.Label><strong>Address</strong></Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group controlId="formGridAddress2" className="text-left">
                  <Form.Label><strong>Address 2</strong></Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity" className="text-left">
                    <Form.Label><strong>City</strong></Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridProvince" className="text-left">
                    <Form.Label><strong>Province/Territory</strong></Form.Label>
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

                  <Form.Group as={Col} controlId="formGridPostal" className="text-left">
                    <Form.Label><strong>Postal Code</strong></Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Form.Row>
              </Col>
              <Button variant="dark" type="submit">Submit</Button>
            </Row>
          </Form>
        </Container>
      </div>
    );
  };
}

export default Account;
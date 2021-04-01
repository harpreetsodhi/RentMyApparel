// @Author - Rajveen Singh

import React, { Component } from "react";
import { Container, Row, Col, Nav, Form, Button, Image } from "react-bootstrap";
import "../css/account.css";

class Account extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      address: undefined,
      address2: undefined,
      city: undefined,
      province: undefined,
      postalCode: undefined,
      errors: {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        address2: '',
        city: '',
        province: '',
        postalCode: '',
      }
    };
  }

  handleChange = (event) => {
    var firstName = document.getElementById("formGridFirstName").value.trim();
    var lastName = document.getElementById("formGridLastName").value.trim();
    var email = document.getElementById("formGridEmail").value.trim();
    var address = document.getElementById("formGridAddress1").value.trim();
    var address2 = document.getElementById("formGridAddress2").value.trim();
    var city = document.getElementById("formGridCity").value.trim();
    var province = document.getElementById("formGridProvince").value.trim();
    var postalCode = document.getElementById("formGridPostal").value.trim();

    if (firstName && lastName && email && address && city && province && postalCode) {
      event.preventDefault();
      console.log(firstName + lastName + email + address + address2 + city + province + postalCode);
    }
  }

  render = () => {
    return (
      <div className="p-5 text-center bg-account-page"
        style={{ backgroundImage: "url(personalDetails.jpg)" }}>
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
                    <Form.Control type="text" placeholder="Enter First Name" required/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridLastName" className="text-left">
                    <Form.Label><strong>Last Name</strong></Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" required/>
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridEmail" className="text-left">
                  <Form.Label><strong>Email</strong></Form.Label>
                  <Form.Control type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group controlId="formGridAddress1" className="text-left">
                  <Form.Label><strong>Address</strong></Form.Label>
                  <Form.Control placeholder="1234 Main St" required/>
                </Form.Group>

                <Form.Group controlId="formGridAddress2" className="text-left">
                  <Form.Label><strong>Address 2</strong></Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity" className="text-left">
                    <Form.Label><strong>City</strong></Form.Label>
                    <Form.Control required/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridProvince" className="text-left">
                    <Form.Label><strong>Province/Territory</strong></Form.Label>
                    <Form.Control as="select" defaultValue="" required>
                      <option value="">Choose...</option>
                      <option value="on">Ontario (ON)</option>
                      <option value="qc">Quebec (QC)</option>
                      <option value="ns">Nova Scotia (NS)</option>
                      <option value="nb">New Brunswick (NB)</option>
                      <option value="mb">Manitoba (MB)</option>
                      <option value="bc">British Columbia (BC)</option>
                      <option value="pe">Prince Edward Island (PE)</option>
                      <option value="sk">Saskatchewan (SK)</option>
                      <option value="ab">Alberta (AB)</option>
                      <option value="nl">Newfoundland and Labrador (NL)</option>
                      <option value="nt">Northwest Territories (NT)</option>
                      <option value="yt">Yukon (YT)</option>
                      <option value="nu">Nunavut (NU)</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPostal" className="text-left">
                    <Form.Label><strong>Postal Code</strong></Form.Label>
                    <Form.Control required/>
                  </Form.Group>
                </Form.Row>
              </Col>
              <Button variant="dark" type="submit" onClick={this.handleChange}>Submit</Button>
            </Row>
          </Form>
        </Container>
      </div>
    );
  };
}

export default Account;
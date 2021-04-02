// @Author - Rajveen Singh

import React, { Component } from "react";
import { Container, Row, Col, Nav, Form, Button, Image, Alert } from "react-bootstrap";
import "../css/account.css";
import { checkUserLogin, getCurrentUserID } from "../helper/functions";
const axios = require('axios');

class Account extends Component {

  constructor(props) {
    super(props);
    checkUserLogin();
    this.state = {
      firstName: '',
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
      },
      alertColor: undefined,
      alertMessage: undefined,
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/account", { params: { user_id: getCurrentUserID() } })
      .then((res) => {
        console.log(res);
        this.setState({
          firstName: res.data.result.user_firstName,
          lastName: res.data.result.user_lastName,
          email: res.data.result.user_email,
          firstName: res.data.result.user_firstName,
          address: res.data.result.user_address,
          address2: res.data.result.user_address2,
          city: res.data.result.user_city,
          province: res.data.result.user_province,
          postalCode: res.data.result.user_postalCode,
        });

        // https://stackoverflow.com/questions/7373058/changing-the-selected-option-of-an-html-select-element/7373115
        var sel = document.getElementById("formGridProvince");
        var opts = sel.options;
        for (var opt, j = 0; opt = opts[j]; j++) {
          if (opt.value == this.state.province) {
            sel.selectedIndex = j;
            break;
          }
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          alertColor: "danger",
          alertMessage: "Error in fetching user details"
        });
      });
  }

  cancelSubmit = () => {
    window.location.replace("/");
  }

  handleChange = (event) => {
    const { id, value } = event.target;
    var enableButton = false;

    switch (id) {
      case 'formGridFirstName':
        if (value.trim() !== this.state.firstName) {
          enableButton = true;
        }
        break;

      case 'formGridLastName':
        if (value.trim() !== this.state.lastName) {
          enableButton = true;
        }
        break;

      case 'formGridAddress1':
        if (value.trim() !== this.state.address) {
          enableButton = true;
        }
        break;

      case 'formGridAddress2':
        if (value.trim() !== this.state.address2) {
          enableButton = true;
        }
        break;

      case 'formGridCity':
        if (value.trim() !== this.state.city) {
          enableButton = true;
        }
        break;

      case 'formGridProvince':
        if (value.trim() !== this.state.province) {
          enableButton = true;
        }
        break;

      case 'formGridPostal':
        if (value.trim() !== this.state.postalCode) {
          enableButton = true;
        }
        break;

      default:
        break;
    }

    if (enableButton === true) {
      document.getElementById("formGridSubmit").disabled = false;
    }
    else {
      document.getElementById("formGridSubmit").disabled = true;
    }
    // console.log({id, value});
  }

  submitForm = (event) => {
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
      const dataToSend = {
        user_id: getCurrentUserID(),
        firstName: firstName,
        lastName: lastName,
        address: address,
        address2: address2,
        city: city,
        province: province,
        postalCode: postalCode,
        isComplete: true
      };
      console.log(JSON.stringify(dataToSend));

      const data = axios.post('http://localhost:5000/api/account', dataToSend)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            this.setState({
              alertColor: "success",
              alertMessage: "Changes saved successfully!"
            });
          }
          else {
            this.setState({
              alertColor: "danger",
              alertMessage: "Error in saving changes"
            });
          }
        })
        .catch((err) => {
          console.log(err);
          this.setState({
            alertColor: "danger",
            alertMessage: "Error in saving changes"
          });
        });
    }
  }

  render = () => {
    return (
      <div className="p-5 text-center bg-account-page"
        style={{ backgroundImage: "url(personalDetails.jpg)" }}>
        <Container className="personal-info" fluid="sm" style={{ marginTop: "3%", marginBottom: "3%" }}>
          <Form>
            <h3 className="text-center">Personal Details</h3>
            {this.state.alertMessage &&
              <Alert variant={this.state.alertColor}>
                {this.state.alertMessage}
              </Alert>
            }
            <Row className="justify-content-md-center" style={{ marginTop: "2%" }}>
              <Col md={12} lg={3} className="text-center" style={{ marginBottom: "2%" }}>
                <Image src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" roundedCircle height="180" width="180" />
              </Col>
              <Col md={12} lg={9}>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridFirstName" className="text-left">
                    <Form.Label><strong>First Name</strong></Form.Label>
                    <Form.Control type="text" defaultValue={this.state.firstName} onChange={this.handleChange} placeholder="Enter First Name" required />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridLastName" className="text-left">
                    <Form.Label><strong>Last Name</strong></Form.Label>
                    <Form.Control type="text" defaultValue={this.state.lastName} onChange={this.handleChange} placeholder="Enter Last Name" required />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridEmail" className="text-left">
                  <Form.Label><strong>Email</strong></Form.Label>
                  <Form.Control type="email" defaultValue={this.state.email} placeholder="Enter email" disabled />
                </Form.Group>

                <Form.Group controlId="formGridAddress1" className="text-left">
                  <Form.Label><strong>Address</strong></Form.Label>
                  <Form.Control defaultValue={this.state.address} onChange={this.handleChange} placeholder="1234 Main St" required />
                </Form.Group>

                <Form.Group controlId="formGridAddress2" className="text-left">
                  <Form.Label><strong>Address 2</strong></Form.Label>
                  <Form.Control defaultValue={this.state.address2} onChange={this.handleChange} placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity" className="text-left">
                    <Form.Label><strong>City</strong></Form.Label>
                    <Form.Control defaultValue={this.state.city} onChange={this.handleChange} required />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridProvince" className="text-left">
                    <Form.Label><strong>Province/Territory</strong></Form.Label>
                    <Form.Control as="select" onChange={this.handleChange} required> {/*defaultValue={{ value: this.state.province, label: 'Nova Scotia (NS)' }}>*/}
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
                    <Form.Control defaultValue={this.state.postalCode} onChange={this.handleChange} required />
                  </Form.Group>
                </Form.Row>
              </Col>
              <Button variant="dark" type="button" onClick={this.cancelSubmit} style={{ marginRight: "4%" }}>Exit</Button>
              <Button variant="dark" type="submit" onClick={this.submitForm} id="formGridSubmit" disabled>Submit</Button>
            </Row>
          </Form>
        </Container>
      </div>
    );
  };
}

export default Account;
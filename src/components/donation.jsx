import React, { Component } from "react";
import { Container, Row, Col, Nav, Form, Button, Image, Alert } from "react-bootstrap";
const axios = require('axios');

class Donation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentFile: undefined,
      alertColor: undefined,
      alertMessage: undefined
    };
  }

  selectFile = (event) => {
    this.setState({
      currentFile: event.target.files[0]
    });
  }

  getBase64 = (file) => {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.onload = function () { resolve(reader.result); };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  uploadData = (event) => {
    var name = document.getElementById("formGridName").value.trim();
    var email = document.getElementById("formGridEmail").value.trim();
    var desc = document.getElementById("formGridDesc").value.trim();
    var file = this.state.currentFile;

    if (name && email && desc && file) {

      event.preventDefault();
      var promise = this.getBase64(file);
      promise.then((result) => {
        // console.log(result);
        const dataToSend = {
          name: name,
          email: email,
          desc: desc,
          image: result
        }
        const data = axios.post('http://localhost:5000/api/donate', dataToSend)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            this.setState({
              alertColor: "success",
              alertMessage: "Thank you for choosing to donate! We will contact you shortly via email."
            });
          }
          else {
            this.setState({
              alertColor: "danger",
              alertMessage: "Error in submitting form."
            });
          }
        })
        .catch((err) => {
          console.log(err);
          this.setState({
            alertColor: "danger",
            alertMessage: "Error in submitting form."
          });
        });
      });
    }
  }

  render = () => {
    return (
      <div
        className="p-5 text-center bg-contact-image"
        style={{ backgroundImage: "url(donation.jpg)" }}
      >
        <Form style={{ maxWidth: "1000px" }}>
          <h3 className="text-center">Donate</h3>
          {this.state.alertMessage &&
            <Alert variant={this.state.alertColor}>
            {this.state.alertMessage}
            </Alert>
          }
          <Form.Row>
            <Form.Group as={Col} controlId="formGridName" className="text-left">
              <Form.Label><strong>Name</strong></Form.Label>
              <Form.Control type="text" placeholder="Enter Name" required/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail" className="text-left">
              <Form.Label><strong>Email</strong></Form.Label>
              <Form.Control type="email" placeholder="Enter email" required/>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridDesc" className="text-left">
            <Form.Label><strong>Description</strong></Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="Enter description" required/>
          </Form.Group>

          <Form.Group controlId="formGridFile" className="text-left">
            <Form.Label><strong>Image</strong></Form.Label>
            <Form.File id="custom-file" label={this.state.currentFile ? this.state.currentFile.name : "Upload image"} accept="image/*" required custom onChange={this.selectFile} />
          </Form.Group>

          <Button variant="dark" type="submit" onClick={this.uploadData}>Submit</Button>
        </Form>
      </div>
    );
  };
}

export default Donation;
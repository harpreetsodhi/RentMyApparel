import React, {Component, useState} from "react";
import axios from "axios";
import Alert from "react-bootstrap/Alert";

const API_BASE_URL = "https://rent-my-apparel-backend.herokuapp.com/api";

// AUTHOR : NEELKANTH DABHI
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [alertMessage, setAlertMessage] = useState("Enter Details to Signup");
  const [alertColor, setAlertColor] = useState("primary");

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (password == password2) {
      requestToServer();
    } else {
      setAlertColor("danger")
      setAlertMessage('Password do not match')
    }
  };

  const requestToServer = () => {
    if (email.length && password.length && username.length) {
      let payload = {
        user_id: new Date().valueOf(),
        user_name: username,
        user_email: email,
        user_password: password,
      };

      axios
          .post(API_BASE_URL + "/signup", payload,   { 'Content-Type': 'application/x-www-form-urlencoded' })
          .then(function (response) {
            console.log(response)
            if (response.status === 200) {
              setAlertColor("success")
              setAlertMessage(response["data"])
            }
          })
          .catch(function (error) {
            console.log(error.response);
            setAlertColor("danger")
            setAlertMessage(error.response["data"]["msg"])
          });
    } else {
      console.log("Please enter valid username and password");
    }
  };

  return (
      <div
          className="p-5 text-center bg-contact-image"
          style={{backgroundImage: "url(thrift.jpg)"}}
      >
        <div
            className="rows justify-content-center"
            style={{
              margin: "auto",
              marginTop: "3%",
            }}
        >
          <form>
            <h3 className="text-center">
              <strong>Sign Up</strong>
            </h3>
            <Alert variant={alertColor}>
              {alertMessage}
            </Alert>
            <div className="form-group text-left">
              <label>
                <strong>User Name</strong>
              </label>
              <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Enter Username"
                  onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="form-group text-left">
              <label>
                <strong>Email</strong>
              </label>
              <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group text-left">
              <label>
                <strong>Password</strong>
              </label>
              <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group text-left">
              <label>
                <strong>Confirm Password</strong>
              </label>
              <input
                  type="password"
                  className="form-control"
                  placeholder="Re-enter password"
                  onChange={(e) => setPassword2(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-dark btn-block" onClick={handleSubmitClick}>
              Sign Up
            </button>

            <div className="text-center">
              <p className="m-2">
                Already a member? <a href="/login">Sign In</a>
              </p>
              <p>or Sign In with:</p>
              <button type="button" className="btn btn-danger btn-circle  m-1">
                <i className="fa fa-google"></i>
              </button>
              <button type="button" className="btn btn-info btn-circle  m-1">
                <i className="fa fa-twitter"></i>
              </button>
              <button type="button" className="btn btn-dark btn-circle m-1">
                <i className="fa fa-github"></i>
              </button>
              <button type="button" className="btn btn-primary btn-circle  m-1">
                <i className="fa fa-facebook"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
  );
};
export default Signup;

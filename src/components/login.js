import React, { Component, useState, browserHistory } from "react";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import {  isUserAccountComplete  } from "../helper/functions";


// AUTHOR : NEELKANTH DABHI
//  Ref: https://www.positronx.io/build-react-login-sign-up-ui-template-with-bootstrap-4/
const API_BASE_URL = "https://rent-my-apparel-backend.herokuapp.com/api";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState(
    "Enter Credentials to login"
  );
  const [alertColor, setAlertColor] = useState("primary");

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (true) {
      requestToServer();
    } else {
      // props.showError('Passwords do not match');
    }
  };

  const requestToServer = () => {
    if (email.length && password.length) {
      let payload = {
        user_email: email,
        user_password: password,
      };
      console.log(payload);
      axios
        .post(API_BASE_URL + "/login", payload, {
          "Content-Type": "application/x-www-form-urlencoded",
        })
        .then(function (response) {
          console.log(response.status);
          if (response.status === 200) {
            setAlertColor("success");
            setAlertMessage(response["data"]["message"]);
            localStorage.setItem(
              "current_user_id",
              response["data"]["user_id"]
            );
            localStorage.setItem(
              "current_user_name",
              response["data"]["user_name"]
            );
            localStorage.setItem(
              "user_account_completeness",
              response["data"]["isComplete"]
            );
            console.log(isUserAccountComplete())
            if (isUserAccountComplete()){
              window.location.replace('/')
            }else {
              window.location.replace('/account')
            }
          }
        })
        .catch(function (error) {
          console.log();
          setAlertColor("danger");
          setAlertMessage(error.response["data"]["message"]);
        });
    } else {
      console.log("Please enter valid username and password");
    }
  };
  return (
    <div
      className="p-5 text-center bg-contact-image"
      style={{
        backgroundImage: "url(thrift.jpg)",
        width: "100%",
        height: "100%",
      }}
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
            <strong>Log In</strong>
          </h3>
          <Alert variant={alertColor}>{alertMessage}</Alert>
          <div className="form-group text-left">
            <label className="text-left">
              <strong>Email</strong>
            </label>
            <input
              id="email"
              name="email"
              type="email"
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
              id="password"
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group text-left">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                <strong>Remember me</strong>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-dark btn-block"
            onClick={handleSubmitClick}
          >
            Sign In
          </button>

          <div className="text-center">
            <p className="m-2">
              New member? <a href="/signup">Sign Up</a>
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
export default Login;

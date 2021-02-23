import React, { Component } from "react";
import Footer from "./footer";

export default class SignUp extends Component {
  render() {
    return (
      <div
        class="p-5 text-center bg-contact-image"
        style={{ backgroundImage: "url(thrift.jpg)" }}
      >
        <div
          class="rows justify-content-center"
          style={{
            width: "30%",
            margin: "auto",
            marginTop: "3%",
          }}
        >
          <form>
            <h3 className="text-center">
              <strong>Sign Up</strong>
            </h3>
            <div className="form-group text-left">
              <label>
                <strong>User Name</strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Username"
              />
            </div>

            <div className="form-group text-left">
              <label>
                <strong>Email</strong>
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group text-left">
              <label>
                <strong>Password</strong>
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
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
              />
            </div>

            <button type="submit" className="btn btn-dark btn-block">
              Sign Up
            </button>

            <div class="text-center">
              <p class="m-2">
                Already a member? <a href="/login">Sign In</a>
              </p>
              <p>or Sign In with:</p>
              <button type="button" class="btn btn-danger btn-circle  m-1">
                <i class="fa fa-google"></i>
              </button>
              <button type="button" class="btn btn-info btn-circle  m-1">
                <i class="fa fa-twitter"></i>
              </button>
              <button type="button" class="btn btn-dark btn-circle m-1">
                <i class="fa fa-github"></i>
              </button>
              <button type="button" class="btn btn-primary btn-circle  m-1">
                <i class="fa fa-facebook"></i>
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

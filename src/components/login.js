import React, { Component } from "react";
import styles from "../style.module.css";

//  Ref: https://www.positronx.io/build-react-login-sign-up-ui-template-with-bootstrap-4/
export default class Login extends Component {
  render() {
    return (
      <div class="p-5 text-center bg-contact-image" style={{ backgroundImage: "url(thrift.jpg)" }} >
      <div
        class="rows justify-content-center"
        style={{
          width: "30%",
          margin: "auto",
          marginTop: "3%",
        }}
      >
        <form>
          <h3 className="text-center"><strong>Log In</strong></h3>
          <div className="form-group">
            <label><strong>Email</strong></label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label><strong>Password</strong></label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1"><strong>
                Remember me
              </strong></label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Sign In
          </button>

          <div class="text-center">
            <p class="m-2">
              New member? <a href="/signup">Sign Up</a>
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
      </div>
    );
  }
}

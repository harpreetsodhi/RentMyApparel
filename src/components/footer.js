import React, { Component, useState, handleSelect } from "react";

// Ref : https://getbootstrap.com/docs/4.1/examples/product/
export default class Footer extends Component {
  render() {
    return (
      <footer class="container py-5">
        <div class="row">
          <div class="col-12 col-md">
            <a href="/">
              <img
                src={window.location.origin + "/logo_dark.png"}
                width="25"
                height="25"
                alt=""
              />
            </a>
            <small class="d-block mb-3 text-muted">&copy; 2021</small>
          </div>
          <div class="col-6 col-md">
            <h5>Features</h5>
            <ul class="list-unstyled text-small">
              <li>
                <a class="text-muted" href="/login">
                  Login
                </a>
              </li>
              <li>
                <a class="text-muted" href="/signup">
                  Sign Up
                </a>
              </li>
              <li>
                <a class="text-muted" href="/products">
                  Rental Store
                </a>
              </li>
              <li>
                <a class="text-muted" href="/thrift">
                  Thrift Store
                </a>
              </li>
              <li>
                <a class="text-muted" href="#">
                  Account Management
                </a>
              </li>
            </ul>
          </div>

          <div class="col-6 col-md">
            <h5>About Us</h5>
            <ul class="list-unstyled text-small">
            <li>
                <a class="text-muted" href="/faqs">
                Frequently Asked Questions
                </a>
              </li>
              <li>
                <a class="text-muted" href="/team">
                Our Team
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

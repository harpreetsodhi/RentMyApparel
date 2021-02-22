import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Login from "./components/login.js";
import SignUp from "./components/signup.js";
import "font-awesome/css/font-awesome.min.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import thrift from "./components/thrift.js";
import Products from "./components/products";
import styles from "./style.module.css";

class Index extends Component {
  // https://stackoverflow.com/questions/46845543/react-bootstrap-tab-not-changing-content
  constructor(props) {
    super(props);
    this.state = {
      key: 1,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(key) {
    console.log("selected" + key);
    this.setState({ key: key });
  }

  render = () => {
    return (
      <div className={styles.body}>
        <Header className={styles.nav}></Header>

        <div
          class="rows justify-content-center"
          style={{
            width: "20%",
            margin: "auto",
            marginTop: "3%",
          }}
        >
          <Tabs
            class="nav nav-pills justify-content-center"
            activeKey={this.state.key}
            onSelect={this.handleSelect}
            id="tabs"
            style={{
              marginBottom: "5%",
            }}
          >
            <Tab eventKey={1} title="Sign In">
              <div>
                <Login />
              </div>
            </Tab>
            <Tab eventKey={2} title="Sign Up">
              <div>
                <SignUp />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  };
}

ReactDOM.render(<Index />, document.getElementById("root"));

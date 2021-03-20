/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

import {
  Card,
  Button,
  CardColumns,
} from "react-bootstrap";

export default class Thrift extends Component {
  render() {

    return (
      <form>
        <h3 className="text-center">
          <strong>Thrift Store</strong>
        </h3>
        <div class="card-deck">
          <CardColumns>
            <Card>
              <Card.Body>
                <Card.Img
                  variant="top"
                  src=" https://images.unsplash.com/photo-1592878849122-facb97520f9e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                />
                <Card.Subtitle className="text-center">$20</Card.Subtitle>
                <Card.Text className="text-center">
                  <a href="#">
                  Fleece Winter Jacket{" "}
                  </a>
                </Card.Text>
                <Card.Footer>
                  {/* <Button variant="btn btn-outline-primary">Quick View</Button> */}
                  <div className="col text-center">
                  <Button variant="btn btn-outline-success" >Add to Cart</Button>
                  </div>
                  <br />
                  <div className="col text-center">
                  <small className="text-muted" className="text-center">
                    Posted 3 mins ago
                  </small>
                  </div>
                </Card.Footer>
              </Card.Body>
            </Card>



            <Card>
              <Card.Body>
                <Card.Img
                  variant="top"
                  src=" https://images.unsplash.com/photo-1560060141-7b9018741ced?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=799&q=80"
                />
                <Card.Subtitle className="text-center">$10</Card.Subtitle>
                <Card.Text className="text-center">
                <a href="#">
                Winter Cap
                </a>
                  </Card.Text>
                <Card.Footer>
                  <div class="col text-center">
                  <Button
                    variant="btn btn-outline-success"
                    className="text-center">
                    Add to Cart
                  </Button>
                  </div>
                  
                  <br />
                  <div className="col text-center">
                  <small className="text-muted" className="text-center">
                    Posted 10 mins ago
                  </small>
                  </div>
                  
                </Card.Footer>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Img
                  variant="top"
                  src=" https://images.unsplash.com/photo-1581101767113-1677fc2beaa8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                />
                <Card.Subtitle className="text-center">$80</Card.Subtitle>
                <Card.Text className="text-center">
                <a href="#">
                Jimmy Choo Shoes{" "}
                </a>
                </Card.Text>
                <Card.Footer>
                <div className="col text-center">
                <Button variant="btn btn-outline-success">Add to Cart</Button>
                </div>
                  <br />
                  <div className="col text-center">
                  <small className="text-muted">Posted 5 hours ago</small>
                  </div>
                  
                </Card.Footer>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Img
                  variant="top"
                  src=" https://images.unsplash.com/photo-1595910781386-e392beb18b6b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2032&q=80"
                />
                <Card.Subtitle className="text-center">$60</Card.Subtitle>
                <Card.Text className="text-center">
                <a href="#">
                Nike Air Force 1 (White){" "}
                </a>
                </Card.Text>
                <Card.Footer>
                <div className="col text-center">
                <Button
                    variant="btn btn-outline-success"
                    className="text-center"
                  >
                    Add to Cart
                  </Button>
                </div>
                  <br />
                  <div className="col text-center">
                  <small className="text-muted">Posted 3 hours ago</small>
                  </div>
                 
                </Card.Footer>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Img
                  variant="top"
                  src=" https://images.unsplash.com/photo-1606846883685-68d1e88c3e98?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                />
                <Card.Subtitle className="text-center">$12</Card.Subtitle>
                <Card.Text className="text-center">
                <a href="#">
                Fuzzyy Slippers (Pink){" "}
                </a>
                  
                </Card.Text>
                <Card.Footer>
                <div className="col text-center">
                <Button variant="btn btn-outline-success">Add to Cart</Button>
                </div>                  
                  <br />
                  <div className="col text-center">
                  <small className="text-muted">Posted 5 hours ago</small>
                  </div>
                  
                </Card.Footer>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Img
                  variant="top"
                  src=" https://images.unsplash.com/photo-1604176354204-9268737828e4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGFwcGFyZWx8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                />
                <Card.Subtitle className="text-center">$45</Card.Subtitle>
                <Card.Text className="text-center">
                <a href="#">
                Denim Jeans (Set of 3){" "}
                </a>
                </Card.Text>
                <Card.Footer>
                <div className="col text-center">
                <Button variant="btn btn-outline-success">Add to Cart</Button>
                </div>
                <br />
                <div className="col text-center">
                <small className="text-muted">Posted 1 day ago</small>
                </div>
                </Card.Footer>
              </Card.Body>
            </Card>
          </CardColumns>
        </div>
      </form>
    );
  }
}

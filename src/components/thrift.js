import React, { Component } from "react";
import styles from "../style.module.css";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  CardDeck,
  CardColumns,
} from "react-bootstrap";
export default class Thrift extends Component {
  render() {
    return (
      <form>
        <h3 className="text-center">Thrift Store</h3>

        <div class="card text-center">
          <Card.Body>
            <Card.Img src="https://cdni.llbean.net/is/image/wim/504674_1704_41?hei=1095&wid=950&resMode=sharp2&defaultImage=llbstage/A0211793_2" />
            <Card.Subtitle className="text-center">$20</Card.Subtitle>
            <Card.Text className="text-center">
              Fleece Winter Jacket.{" "}
            </Card.Text>
            <Card.Footer>
              <Button variant="btn btn-outline-primary">Quick View</Button>
              <Button variant="btn btn-outline-success">Add to Cart</Button>
              <br />
              <small className="text-muted">Posted 3 mins ago</small>
            </Card.Footer>
          </Card.Body>
        </div>

        <div class="card text-center">
          <Card.Body>
            <Card.Img src="https://www.rei.com/media/product/119920" />
            <Card.Subtitle className="text-center">$10</Card.Subtitle>
            <Card.Text className="text-center">Winter Cap. </Card.Text>
            <Card.Footer>
              <Button variant="btn btn-outline-primary">Quick View</Button>
              <Button variant="btn btn-outline-success">Add to Cart</Button>
              <br />
              <small className="text-muted">Posted 10 mins ago</small>
            </Card.Footer>
          </Card.Body>
        </div>

        <div class="card text-center">
          <Card.Body>
            <Card.Img src=" https://di2ponv0v5otw.cloudfront.net/posts/2020/02/01/5e35d5b131874040de31fa9f/m_5e35d5ba06d59c75b43660d2.jpg" />
            <Card.Subtitle className="text-center">$60</Card.Subtitle>
            <Card.Text className="text-center">
              Nike Air Force 1 (White).{" "}
            </Card.Text>
            <Card.Footer>
              <Button variant="btn btn-outline-primary" className="text-center">
                Quick View
              </Button>
              <Button variant="btn btn-outline-success">Add to Cart</Button>
              <br />
              <small className="text-muted">Posted 3 hours ago</small>
            </Card.Footer>
          </Card.Body>
        </div>

        <div class="card text-center">
          <Card.Body>
            <Card.Img src=" https://www.usmagazine.com/wp-content/uploads/2020/12/amazon-fuzzy-slippers.jpg?w=900&h=506&crop=1&quality=86&strip=all" />
            <Card.Subtitle className="text-center">$12</Card.Subtitle>
            <Card.Text className="text-center">
              Fuzzyy Slippers (Pink).{" "}
            </Card.Text>
            <Card.Footer>
              <Button variant="btn btn-outline-primary" className="text-center">
                Quick View
              </Button>
              <Button variant="btn btn-outline-success">Add to Cart</Button>
              <br />
              <small className="text-muted">Posted 5 hours ago</small>
            </Card.Footer>
          </Card.Body>
        </div>

        <div class="card text-center">
          <Card.Body>
            <Card.Img src=" https://da1urhpfd469z.cloudfront.net/uploads/advertphotos/19/0102/37072019-557-640x853.jpg" />
            <Card.Subtitle className="text-center">$25</Card.Subtitle>
            <Card.Text className="text-center">
              Sequin Dress (Black).{" "}
            </Card.Text>
            <Card.Footer>
              <Button variant="btn btn-outline-primary" className="text-center">
                Quick View
              </Button>
              <Button variant="btn btn-outline-success">Add to Cart</Button>
              <br />
              <small className="text-muted">Posted 1 day ago</small>
            </Card.Footer>
          </Card.Body>
        </div>
      </form>
    );
  }
}

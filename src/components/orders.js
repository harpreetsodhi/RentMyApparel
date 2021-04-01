import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { checkUserLogin } from "../helper/functions";

function Orders(props) {
  checkUserLogin();
  return (
    <div class="container py-5">
      <div class="row mb-4">
        <div class="col-lg-5">
          <h2 class="display-4 font-weight-light">Your Orders</h2>
        </div>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Item Name</th>
            <th>Date</th>
            <th>Ammount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
export default Orders;

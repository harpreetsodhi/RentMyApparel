//Author - Harpreet Singh

import React, { Component } from "react";
import axios from 'axios';
import ReactDOM from "react-dom";
import { Container, Form, Media, Row, Col, Image, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import addDays from 'date-fns/addDays'

class SingleProduct extends Component {

	constructor (props) {
		super(props)
		this.state = {
			eventDate: addDays(new Date(), 3),
			days: 1,
			product: ""
		};
		this.product_id = props.match.params.product_id
	}

	// load the api when the component loads
	async componentDidMount() {
		const { data: product }  = await axios.get("https://rent-my-apparel-backend.herokuapp.com/api/products/"+this.product_id)
    	console.log(product)
		this.setState({ product:product });
	}

	handleEventDateChange = (date) => {
		this.setState({
			eventDate: date
		})
	}

	handleDaysChange = (event) => {
		this.setState({
			days: event.target.value
		});
	}

	onFormSubmit(e) {
		e.preventDefault();
		const item = {
			user_id: "admin",
			product_id: this.product_id,
			eventDate: this.state.eventDate,
			days: this.state.days
		  };
		  axios.post("https://rent-my-apparel-backend.herokuapp.com/api/cart/", item);
		  alert("Added to Cart!");
	}

  render = () => {
	const product = this.state.product; 
	return (
        <Container>
        <Form onSubmit={ this.onFormSubmit }>
            <Form.Row>
            <Col xs={12} md={8} sm={8}>
                <Image className="w-100 p-3" src={product.product_img} rounded />
            </Col>
            <Col xs={12} md={4} sm={4}>
                <h1>{product.product_title}</h1>
                <p>{product.product_desc}</p>
                <p>Size: <span style={{fontWeight: "bold"}}>{product.product_size}</span></p>
				<Form.Group>
					<Form.Label>Event Date: </Form.Label>
					<br></br>
					<DatePicker
						selected={this.state.eventDate}
						onChange={(date) => this.handleEventDateChange(date)}
						minDate = {addDays(new Date(), 3)}
						className="form-control"
					/>
				</Form.Group>
                <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>No of Days</Form.Label>
                    <Form.Control as="select" custom onChange={(event) => this.handleDaysChange(event)}>
                    <option>1</option>
                    <option>3</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>
				<Button variant="primary" type="submit" >Add to Cart</Button>       
            </Col>
            </Form.Row>  
        </Form>
        </Container>
    );
};
}

export default SingleProduct;
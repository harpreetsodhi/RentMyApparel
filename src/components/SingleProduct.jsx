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
			eventDate: new Date(),
			product: null
		};
		this.product_id = props.match.params.product_id
	}

	// load the api when the component loads
	async componentDidMount() {
		axios.get("https://rent-my-apparel-backend.herokuapp.com/api/products/"+this.product_id,{
    }).then(res=>{
      console.log(res.data);
      this.setState({product: res.data.product})
    }).catch(err=>console.log(err))
	}

	handleChange = (date) => {
		this.setState({
			eventDate: date
		})
	}

	onFormSubmit(e) {
		e.preventDefault();
		console.log(this.state.eventDate)
	}

  render = () => {
	return (
        <Container>
        <Form onSubmit={ this.onFormSubmit }>
            <Form.Row>
            <Col xs={12} md={8} sm={8}>
                <Image className="w-100 p-3" src="https://img.ltwebstatic.com/images2_pi/2018/10/19/15399118831972976002.webp" rounded />
            </Col>
            <Col xs={12} md={4} sm={4}>
                <h1>Sequin Skirt</h1>
                <p>Sequin headed unicorn pattern skirt from Shein. Perfect fit and in good condition and can be used for parties.</p>
                <p>Size: <span style={{fontWeight: "bold"}}>Small</span></p>
				<Form.Group>
					<Form.Label>Event Date: </Form.Label>
					<br></br>
					<DatePicker
						selected={addDays(new Date(), 3)}
						onChange={this.handleChange}
						minDate = {addDays(new Date(), 3)}
					/>
				</Form.Group>
                <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>No of Days</Form.Label>
                    <Form.Control as="select" custom>
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
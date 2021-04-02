import React, {Component} from 'react';
import { Accordion, Card, Button } from 'react-bootstrap'

export default class Faqs extends Component{
    render(){
        return(
        <div className="App">
            <div className="row ">
                <div className="col-lg-5 mt-3 mr-5 ml-5 mb-5 " >
                    <h2 className="display-4 font-weight-light">Frequently Asked Questions</h2>

                </div>
            </div>
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                           Current Sanitization Process of all the Items.
                        </Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey="0">
                        <Card.Body>Currently all the Items from the Rental, Thrift and Donation Stores are being cleaned thorougly, keeping the current pandemic situation in mind. Best Disinfectants are used to keep you all safe. </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        What is your Return Policy?
                        </Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey="1">
                        <Card.Body>If you're not 100% satisfied with the items you received, we want to make it right! We will accept returns postmarked within 45 days from the purchase date.</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        How to unsubscribe your promotion emails?
                        </Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey="2">
                        <Card.Body>If you would like to unsubscribe, please contact Manual Service for assistance. Our agent will remove your email address from the recipient lists and you will no longer receive our promotions.</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                        How do I update my email address?
                        </Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey="3">
                        <Card.Body>Really sorry for any inconvenience. But I have to tell you that, we cannot change your registeration email address for your account. This is related with your account safety.</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>

        )
    }
}
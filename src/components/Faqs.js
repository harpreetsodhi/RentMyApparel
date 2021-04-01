import React, {Component} from 'react';
import { Accordion, Card, Button } from 'react-bootstrap'

export default class Faqs extends Component{
    render(){
        return(
        <div className="App">  
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

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="4">
                        How do I reset password?
                        </Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey="4">
                        <Card.Body>If you just want to reset your password, please follow the steps below:

                                1) Log into your account.

                                2) Click "Edit Password", then you can update your password.

                                If you forget your password, please follow the steps below:1) Click "Sign in" on the top right corner of our homepage.2) Select "Forgot Your Password".

                                3) Enter your registered email address in the provided box.4) You may receive the reset email and you will create a new password with the link. Please also check your junk mail folder if you cannot locate our email.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>

        )
    }
}
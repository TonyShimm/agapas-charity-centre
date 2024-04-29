import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";

export default class Contacts extends Component {
  render() {
    return (
      <Container style={{ width: "500px" }}>
        <h1 className="text-center">Contuct us</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email adress</Form.Label>
            <Form.Control type="email" placeholder="Enter email"></Form.Control>
            <Form.Text>We`ll never share your mail with anyone else</Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Example textarea</Form.Label>
            <Form.Controll as="textarea" rows="3"></Form.Controll>
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out"></Form.Check>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit{" "}
          </Button>
        </Form>
      </Container>
    );
  }
}

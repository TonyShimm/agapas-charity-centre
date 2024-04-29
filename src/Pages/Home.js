import React, { Component } from "react";
import CarouselBox from "../Components/CarouselBox";
import { Container, Card, Button, CardGroup } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className="text-center m-4">Our team</h2>
          <CardGroup>
            <Card>
              <Card.Img
                variant="top"
                scr="https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>Lorem</Card.Text>
                <Button variant="primary">About team </Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                scr="https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>Lorem</Card.Text>
                <Button variant="primary">About team </Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                scr="https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>Lorem</Card.Text>
                <Button variant="primary">About team </Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
      </>
    );
  }
}

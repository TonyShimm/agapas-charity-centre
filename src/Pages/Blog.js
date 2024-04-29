import React, { Component } from "react";
import { Media, Container, Col, Row, Card, ListGroup } from "react-bootstrap";

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="9">
            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                scr="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>Lorem text 30</p>
              </Media.Body>
            </Media>
            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                scr="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>Lorem text 30</p>
              </Media.Body>
            </Media>
            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                scr="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>Lorem text 30</p>
              </Media.Body>
            </Media>
          </Col>
          <Col md="3">
            <h5 className="text-center mt-5 ">Categories</h5>
            <Card>
              <List.Group variant="flush">
                <List.Group.Item>Html/CSS</List.Group.Item>
                <List.Group.Item>JavaScript</List.Group.Item>
                <List.Group.Item>Phyton</List.Group.Item>
                <List.Group.Item>C++</List.Group.Item>
              </List.Group>
            </Card>

            <Card className="mt-3">
              <Card.Body>
                <Card.Title>Side widget</Card.Title>
                <Card.Text>Lorem ipsum </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

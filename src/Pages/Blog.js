import React, { Component } from "react";
import { Container, Col, Row, Card, ListGroup } from "react-bootstrap";

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="9">
            <div className="media m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                scr="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
              />
              <div className="media-body">
                <h5>Blog post</h5>
                <p>Lorem text 30</p>
              </div>
            </div>
            <div className="media m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                scr="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
              />
              <div className="media-body">
                <h5>Blog post</h5>
                <p>Lorem text 30</p>
              </div>
            </div>
            <div className="media m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                scr="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
              />
              <div className="media-body">
                <h5>Blog post</h5>
                <p>Lorem text 30</p>
              </div>
            </div>
          </Col>
          <Col md="3">
            <h5 className="text-center mt-5 ">Categories</h5>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>Html/CSS</ListGroup.Item>
                <ListGroup.Item>JavaScript</ListGroup.Item>
                <ListGroup.Item>Phyton</ListGroup.Item>
                <ListGroup.Item>C++</ListGroup.Item>
              </ListGroup>
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

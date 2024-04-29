import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import photo1Img from "../assets/agapas-photo1.jpeg";
import photo2Img from "../assets/agapas-photo2.jpeg";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 " src={photo1Img} alt="Team" />
          <Carousel.Caption>
            <h3>Team image</h3>
            <p>Lorem</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={photo2Img} alt="Team" />
          <Carousel.Caption>
            <h3>Team image</h3>
            <p>Lorem</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={photo1Img} alt="Team" />
          <Carousel.Caption>
            <h3>Team image</h3>
            <p>Lorem</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

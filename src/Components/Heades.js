import React, { component } from "react";
import { Navbar } from "react-bootstrap";
import logo from "./logo192.png";

export default class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.brand href="/">
            <img
              src={logo}
              height="30"
              width="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.link href="/" > Home </Nav.link>
                    </Nav>
                     <Nav.link href="/about" > About </Nav.link>
                </Nav>
                 <Nav.link href="/contacts" > Contacts </Nav.link>
            </Nav>
             <Nav.link href="/blog" > Blog </Nav.link>
        </Nav>
        <Form inline>
                <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                />
                <Button variant="outline-info">Search</Button>
        </Container>
      </Navbar>
    );
  }
}

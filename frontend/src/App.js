import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Row, Col, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./static/img/truck.svg";

function App() {
  return (
    <>
      <Navbar bg="danger" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top text-white"
          />
          {"   "}
          PackXprez
        </Navbar.Brand>
      </Navbar>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md="auto" style={{ height: "90vh" }}>
            <Image
              src={logo}
              style={{ opacity: 0.4, height: "100%" }}
              roundedCircle
              fluid
            />
          </Col>
        </Row>
      </Container>

      <Container style={{ position: "absolute", top: "50%" }} fluid>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Button variant="primary" size="lg">
              Personal
            </Button>
            <Button variant="warning" size="lg" className="ml-4 ">
              Corporate
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import { CommonNav } from "./commons/CommonNav";

import logo from "../static/img/truck.svg";

export const HomePage = () => {
  return (
    <>
      <CommonNav />
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
            <Link to="/login">
              <Button variant="primary" size="lg">
                Personal
              </Button>
            </Link>
            <Link to="/clogin">
              <Button variant="warning" size="lg" className="ml-4 ">
                Corporate
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

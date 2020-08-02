import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button } from "react-bootstrap";

import { CommonNav } from "../commons/CommonNav";
import { BrandBanner } from "../commons/BrandBanner";
import { LoginContainer } from "../commons/LoginContainer";

export const LoginPage = () => {
  return (
    <>
      <CommonNav />
      <Container fluid>
        <BrandBanner ptext="Corporate Login" />
        <LoginContainer>
          <Form className="text-center">
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </LoginContainer>
      </Container>
    </>
  );
};

import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Tabs, Tab, Form, Button } from "react-bootstrap";

import { CommonNav } from "../commons/CommonNav";
import { BrandBanner } from "../commons/BrandBanner";
import { LoginContainer } from "../commons/LoginContainer";

export const LoginPage = () => {
  return (
    <>
      <CommonNav />
      <Container fluid>
        <BrandBanner />
        <LoginContainer>
          <Tabs
            defaultActiveKey="login"
            className="m-auto align-items-center justify-content-center"
          >
            <Tab eventKey="login" title="Login">
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
            </Tab>
            <Tab eventKey="signup" title="Sign Up">
              <Form className="text-center">
                <Form.Group controlId="formBasicName">
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPhone">
                  <Form.Control type="text" placeholder="Phone Number" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Tab>
          </Tabs>
        </LoginContainer>
      </Container>
    </>
  );
};

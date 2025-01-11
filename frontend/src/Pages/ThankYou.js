import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
//import "./thankyou.css";

const ThankYou = () => {
  return (
    <Container className="ThankYou d-flex justify-content-center align-items-center vh-100">
      <Row>
        <Col lg="12">
          <div className="thank_you text-center">
            <span>
              <h1 className="mb-3 fw-semibold">Thank You</h1>
              <h3 className="mb-4">Your Tour is Booked</h3>
              <Link to="/" className="btn btn-primary w-100">
                Back to Home Page
              </Link>
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ThankYou;

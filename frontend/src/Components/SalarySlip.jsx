import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export const SalarySlip = () => {
  return (
    <div className="main-content">
      <div className="salary-container">
        <Container className="height-screen" >
          <Row style={{ backgroundColor: 'orange', padding: '5px', color: 'white' }} >
            <Col lg={6} md={6} className="bg-black" >
              <div>ajdchzjnm35436453</div>
            </Col>
            <Col lg={6} md={6} style={{ backgroundColor: 'green', color: 'white' }} >
              <div>ajdchzjnm</div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

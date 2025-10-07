import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Profile = () => {
  return (
    <div className='main-content'>
        <h3 className='fw-bold'>Profile</h3>
        <hr />
        <Container className=''>
            <Row>
                <Col lg={8} md={6}>
                    <Card>

                    </Card>
                </Col>
                
            </Row>
        </Container>

      
    </div>
  )
}

export default Profile

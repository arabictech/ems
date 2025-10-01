import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { NavLink } from 'react-router-dom';


const RegisterForm = () => {
    return (
        <div className='main-content'>
            <div className='login-container'>
                <h1 className='Add'>Register</h1>
                <Form className='p-4'>
                    <Row className="mb-4">
                        <Form.Group as={Col} controlId="formGridUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control placeholder="Enter Username" />
                        </Form.Group>
                    </Row>
                    <Row className='mb-4'>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-4">
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-4">
                        <Form.Group as={Col} controlId="formGridConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" />
                        </Form.Group>
                    </Row>
                  
                    <Button className='btn1 m-auto mb-4 w-100' variant="primary" type="submit">
                        Register
                    </Button>
                    <span className='d-flex justify-content-center gap-1'>Already have an account <NavLink to='/login'>Click here</NavLink></span>
                </Form>
            </div>

        </div>
    )
}

export default RegisterForm

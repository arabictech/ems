import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { NavLink } from 'react-router-dom';



const Login = () => {

    return (
        <div className='main-content'>
            <div className='login-container'>
                <h1 className='Add'>Login</h1>
                <Form className='p-4'>
                    <Row className="mb-4">
                        <Form.Group as={Col} controlId="formGridUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control placeholder="Enter Username" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-4">
                        <Form.Group as={Col} controlId="formGrid">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" />
                        </Form.Group>
                    <span className='d-flex justify-content-end gap-1 mt-1'><NavLink className=''>Forgot Password?</NavLink></span>

                    </Row>
                    {/* <span>Doesnt have an Account ?<link rel="" href="" >sdfhj </link></span> */}
                    <Button className='btn1 mb-4 w-100' variant="primary" type="submit">
                        Login
                    </Button>
                    <span className='d-flex justify-content-center gap-1'>Does't hava an account <NavLink>Click here</NavLink></span>
                </Form>

            </div>

        </div>
    )
}

export default Login

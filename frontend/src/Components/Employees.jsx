import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const Employee = () => {
    return (

        <div className='main-content'>
            <div className='form-container '>

                <Form className='p-4'>
                    <h1 className='Add'>Add Employee</h1>
                    <Row className="mb-4">
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control placeholder="First name" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control placeholder="Last name" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-4">

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>


                    </Row>
                    <Row className='mb-4'>
                        <Form.Group as={Col} controlId="formGridPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="number" placeholder="Phone Number" />
                        </Form.Group>
                    </Row>
                    <Row className='mb-4'>
                        <Form.Group as={Col} controlId="formGrid">
                            <Form.Label>Department</Form.Label>
                            <Form.Select>
                                <option>Choose...</option>
                                <option>IT</option>
                                <option>Finance</option>
                                <option>HR</option>
                                <option>Sales</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGrid">
                            <Form.Label>Designation</Form.Label>
                            <Form.Select>
                                <option>Choose...</option>
                                <option>Manager</option>
                                <option>Team Lead</option>
                                <option>Senior Developer</option>
                                <option>Junior Developer</option>
                                <option>Intern</option>
                            </Form.Select>
                        </Form.Group>



                    </Row>
                    <Row className='mb-4'>
                        <Form.Group as={Col} controlId="formGrid">
                            <Form.Label>Salary</Form.Label>
                            <Form.Control type="number" placeholder="Salary" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGrid">
                            <Form.Label>Joining Date</Form.Label>
                            <Form.Control type="date" placeholder="Joining Date" />
                        </Form.Group>
                    </Row>
                    

                    <Button className='btn1 mb-4' variant="primary" type="submit">
                        Add Employee
                    </Button>
                </Form>
            </div>
        </div>

    )
}

export default Employee

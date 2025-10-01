import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const LeaveForm = () => {
    return (
        <div className='main-content'>
            <div className='form-container'>
                <Form className='p-4'>
                    <h1 className='Add'>Apply Leave</h1>
                    <Row className="mb-4">
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>Leave Type</Form.Label>
                            <Form.Select>
                                <option>Choose...</option>
                                <option>Sick Leave</option>
                                <option>Casual Leave</option>
                                <option>Paid Leave</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="mb-4">
                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control type="date" placeholder="Start Date" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>End Date</Form.Label>
                            <Form.Control type="date" placeholder="End Date" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-4">
                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Reason</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Reason for Leave" />
                        </Form.Group>
                    </Row>
                    <Button className='btn1 w-100' variant="primary" type="submit">
                        Apply
                    </Button>
                </Form>
            </div>

        </div>
    )
}

export default LeaveForm

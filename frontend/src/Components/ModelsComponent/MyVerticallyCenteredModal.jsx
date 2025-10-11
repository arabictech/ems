import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { useState } from 'react';

const MyVerticallyCenteredModal = (props) => {

    //   const [startDate, setStartDate] = useState(new Date());

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Select Person</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                            <option value="5">Five</option>
                            <option value="6">Six</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Select Date</Form.Label>
                        {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                        <Form.Control type="date" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Attendance Type</Form.Label>
                         <Form.Select aria-label="Default select example">
                            {/* <option>Open this select menu</option> */}
                            <option value="1">Full Day Present</option>
                            <option value="2">Half Day Present</option>
                            <option value="3">Full Day Absence</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Edit Reason</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button className='d-flex ' style={{backgroundColor:"gray", borderRadius:'10px',fontSize:"14px"}} onClick={props.onHide}>Done</Button>
                <Button className='btn1' onClick={props.onHide} >Save</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default MyVerticallyCenteredModal
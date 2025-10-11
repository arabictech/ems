import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function TextControlsExample() {
    return (
        <Form className='main-content' >
            <div className='d-flex justify-content-center' >
                <h2>Manage Attendance</h2>
            </div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                <div className='d-flex justify-content-between' >
                    <Form.Control type="email" placeholder="Search By Employee ID" className='w-25' />
                    <Form.Text className="text-muted">
                        We'll never share your name with anyone else.
                    </Form.Text>
                    <Button variant="primary">Click Me</Button>
                </div>
            </Form.Group>
        </Form>
    );
}

export default TextControlsExample;
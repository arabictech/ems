import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useFormik } from 'formik';
import * as yup from "yup";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

let validate = yup.object({
    first_name: yup.string().required("First name is required!"),
    last_name: yup.string().required("Last name is required!"),
    email: yup.string().required("Email is required!").email("please enter valid email!"),
    phone: yup.string().required("Contact number is required!").matches(/^[6-9]{1}[0-9]{9}$/, "please enter valid number!"),
    department: yup.string().required("Department is required!"),
    designation: yup.string().required("Designation is required!"),
    salary: yup.string().required("Salary is required!"),
    join_date: yup.string().required("Joining Date is required!"),
})

const AddEmployeeForm = (props) => {

    let inpFields = {
        emp_id:'',
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        gender:'',
        department: "",
        designation: "",
        salary: "",
        join_date: "",
    }

    const { errors, values, touched, handleSubmit, handleChange, handleBlur, resetForm,setValues } = useFormik({
        initialValues: inpFields,
        validationSchema: validate,
        onSubmit: async (values) => {

            if(values.emp_id){
                try {
                    await axios.put(`http://localhost:8080/api/employees/${values.emp_id}`,values)
                    resetForm();
                    toast.success('Employee Update Successfully')
                    setTimeout(()=>{
                        sessionStorage.removeItem('edit')
                    })
                } catch (err) {
                    toast.error('Error while adding employee')
                    console.error("Error while adding employee:", err);
                }
            }
            else{
                try {
                const res = await axios.post("http://localhost:8080/api/employees", values);
                toast.success('Employee Added Successfully')
                resetForm();
                console.log("Employee Added Successfully:", res.data);
                } catch (err) {
                    toast.error('Error while adding employee')
                    console.error("Error while adding employee:", err);
                }
            }
            
        }
    });

    useEffect(()=>{
        const editinfo = JSON.parse(sessionStorage.getItem('edit'))
        
        if(editinfo){
            setValues(editinfo)
        }
    },[])
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton onClick={()=>{sessionStorage.removeItem('edit')}}>
                <Modal.Title id="contained-modal-title-vcenter">
                    {values.emp_id ? 'Edit Employee' : 'Add Employee'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className='p-4' onSubmit={handleSubmit} >

                    <Row className="mb-4">
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control placeholder="First name" name='first_name' value={values.first_name} onChange={handleChange} onBlur={handleBlur} />
                            {(errors.first_name && touched.first_name) ? <span className='text-danger' style={{ fontSize: 12 }} >{errors.first_name}</span> : null}
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control placeholder="Last name" name='last_name' value={values.last_name} onChange={handleChange} onBlur={handleBlur} />
                            {(errors.last_name && touched.last_name) ? <span className='text-danger' style={{ fontSize: 12 }} >{errors.last_name}</span> : null}
                        </Form.Group>
                    </Row>

                    <Row className="mb-4">

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                            {(errors.email && touched.email) ? <span className='text-danger' style={{ fontSize: 12 }} >{errors.email}</span> : null}
                        </Form.Group>


                    </Row>
                    <Row className='mb-4'>
                        <Form.Group as={Col} controlId="formGridPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="Phone Number" name='phone' value={values.phone} onChange={handleChange} onBlur={handleBlur} />
                            {(errors.phone && touched.phone) ? <span className='text-danger' style={{ fontSize: 12 }} >{errors.phone}</span> : null}
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId='formGrid' className='d-flex gap-2'>
                            <div className='d-flex' >
                                <Form.Label>Gender : </Form.Label>
                            </div>
                            <Form.Check type="radio" label="Male" value="male" id='male' name='gender' onChange={handleChange} onBlur={handleBlur}></Form.Check>
                            <Form.Check type="radio" label="Female" value="female" id="female" name='gender' onChange={handleChange} onBlur={handleBlur}></Form.Check>
                        </Form.Group>
                    </Row>
                    <Row className='mb-4'>
                        <Form.Group as={Col} controlId="formGrid">
                            <Form.Label>Department</Form.Label>
                            <Form.Select name='department' value={values.department} onChange={handleChange} onBlur={handleBlur} >
                                <option value="" >Choose...</option>
                                <option value="IT" >IT</option>
                                <option value="Finance" >Finance</option>
                                <option value="HR" >HR</option>
                                <option value="Sales" >Sales</option>
                            </Form.Select>
                            {(errors.department && touched.department) ? <span className='text-danger' style={{ fontSize: 12 }} >{errors.department}</span> : null}
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGrid">
                            <Form.Label>Designation</Form.Label>
                            <Form.Select name='designation' value={values.designation} onChange={handleChange} onBlur={handleBlur} >
                                <option value="" >Choose...</option>
                                <option value="Manager" >Manager</option>
                                <option value="Team Lead" >Team Lead</option>
                                <option value="Senior Developer" >Senior Developer</option>
                                <option value="Junior Developer" >Junior Developer</option>
                                <option value="Intern" >Intern</option>
                            </Form.Select>
                            {(errors.designation && touched.designation) ? <span className='text-danger' style={{ fontSize: 12 }} >{errors.designation}</span> : null}
                        </Form.Group>



                    </Row>
                    <Row className='mb-4'>
                        <Form.Group as={Col} controlId="formGrid">
                            <Form.Label>Salary</Form.Label>
                            <Form.Control type="number" placeholder="Salary" name='salary' value={values.salary} onChange={handleChange} onBlur={handleBlur} />
                            {(errors.salary && touched.salary) ? <span className='text-danger' style={{ fontSize: 12 }} >{errors.salary}</span> : null}
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGrid">
                            <Form.Label>Joining Date</Form.Label>
                            <Form.Control type="date" placeholder="Joining Date" name='join_date' value={values.join_date} onChange={handleChange} onBlur={handleBlur} />
                            {(errors.join_date && touched.join_date) ? <span className='text-danger' style={{ fontSize: 12 }} >{errors.join_date}</span> : null}
                        </Form.Group>

                    </Row>


                    <Button className='btn1 w-100' variant="primary" type="submit">
                        {values.emp_id ? 'Edit' : 'Add'}
                    </Button>
                </Form>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            </Modal.Body>

        </Modal>
    )
}

export default AddEmployeeForm
import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useFormik } from 'formik';
import * as yup from "yup";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

let validate = yup.object({
    first_name: yup.string().required("First name is required!"),
    last_name: yup.string().required("Last name is required!"),
    email: yup.string().required("Email is required!").email("please enter valid email!"),
    phone: yup.string().required("Contact number is required!").matches(/^[6-9]{1}[0-9]{9}$/,"please enter valid number!"),
    department: yup.string().required("Department is required!"),
    designation: yup.string().required("Designation is required!"),
    salary: yup.string().required("Salary is required!"),
    // join_date: yup.string().required("Joining Date is required!"),
})

const Employee = () => {

    let inpFields = {
        first_name:"",
        last_name:"",
        email:"",
        phone:"",
        department:"",
        designation:"",
        salary:"",
        join_date:"",
    }
    
    const {errors,values,touched,handleSubmit,handleChange,handleBlur,resetForm} = useFormik({
        initialValues:inpFields,
        validationSchema: validate,
        onSubmit :async (values) => {
         //   console.log(values)
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
    });

    return (
        <div className='main-content'>
            <div className='form-container '>

                <Form className='p-4' onSubmit={handleSubmit} >
                    <h1 className='Add'>Add Employee</h1>
                    <Row className="mb-4">
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control placeholder="First name" name='first_name' value={values.first_name} onChange={handleChange} onBlur={handleBlur}  />
                            {(errors.first_name && touched.first_name) ? <span className='text-danger' style={{fontSize:12}} >{errors.first_name}</span> : null}
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control placeholder="Last name" name='last_name' value={values.last_name} onChange={handleChange} onBlur={handleBlur} />
                            {(errors.last_name && touched.last_name) ? <span className='text-danger' style={{fontSize:12}} >{errors.last_name}</span> : null}
                        </Form.Group>
                    </Row>

                    <Row className="mb-4">

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                            {(errors.email && touched.email) ? <span className='text-danger' style={{fontSize:12}} >{errors.email}</span> : null}
                        </Form.Group>


                    </Row>
                    <Row className='mb-4'>
                        <Form.Group as={Col} controlId="formGridPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="Phone Number" name='phone' value={values.phone} onChange={handleChange} onBlur={handleBlur} />
                            {(errors.phone && touched.phone) ? <span className='text-danger' style={{fontSize:12}} >{errors.phone}</span> : null}
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
                            {(errors.department && touched.department) ? <span className='text-danger' style={{fontSize:12}} >{errors.department}</span> : null}
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
                            {(errors.designation && touched.designation) ? <span className='text-danger' style={{fontSize:12}} >{errors.designation}</span> : null}
                        </Form.Group>



                    </Row>
                    <Row className='mb-4'>
                        <Form.Group as={Col} controlId="formGrid">
                            <Form.Label>Salary</Form.Label>
                            <Form.Control type="number" placeholder="Salary" name='salary' value={values.salary} onChange={handleChange} onBlur={handleBlur} />
                            {(errors.salary && touched.salary) ? <span className='text-danger' style={{fontSize:12}} >{errors.salary}</span> : null}
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGrid">
                            <Form.Label>Joining Date</Form.Label>
                            <Form.Control type="date" placeholder="Joining Date" name='join_date' value={values.join_date} onChange={handleChange} onBlur={handleBlur} />
                            {(errors.join_date && touched.join_date) ? <span className='text-danger' style={{fontSize:12}} >{errors.join_date}</span> : null}
                        </Form.Group>
                        
                    </Row>
                    

                    <Button className='btn1 w-100' variant="primary" type="submit">
                        Add Employee
                    </Button>
                </Form>

                <Toaster
                position="top-center"
                reverseOrder={false}
                />
            </div>
        </div>

    )
}

export default Employee

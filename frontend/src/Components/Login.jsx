import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';



const Login = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .min(5, 'Must be at least 5 characters')
                .max(15, 'Must be 15 characters or less')
                .required('username is required'),

            password: Yup.string()
                .required('password is Required')
        }),


    });
    return (
        <div className='main-content'>
            <div className='login-container'>
                <h1 className='Add'>Login</h1>
                <Form className='p-4' onSubmit={formik.handleSubmit}>
                    <Row className="mb-4">
                        <Form.Group as={Col} controlId="formGridUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                placeholder="Enter Username"
                                name="username"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.username}
                                isInvalid={formik.touched.username && formik.errors.username}
                            />


                             {(formik.errors.username && formik.touched.username) ? <span className='text-danger' style={{fontSize:12}} >{formik.errors.username}</span> : null}
                        </Form.Group>
                    </Row>
                    <Row className="mb-4">
                        <Form.Group as={Col} controlId="formGrid">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter Password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                name="password"
                                isInvalid={formik.touched.password && formik.errors.password}
                            />
                             {(formik.errors.password && formik.touched.password) ? <span className='text-danger' style={{fontSize:12}} >{formik.errors.password}</span> : null}

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

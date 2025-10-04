import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const RegisterForm = () => {
    const formik = useFormik({
        initialValues: {
            username: '',   
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .min(5, 'Must be at least 5 characters')
                .max(15, 'Must be 15 characters or less')
                .required('username is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .required('password is Required')
                .matches(`^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$`, 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm Password is required')
                .matches(`^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$`, 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'),
        }),
    });
    return (
        <div className='main-content'>
            <div className='login-container'>
                <h1 className='Add'>Register</h1>
                <Form className='p-4' onSubmit={formik.handleSubmit}>
                    <Row className="mb-4">
                        <Form.Group as={Col} controlId="formGridUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control placeholder="Enter Username" 
                            name='username' 
                            type="text" 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur} 
                            value={formik.values.username} 
                            isInvalid={formik.touched.username && formik.errors.username}
                            />
                            {(formik.errors.username && formik.touched.username) ? <span className='text-danger' style={{fontSize:12}} >{formik.errors.username}</span> : null}
                        </Form.Group>
                    </Row>
                    <Row className='mb-4'>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                            type="email" 
                            placeholder="Enter Email" 
                            name='email' 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            isInvalid={formik.touched.email && formik.errors.email}
                            />
                            {(formik.errors.email && formik.touched.email) ? <span className='text-danger' style={{fontSize:12}} >{formik.errors.email}</span> : null}  
                        </Form.Group>
                    </Row>
                    <Row className="mb-4">
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                            type="password" 
                            placeholder="Enter Password" 
                            name='password'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            isInvalid={formik.touched.password && formik.errors.password}
                            />
                            {(formik.errors.password && formik.touched.password) ? <span className='text-danger' style={{fontSize:12}} >{formik.errors.password}</span> : null}
                        </Form.Group>
                    </Row>
                    <Row className="mb-4">
                        <Form.Group as={Col} controlId="formGridConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control 
                            type="password" 
                            placeholder="Confirm Password"
                            name='confirmPassword' 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur} 
                            value={formik.values.confirmPassword} 
                            isInvalid={formik.touched.confirmPassword && formik.errors.confirmPassword} 
                            />
                            {(formik.errors.confirmPassword && formik.touched.confirmPassword) ? <span className='text-danger' style={{fontSize:12}} >{formik.errors.confirmPassword}</span> : null}
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

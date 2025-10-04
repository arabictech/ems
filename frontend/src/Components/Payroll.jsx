import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Payroll = () => {
    const formik = useFormik({
        initialValues: {
            employeeId: '',
            month: '',
            salary: '',
            deductions: '',
            netSalary: ''
        },
        validationSchema: Yup.object({
            employeeId: Yup.number()
                .required('Employee ID is required'),
            month: Yup.string()
                .required('Month is required'),
            salary: Yup.number()
                .required('Salary is required'),
            deductions: Yup.number()
                .required('Deductions is required'),
            netSalary: Yup.number()
                .required('Net Salary is required')
        }),
        onSubmit: values => {
            console.log(values);
        }
    });



    return (
        <div className='main-content'>
            <div className='form-container'>
                <h1 className='Add'>Payroll</h1>
                <Form className='p-4' onSubmit={formik.handleSubmit}>
                    <Row className="mb-4">
                        <Form.Group as={Col} controlId="formGrid">
                            <Form.Label>Employee ID</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Employee ID"
                                name='employeeId'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.employeeId}
                                isInvalid={formik.touched.employeeId && formik.errors.employeeId}
                            />
                            {(formik.errors.employeeId && formik.touched.employeeId) ? <span className='text-danger' style={{ fontSize: 12 }} >{formik.errors.employeeId}</span> : null}
                        </Form.Group>
                    </Row>
                    <Row className="mb-4">
                        <Form.Group as={Col} controlId="formGrid">
                            <Form.Label>Month</Form.Label>
                            <Form.Control
                                type="month"
                                placeholder="Month"
                                name='month'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.month}
                                isInvalid={formik.touched.month && formik.errors.month}
                            />
                            {(formik.errors.month && formik.touched.month) ? <span className='text-danger' style={{ fontSize: 12 }} >{formik.errors.month}</span> : null}

                        </Form.Group>
                    </Row>
                    <Row className="mb-4">
                        <Form.Group as={Col} controlId="formGrid">
                            <Form.Label>Salary</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Salary"
                                name='salary'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.salary}
                                isInvalid={formik.touched.salary && formik.errors.salary}
                            />
                            {(formik.errors.salary && formik.touched.salary) ? <span className='text-danger' style={{ fontSize: 12 }} >{formik.errors.salary}</span> : null}

                        </Form.Group>
                    </Row>
                    <Row className="mb-4">
                        <Form.Group as={Col} controlId="formGrid">
                            <Form.Label>Deductions</Form.Label>
                            <Form.Control
                                type="text"
                                name='deductions'
                                placeholder="Deductions"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.deductions}
                                isInvalid={formik.touched.deductions && formik.errors.deductions}
                            />
                            {(formik.errors.deductions && formik.touched.deductions) ? <span className='text-danger' style={{ fontSize: 12 }} >{formik.errors.deductions}</span> : null}

                        </Form.Group>
                        <Form.Group as={Col} controlId="formGrid">
                            <Form.Label>Net Salary</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Bonuses"
                                name='netSalary'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.netSalary}
                                isInvalid={formik.touched.netSalary && formik.errors.netSalary}
                            />
                            {(formik.errors.netSalary && formik.touched.netSalary) ? <span className='text-danger' style={{ fontSize: 12 }} >{formik.errors.netSalary}</span> : null}
                        </Form.Group>
                    </Row>
                    <Button className='btn1 w-100' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>


        </div>
    )
}

export default Payroll

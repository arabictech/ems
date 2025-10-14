import React from 'react'
import Card from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/esm/CardBody';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table"
import { AttendanceChart, LeaveChart, SalaryChart } from './chart';

const Report = () => {
    return (
        <div className='main-content'>
            <div className='dashboard-container'>
                <Row>
                    <Col lg={4} md={6}>
                        <Card>
                            <CardBody>
                                <h5 className='fw-bold'>Attendance Rate :</h5>
                                <h1 className='fw-bold mt-3'>90%</h1>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={4} md={6}>
                        <Card>
                            <CardBody>
                                <h5 className='fw-bold'>Leave Rate :</h5>
                                <h1 className='fw-bold mt-3'>8.08%</h1>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={4} md={6}>
                        <Card>
                            <CardBody>
                                <h5 className='fw-bold'>Monthly Salary Total :</h5>
                                <h1 className='mt-3 fw-bold'>Rs 30,000/-</h1>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className="dashboard-container">

                <Row>
                    <Col lg={12} md={6}>
                        <Card className='overflow-auto'>
                            <CardBody>
                                <h5 className='fw-bold'>Individual employee report :</h5>
                                <Table className='mt-3 text-center'>
                                    <thead>
                                        <tr>
                                            <th>EmployeeID</th>
                                            <th>Name</th>
                                            <th>Month</th>
                                            <th>Total Working Days</th>
                                            <th>Leaves Taken</th>
                                            <th>Salary Status</th>
                                            <th>Last Salary Paid</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>kamya</td>
                                            <td>October</td>
                                            <td>24</td>
                                            <td>6</td>
                                            <td>Paided</td>
                                            <td>4/10/2025</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>kamya</td>
                                            <td>October</td>
                                            <td>24</td>
                                            <td>6</td>
                                            <td>Paided</td>
                                            <td>4/10/2025</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>kamya</td>
                                            <td>October</td>
                                            <td>24</td>
                                            <td>6</td>
                                            <td>Paided</td>
                                            <td>4/10/2025</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>kamya</td>
                                            <td>October</td>
                                            <td>24</td>
                                            <td>6</td>
                                            <td>Paided</td>
                                            <td>4/10/2025</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>kamya</td>
                                            <td>October</td>
                                            <td>24</td>
                                            <td>6</td>
                                            <td>Paided</td>
                                            <td>4/10/2025</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>kamya</td>
                                            <td>October</td>
                                            <td>24</td>
                                            <td>6</td>
                                            <td>Paided</td>
                                            <td>4/10/2025</td>
                                        </tr>


                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className="dashboard-container">
                <Row>
                    <Col lg={4} md={6}>
                        <Card>
                            <CardBody>
                                <h6 className='fw-bold'>Monthly Attendance Trends :</h6>
                                <div className='d-flex justify-content-center'>
                                    <AttendanceChart />
                                </div>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={4} md={6}>
                        <Card>
                            <CardBody>
                                <h6 className='fw-bold'>Leave Type Distribution :</h6>
                                <div className='d-flex justify-content-center'>
                                    <LeaveChart />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={4} md={6}>
                        <Card>
                            <CardBody>
                                <h6 className='fw-bold'>Salary Growth Over Quarters :</h6>
                                <div className='d-flex justify-content-center'>
                                    <SalaryChart />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>



        </div>
    )
}

export default Report

import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardBody from 'react-bootstrap/esm/CardBody';
import { BsThreeDotsVertical } from "react-icons/bs";

import { Chart as ChartJS } from "chart.js/auto"
import { Doughnut } from 'react-chartjs-2';
import { HiMiniCalendarDateRange } from "react-icons/hi2";
import Chart from './chart';
import Table from 'react-bootstrap/Table';
import { TiArrowSortedDown } from "react-icons/ti";

const AdminDashboard = () => {
    const [modalShow, setModalShow] = React.useState(false);
    console.log("modalShow---------------", modalShow);

    const updateData = () => {
        setModalShow(true)
    }

    return (
        <div className='main-content'>


            <div className='dashboard-container'>
                <Row>

                    <Col lg={4} md={6} className=''>
                        <Card className='h-100'>
                            <CardBody >
                                <div className='d-flex justify-content-between'>
                                    <h6>Total Employees</h6>
                                    <BsThreeDotsVertical onClick={updateData} />

                                </div>
                                <h1 className='fw-bold mt-2 P-2' >21</h1>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={4} md={6}>
                        <Card className='h-100'>
                            <CardBody>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={4} md={6}>
                        <Card>
                            <CardBody>
                                <div className=''>
                                    <h6>Leave Management</h6>
                                    <Button className='w-100 m-1 text-start'>Pending Requests</Button>
                                    <Button className='w-100 m-1 text-start'>Approved</Button>
                                    <Button className='w-100 m-1 text-start'>Denied</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className='dashboard-container '>

                <Row>
                    <Col lg={7} md={6}>
                        <Card className='overflow-auto'>
                            <CardBody>
                                <h5 className='fw-bold'>Employee Overview</h5>
                                <div className='w-100 rounded-2' variant='primary' style={{ backgroundColor: '#cbbae9', border: 'none' }}>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Start-Date</th>
                                                <th>End-Date</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>kamya</td>
                                                <td>12/9/23</td>
                                                <td>12/9/23</td>
                                                <td>Approved</td>
                                            </tr>
                                            <tr>
                                                <td>kamya</td>
                                                <td>12/9/23</td>
                                                <td>12/9/23</td>
                                                <td>Approved</td>
                                            </tr>

                                        </tbody>
                                    </Table>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={5} md={6}>
                        <Card>
                            <CardBody>
                                <div className=''>
                                    <div className='d-flex justify-content-between' >
                                        <h5 className='fw-bold'>Employee Attendance</h5>
                                        <Button className='secondary rounded-3' style={{ backgroundColor: 'lightgray', color: 'black', borderColor: 'gray', fontSize: '12px' }} variant='primary'><HiMiniCalendarDateRange /> 13/10/25</Button>
                                    </div>
                                    <div style={{ height: '300px' }} className='d-flex justify-content-center'>
                                        <Chart />

                                    </div>
                                </div>
                                <Button className='btn1 w-100' variant='primary'>View More Details</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className='dashboard-container'>
                <Row>
                    <Col lg={12} md={6}>
                    <Card>
                        <CardBody>

                        </CardBody>
                    </Card>
                    </Col>
                </Row>

            </div>



        </div>
    )
}

export default AdminDashboard

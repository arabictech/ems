import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardBody from 'react-bootstrap/esm/CardBody';
import { BsThreeDotsVertical } from "react-icons/bs";
import Detail from './ModelsComponent/Detail';



const AdminDashboard = () => {
    const [modalShow, setModalShow] = React.useState(false);
    console.log("modalShow---------------", modalShow);

    const updateData = () => {
        setModalShow(true)
    }

    return (
        <div className='main-content'>
            <div className='card-container gap-2'>

                <div className='dashboard-container'>
                    <Row>

                        <Col lg={4} md={6} className=''>
                            <Card>
                                <CardBody>
                                    <div className='d-flex justify-content-between'>
                                        <h6>Total Employees</h6>
                                        <BsThreeDotsVertical onClick={updateData} />

                                    </div>
                                    <h1 className='fw-bold mt-2 P-2' >21</h1>

                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={4} md={6}>
                            <Card>
                                <CardBody>
                                    <h6>Employee Attendance</h6>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={4} md={6}>
                            <Card>
                                <CardBody>
                                    leave
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div className='dashboard-container '>

                    <Row>
                        <Col lg={8} md={6}>
                            <Card>
                                <CardBody>
                                    Employees overview
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>


        </div>
    )
}

export default AdminDashboard

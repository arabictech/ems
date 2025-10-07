import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaPlus } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaClipboardList } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { BiSolidReport } from "react-icons/bi";


const EmployeeCard = () => {

    const data = [
        {imagePath:"", }
    ]

    return (
        <div className='main-content'>
            <div className='d-flex justify-content-between'>
                <h3 className='fw-bold'>Employee</h3>
                <div className='d-flex gap-2'>
                    <Button className='btn1 align-items-center d-flex' variant='primary'><FaPlus /> Add Employee</Button>
                    <Button className='btn1 align-items-center d-flex' variant='secondary'><FaCaretDown /> Status</Button>
                </div>
            </div>
            <hr />
            <div className='card-container'>
                <Container className=''>
                    <Row>
                        <Col lg={6} md={6}>
                            <Card>
                                <Card.Body>
                                    <div className='d-flex justify-content-between'>
                                        <Col xs={3} className='d-flex-column'>
                                            <div className='d-flex justify-content-center mb-3'>
                                                <img src='https://bootdey.com/img/Content/avatar/avatar7.png' alt='profile' className='profile-image' />
                                            </div>
                                            <div className='gap-3 d-flex justify-content-center '>
                                                <FaClipboardList />
                                                <FaStar />
                                                <BiSolidReport />
                                            </div>

                                        </Col>
                                        <Col xs={1} className='vr' style={{marginRight: '10px'}}></Col>
                                        <Col xs={9} className='' >
                                            <div className='fw-bold fs-5'>John Doe</div>
                                            <Button style={{ backgroundColor: '#e5daf7', color: 'black', border: 'none', fontSize: '12px', marginBottom: '0' }}>Web Developer</Button>
                                            <hr />
                                            <span style={{ fontSize: '12px', color: 'gray', marginTop: '0px' }}>
                                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                                            </span>
                                            <div className='d-flex mt-3 gap-2'>
                                                <Button className='btn1 d-flex align-items-center gap-1'><FaPlus /> Add Task</Button>
                                                <Button className='btn1 d-flex align-items-center gap-1'><CgProfile /> Profile</Button>
                                            </div>
                                        </Col>

                                    </div>
                                </Card.Body>
                            </Card>

                        </Col>

                    </Row>
                </Container>
            </div>




        </div>
    )
}

export default EmployeeCard

import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { IoMdPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa6";

const Profile = () => {
    return (
        <div className='main-content'>
            <h3 className='fw-bold'>Profile</h3>
            <hr />
            <Row>
                <Col lg={8} md={6}>
                    <Card>
                        <Card.Body>
                            <div className='d-flex justify-content-between'>
                                <Col xs={3} className='d-flex-column'>
                                    <div className='d-flex justify-content-center mb-2'>
                                        <img src='https://bootdey.com/img/Content/avatar/avatar7.png' alt='profile' className='profile-image' />
                                    </div>
                                    <div className='text-center'>
                                        <span>CEO</span>
                                        <h6>Employee ID</h6>
                                    </div>
                                </Col>
                                <Col xs={1} className='vr' ></Col>
                                <Col xs={9} className='m-2' >

                                    <span className='fw-bold' style={{ fontSize: '16px' }}>AgilSoft Tech</span>
                                    <h6 className='' style={{ fontSize: '12px', color: 'gray' }}>John Doe</h6>
                                    <span style={{ fontSize: '12px', marginTop: '0' }}>The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy</span>

                                    <div className='d-flex justify-content-between align-items-center' >
                                        <div className='mt-3'>
                                            <div><IoMdPhonePortrait /> <span style={{ fontSize: '12px' }}>+91 xxxxxxxxxx</span></div>
                                            <div><FaBirthdayCake /> <span style={{ fontSize: '12px' }}>24th Jan 1990</span></div>
                                        </div>
                                        <div className='mt-3' >
                                            <div><MdEmail /> <span style={{ fontSize: '12px' }}>ryanogden@gmail.com</span></div>
                                            <div><FaRegAddressCard /> <span style={{ fontSize: '12px' }}>2734 West Fork Street,EASTON 02334.</span></div>
                                        </div>
                                    </div>


                                </Col>
                            </div>
                        </Card.Body>

                    </Card>
                </Col>
                <Col lg={4} md={6}>
                    <Card>
                        <Card.Body style={{ background: 'pink' }}>
                            <div className='' style={{}}>
                                <span>Employee's Task</span>
                                <div className='card-container'>
                                    <div>
                                        <Button style={{ backgroundColor: '#e5daf7', color: 'black', border: 'none', fontSize: '12px', marginTop: '10px', marginBottom: '5px' }}>Web Developer</Button>

                                    </div>
                                    <span style={{ fontSize: '12px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nec scelerisque massa.</span>
                                    <div className='d-flex justify-content-between'>
                                        <div></div>
                                        <Button style={{ backgroundColor: '#e5daf7', color: 'black', border: 'none', fontSize: '12px', marginTop: '10px', marginBottom: '5px' }}>Web Developer</Button>
                                    </div>

                                </div>
                                <div className='card-container'>
                                    <div>
                                        <Button style={{ backgroundColor: '#e5daf7', color: 'black', border: 'none', fontSize: '12px', marginTop: '10px', marginBottom: '5px' }}>Web Developer</Button>

                                    </div>
                                    <span style={{ fontSize: '12px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nec scelerisque massa.</span>
                                    <div className='d-flex justify-content-between'>
                                        <div></div>
                                        <Button style={{ backgroundColor: '#e5daf7', color: 'black', border: 'none', fontSize: '12px', marginTop: '10px', marginBottom: '5px' }}>Web Developer</Button>
                                    </div>

                                </div>


                            </div>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>


        </div>
    )
}

export default Profile

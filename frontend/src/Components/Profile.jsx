import React, { useEffect, useState } from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { IoMdPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa6";
import { MdOutlineAttachment } from "react-icons/md";
import { BsPeopleFill,BsCalendarDateFill } from "react-icons/bs";
import { GiDuration } from "react-icons/gi";
import { MdMessage,MdAccessTime } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Image from 'react-bootstrap/Image';

const Profile = () => {

    const {id} = useParams();
    const [pro,setpro] = useState('');

    useEffect(()=>{
        axios.get(`http://localhost:8080/api/employees/${id}`)
        .then((res)=>{setpro(res.data)})
    },[id])

    return (
        <div className='main-content'>
            
            <h3 className='fw-bold'>Profile</h3>
            <hr />

            <Row>
                <Col lg={8} md={12} sm={12} >
                    <Row className='rounded-3 shadow p-3'>
                        <Col lg={2} md={12} className=' border-end'>
                            <div className='d-flex-column justify-content-center align-items-center' style={{ padding: '10px' }} >
                                    <div className='d-flex justify-content-center mb-2'>
                                        {pro.gender === 'Male' ? <Image className='profile-image' src={require('../images/male.png')} fluid /> : <Image className='profile-image' src={require('../images/female.jpg')} fluid />}
                                    </div>
                                    <div className='text-center'>
                                        <span>{pro.designation}</span>
                                        <p className='text-size mt-1' >Employee Id : {pro.emp_id}</p>
                                    </div>
                            </div>
                        </Col>

                        <Col lg={10} md={12}>
                            <h2 className='fw-bold'>{pro.first_name} {pro.last_name}</h2>
                                <span style={{ fontSize: '12px'}}>The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy</span>
                                <div className='d-lg-flex justify-content-between align-items-center ' >

                                    <div className=''>
                                        <div><IoMdPhonePortrait /> <span style={{ fontSize: '12px' }}>{pro.phone}</span></div>
                                        <div><BsCalendarDateFill /> <span style={{ fontSize: '12px' }}>{new Date(pro.join_date).toLocaleDateString('en-GB')}</span></div>
                                    </div>

                                    <div className='mt-3' style={{ marginRight: '150px' }} >
                                        <div><MdEmail /> <span style={{ fontSize: '12px' }}>{pro.email}</span></div>
                                        <div><FaRegAddressCard /> <span style={{ fontSize: '12px' }}>{pro.department}</span></div>
                                    </div>

                                </div>
                        </Col>
                    </Row>

                    <div>
                        <h6 className='d-flex mt-4' >Current Work Project</h6>
                    </div>
                    
                    <Row>
                        <Col lg={6} md={6} sm={12} className='mb-2'>
                            <Card style={{ marginBottom: "10px", background: 'pink' }} >
                                <Card.Body>
                                    <span className='d-flex fw-semibold' >UI/UX Design</span>
                                    <Col lg={12} className='d-flex pb-3'>
                                        <Col lg={6}>
                                            <p className='d-flex align-items-center gap-2'><MdOutlineAttachment />5 Attach</p>
                                            <span className='d-flex align-items-center gap-2'><BsPeopleFill />5 Members</span>
                                        </Col>
                                        <Col lg={6}>
                                            <p className='d-flex align-items-center gap-2' ><GiDuration />5 Month</p>
                                            <span className='d-flex align-items-center gap-2'><MdMessage />10</span>
                                        </Col>
                                    </Col>
                                    <Col style={{ padding: "0.5px", backgroundColor: "gray" }} className='mb-3' ></Col>
                                    <Col lg={12} className='d-flex justify-content-between'>
                                        <span className='d-flex gap-2 align-items-center small' >Progress</span>
                                        <span className='d-flex gap-1 align-items-center small' style={{ backgroundColor: "gray", padding: "3px", borderRadius: "5px" }} ><MdAccessTime />35 Days Left</span>
                                    </Col>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6} md={6} sm={12} className='mb-2'>
                            <Card style={{ background: 'pink' }} >
                                <Card.Body>
                                    <span className='d-flex fw-semibold' >Website Design</span>
                                    <Col lg={12} className='d-flex mb-3'>
                                        <Col lg={6}>
                                            <p className='d-flex align-items-center gap-2'><MdOutlineAttachment />4 Attach</p>
                                            <span className='d-flex align-items-center gap-2'><BsPeopleFill />4 Members</span>
                                        </Col>
                                        <Col lg={6}>
                                            <p className='d-flex align-items-center gap-2' ><GiDuration />1 Month</p>
                                            <span className='d-flex align-items-center gap-2'><MdMessage />3</span>
                                        </Col>
                                    </Col>
                                    <Col style={{ padding: "0.5px", backgroundColor: "gray" }} className='mb-3'></Col>
                                    <Col lg={12} className='d-flex justify-content-between'>
                                        <span className='d-flex gap-2 align-items-center small' >Progress</span>
                                        <span className='d-flex gap-1 align-items-center small' style={{ backgroundColor: "gray", padding: "3px", borderRadius: "5px" }} ><MdAccessTime />15 Days Left</span>
                                    </Col>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6} md={6} sm={12} className='mb-2'>
                            <Card style={{ marginBottom: "10px", background: 'pink' }} >
                                <Card.Body>
                                    <div className='d-flex justify-content-between mb-4' >
                                        <span className='d-flex fw-semibold small' style={{fontSize:"18px"}} >Personal Informations</span>
                                        <span className='d-flex' ><FaEdit /></span>
                                    </div>
                                    <Col lg={12} className='d-flex'>
                                        <Col lg={6} className='' >
                                            <p className='fw-semibold small'>Nationality</p>
                                            <p className='fw-semibold small'>Religion</p>
                                            <p className='fw-semibold small'>Marital Status</p>
                                            <p className='fw-semibold small'>Passport No.</p>
                                            <span className='fw-semibold small'>Emergency Contact</span>
                                        </Col>
                                        <Col lg={6}>
                                            <p className='small' style={{color:"gray"}}>Indian</p>
                                            <p className='small' style={{color:"gray"}}>Hindu</p>
                                            <p className='small' style={{color:"gray"}}>Married</p>
                                            <p className='small' style={{color:"gray"}}>5468953210</p>
                                            <span className='small' style={{color:"gray"}}>7468953210</span>
                                        </Col>
                                    </Col>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6} md={6} sm={12} className='mb-2'>
                            <Card style={{ marginBottom: "10px", background: 'pink' }} >
                                <Card.Body>
                                    <div className='d-flex justify-content-between mb-4' >
                                        <span className='d-flex fw-semibold small' style={{fontSize:"18px"}} >Bank information</span>
                                        <span className='d-flex' ><FaEdit /></span>
                                    </div>
                                    <Col lg={12} className='d-flex'>
                                        <Col lg={6} className='' >
                                            <p className='fw-semibold small'>Bank Name</p>
                                            <p className='fw-semibold small'>Account No.</p>
                                            <p className='fw-semibold small'>IFSC Code</p>
                                            <p className='fw-semibold small'>Pan No</p>
                                            <span className='fw-semibold small'>UPI Id</span>
                                        </Col>
                                        <Col lg={6}>
                                            <p className='small' style={{color:"gray"}}>Kotak</p>
                                            <p className='small' style={{color:"gray"}}>5436874596325486</p>
                                            <p className='small' style={{color:"gray"}}>Kotak000021</p>
                                            <p className='small' style={{color:"gray"}}>ACQPF6584L</p>
                                            <span className='small' style={{color:"gray"}}>454812kotak@upi</span>
                                        </Col>
                                    </Col>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Col>
                <Col lg={4} md={12} sm={12}>
                    <Card style={{ marginBottom: "10px" }} >
                        <Card.Body style={{ background: 'pink' }}>
                            <div>
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

            
            {/* <Row>
                <Col lg={8} md={6} >
                    
                    <Col lg={12} className='d-flex gap-2' >
                        <Col lg={6}>
                            <Card style={{ marginBottom: "10px", background: 'pink' }} >
                                <Card.Body>
                                    <span className='d-flex fw-semibold' >UI/UX Design</span>
                                    <Col lg={12} className='d-flex pb-3'>
                                        <Col lg={6}>
                                            <p className='d-flex align-items-center gap-2'><MdOutlineAttachment />5 Attach</p>
                                            <span className='d-flex align-items-center gap-2'><BsPeopleFill />5 Members</span>
                                        </Col>
                                        <Col lg={6}>
                                            <p className='d-flex align-items-center gap-2' ><GiDuration />5 Month</p>
                                            <span className='d-flex align-items-center gap-2'><MdMessage />10</span>
                                        </Col>
                                    </Col>
                                    <Col style={{ padding: "0.5px", backgroundColor: "gray" }} className='mb-3' ></Col>
                                    <Col lg={12} className='d-flex justify-content-between'>
                                        <span className='d-flex gap-2 align-items-center small' >Progress</span>
                                        <span className='d-flex gap-1 align-items-center small' style={{ backgroundColor: "gray", padding: "3px", borderRadius: "5px" }} ><MdAccessTime />35 Days Left</span>
                                    </Col>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card style={{ background: 'pink' }} >
                                <Card.Body>
                                    <span className='d-flex fw-semibold' >Website Design</span>
                                    <Col lg={12} className='d-flex mb-3'>
                                        <Col lg={6}>
                                            <p className='d-flex align-items-center gap-2'><MdOutlineAttachment />4 Attach</p>
                                            <span className='d-flex align-items-center gap-2'><BsPeopleFill />4 Members</span>
                                        </Col>
                                        <Col lg={6}>
                                            <p className='d-flex align-items-center gap-2' ><GiDuration />1 Month</p>
                                            <span className='d-flex align-items-center gap-2'><MdMessage />3</span>
                                        </Col>
                                    </Col>
                                    <Col style={{ padding: "0.5px", backgroundColor: "gray" }} className='mb-3'></Col>
                                    <Col lg={12} className='d-flex justify-content-between'>
                                        <span className='d-flex gap-2 align-items-center small' >Progress</span>
                                        <span className='d-flex gap-1 align-items-center small' style={{ backgroundColor: "gray", padding: "3px", borderRadius: "5px" }} ><MdAccessTime />15 Days Left</span>
                                    </Col>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Col>
                    <Col lg={12} className='d-flex gap-2' >
                        <Col lg={6}>
                            <Card style={{ marginBottom: "10px", background: 'pink' }} >
                                <Card.Body>
                                    <div className='d-flex justify-content-between mb-4' >
                                        <span className='d-flex fw-semibold small' style={{fontSize:"18px"}} >Personal Informations</span>
                                        <span className='d-flex' ><FaEdit /></span>
                                    </div>
                                    <Col lg={12} className='d-flex'>
                                        <Col lg={6} className='' >
                                            <p className='fw-semibold small'>Nationality</p>
                                            <p className='fw-semibold small'>Religion</p>
                                            <p className='fw-semibold small'>Marital Status</p>
                                            <p className='fw-semibold small'>Passport No.</p>
                                            <span className='fw-semibold small'>Emergency Contact</span>
                                        </Col>
                                        <Col lg={6}>
                                            <p className='small' style={{color:"gray"}}>Indian</p>
                                            <p className='small' style={{color:"gray"}}>Hindu</p>
                                            <p className='small' style={{color:"gray"}}>Married</p>
                                            <p className='small' style={{color:"gray"}}>5468953210</p>
                                            <span className='small' style={{color:"gray"}}>7468953210</span>
                                        </Col>
                                    </Col>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card style={{ marginBottom: "10px", background: 'pink' }} >
                                <Card.Body>
                                    <div className='d-flex justify-content-between mb-4' >
                                        <span className='d-flex fw-semibold small' style={{fontSize:"18px"}} >Bank information</span>
                                        <span className='d-flex' ><FaEdit /></span>
                                    </div>
                                    <Col lg={12} className='d-flex'>
                                        <Col lg={6} className='' >
                                            <p className='fw-semibold small'>Bank Name</p>
                                            <p className='fw-semibold small'>Account No.</p>
                                            <p className='fw-semibold small'>IFSC Code</p>
                                            <p className='fw-semibold small'>Pan No</p>
                                            <span className='fw-semibold small'>UPI Id</span>
                                        </Col>
                                        <Col lg={6}>
                                            <p className='small' style={{color:"gray"}}>Kotak</p>
                                            <p className='small' style={{color:"gray"}}>5436874596325486</p>
                                            <p className='small' style={{color:"gray"}}>Kotak000021</p>
                                            <p className='small' style={{color:"gray"}}>ACQPF6584L</p>
                                            <span className='small' style={{color:"gray"}}>454812kotak@upi</span>
                                        </Col>
                                    </Col>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                    </Col>
                </Col>
                <Col lg={4} md={6}>
                    <Card style={{ marginBottom: "10px" }} >
                        <Card.Body style={{ background: 'pink' }}>
                            <div>
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
                    <Card>
                        <Card.Body style={{ background: 'gray' }}>
                            <span>Experience</span>
                        </Card.Body>
                    </Card>
                </Col>
            </Row> */}


        </div>
    )
}

export default Profile

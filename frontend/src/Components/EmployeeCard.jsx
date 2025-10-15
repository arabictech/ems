import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaPlus,FaPhone } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaClipboardList,FaStar,FaIdCardAlt,FaEdit } from "react-icons/fa";
import {BiSolidReport } from "react-icons/bi";
import CommonButton from './ModelsComponent/CommonComponent/CommonButton';
import { MdDeleteForever,MdEmail} from "react-icons/md";
import AddEmployeeForm from './ModelsComponent/AddEmployeeForm';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from 'react-bootstrap/Image';
import toast, { Toaster } from "react-hot-toast";
import Modal from 'react-bootstrap/Modal';
import { Link} from "react-router-dom";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const EmployeeCard = () => {

    const [modalShow, setModalShow] = React.useState(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [formdata, setformdata] = useState([])
    const [recdel, setrecdel] = useState('');
    
    const fetchEmployee = () => {
        axios.get('http://localhost:8080/api/employees')
        .then((res) => {setformdata(res.data); console.log(res.data)})
        .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchEmployee()
    },[])

    const handledelete = async (del) => {
        try {
            await axios.delete(`http://localhost:8080/api/employees/${del}`)
            toast.success('Employee data deleted');
            fetchEmployee()
        } 
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='main-content'>
            <div className='d-lg-flex justify-content-between'>
                <h3 className='fw-bold'>Employees Details</h3>
                <div className='d-flex gap-2'>
                    <AddEmployeeForm
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        onUpdate={fetchEmployee} 
                    />
                    <CommonButton classData={'btn1 align-items-center d-flex'} icon={<FaPlus />} variant={'primary'} title={"Add Employee"} buttonClick={() => {setModalShow(true); }} />
                </div>
            </div>
            <div className='card-container bg-transparent p-0'>
                <Row>
                    <div className="d-flex gap-3 justify-content-end mb-4">
                    </div>
                    {
                        formdata?.map((ele,index) => {
                            return (
                                <>
                                    <Col lg={6} md={6} style={{ marginBottom: "10px" }} key={index}>
                                        <Card >
                                            <Card.Body className="shadow">
                                                <div className=' d-lg-flex justify-content-between'>
                                                    <Col sm={3} className='d-flex-column'>
                                                        <div className='d-flex justify-content-center align-items-center gap-3 flex-column'>
                                                            {ele.gender === 'male' ? <Image className="profile-image" src={require('../images/male.png')} fluid /> : <Image className="profile-image" src={require('../images/female.jpg')} fluid />}

                                                        <span className="d-flex align-items-center gap-2 text-center"><FaIdCardAlt />: {ele.emp_id}</span>
                                                        
                                                        <div className='gap-3 d-flex justify-content-center '>
                                                            <FaClipboardList className="text-info"/>
                                                            <FaStar className="text-warning"/>
                                                            <BiSolidReport className="text-warning-emphasis"/>
                                                        </div>
                                                        </div>
                                                    </Col>
                                                    <Col sm={1} className='vr' style={{ marginRight: '10px' }}></Col>
                                                    
                                                    <Col sm={9} >
                                                        <div className='fw-bold fs-3'>{ele.first_name} {ele.last_name}</div>
                                                        
                                                        <div className="d-flex gap-2">
                                                        <Button style={{ backgroundColor: '#e5daf7', color: 'black', border: 'none', fontSize: '12px',marginTop:'10px'}}>{ele.department}</Button>
                                                          <Button style={{ backgroundColor: '#e5daf7', color: 'black', border: 'none', fontSize: '12px',marginTop:'10px'}}>{ele.designation}</Button>
                                                        </div>

                                                        <hr />

                                                        <div className="d-flex flex-column small">
                                                            <span><FaPhone /> {ele.phone}</span>
                                                            <span><MdEmail /> {ele.email}</span>
                                                        </div>
                                                        
                                                        <div className='d-flex mt-3 gap-2 '>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-delete">Profile</Tooltip>}>
                                                                <Link to={`/profile/${ele.emp_id}`}><Button className=" rounded-5" variant="primary" ><CgProfile /></Button></Link>
                                                            </OverlayTrigger>

                                                            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-delete">Edit Record</Tooltip>}>
                                                                <Button className=" rounded-5" variant="warning" onClick={()=>{setModalShow(true); sessionStorage.setItem('edit',JSON.stringify(ele));}}><FaEdit /></Button>
                                                            </OverlayTrigger>

                                                            <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-delete">Delete Record</Tooltip>}>
                                                                <Button className=" rounded-5" variant="danger" onClick={()=>{handleShow(); setrecdel(ele.emp_id)}}><MdDeleteForever /></Button>
                                                            </OverlayTrigger>
                                                            
                                                        </div>
                                                    </Col>

                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </>
                            )
                        })
                    }
                </Row>
            </div>
            
            <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Delete Confirmation </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>Are you sure you want to delete it ?</Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant="danger" onClick={()=>{handleClose(); handledelete(recdel)}}>
                          Yes, delete it!
                        </Button>
                      </Modal.Footer>
                    </Modal>

        <Toaster
            position="top-center"
            reverseOrder={false}
        />

        </div>
    )
}

export default EmployeeCard

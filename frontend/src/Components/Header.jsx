import React, { useState } from 'react'
import Image from 'react-bootstrap/Image';
import { NavLink } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { FaNotesMedical,FaUsers } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
import { IoMdAnalytics } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";
import { SlCalender } from "react-icons/sl";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaSearch } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { IoMdNotifications } from "react-icons/io";
import { TbUserCircle } from "react-icons/tb";
import { HiBars3CenterLeft } from "react-icons/hi2";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoClose } from "react-icons/io5";

function Header() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container fluid className='position-fixed'>
        <div className=''><HiBars3CenterLeft onClick={handleShow} className=' border border-2 rounded-2 my-3 d-lg-none' style={{fontSize:'33px'}}/></div>
        <Row>
          <Col lg={3} md={3} >
           <div className='sidebar text-light shadow '>

            <Image src={require('../images/logo2.png')}  className=' w-100 my-4 px-5'  fluid />
            <div className='fs-4 mt-4'>
                <NavLink to='/' className='nav-link menu'><span className='d-flex gap-3 align-items-center' ><MdDashboard /> Dashboard</span> <TiArrowSortedDown /></NavLink>
                <NavLink to='employee' className='nav-link menu'><span className='d-flex gap-3 align-items-center' ><IoPersonSharp /> Employees</span> <TiArrowSortedDown /></NavLink>
                <NavLink to='attendance' className='nav-link menu'><span className='d-flex gap-3 align-items-center' ><FaNotesMedical /> Attendance</span> <TiArrowSortedDown /></NavLink>
                <NavLink to='leave' className='nav-link menu'><span className='d-flex gap-3 align-items-center' ><SlCalender /> Leave</span> <TiArrowSortedDown /></NavLink>
                <NavLink to='payroll' className='nav-link menu'><span className='d-flex gap-3 align-items-center' ><FaUsers /> Payroll</span> <TiArrowSortedDown /></NavLink>
                <NavLink to='report' className='nav-link menu'><span className='d-flex gap-3 align-items-center' ><TbReportAnalytics /> Report</span> <TiArrowSortedDown /></NavLink>
                <NavLink to='analytics' className='nav-link menu'><span className='d-flex gap-3 align-items-center' ><IoMdAnalytics /> Analytics</span> <TiArrowSortedDown /></NavLink>
            </div>
        </div>
          </Col>
          <Col lg={9} className='p-0'>
                <Navbar expand="lg" className=" nav" style={{margin:'40px',marginLeft:'0px',marginRight:'50px'}}>
                <Container fluid className='p-0'>
                  <Form className="d-flex bg-body-secondary p-1  w-25 rounded-3 ps-0">
                    <Form.Control
                      type="search"
                      placeholder='Search'
                      className="me-2 bg-transparent border-0"
                      aria-label="Search"
                    />
                    <Button variant="" className='fs-5'><FaSearch /></Button>
                  </Form>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto fs-3">
                      <Nav.Link href="#home" className='nav-icon'><IoMdNotifications /></Nav.Link>
                      <Nav.Link href="#home" className='nav-icon'><TbUserCircle /></Nav.Link>
                      <Nav.Link href="#link" className='nav-icon'><LuLogOut /></Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
          </Col>
        </Row>
      </Container>
     
     <Offcanvas show={show} onHide={handleClose} className='w-75'>
        <Offcanvas.Body style={{backgroundColor:'#4c3575'}}>
          <div className='text-light'>
            <div className='text-end'><IoClose className='fs-1' onClick={handleClose}/></div>
            <Image src={require('../images/logo2.png')}  className=' w-100 my-4 px-5'  fluid />
            <div className='fs-4 mt-4'>
                <NavLink to='/'     className='nav-link menu' onClick={handleClose}><span className='d-flex gap-3 align-items-center' ><MdDashboard /> Dashboard</span> <TiArrowSortedDown /></NavLink>
                <NavLink to='employee' className='nav-link menu' onClick={handleClose}><span className='d-flex gap-3 align-items-center' ><IoPersonSharp /> Employees</span> <TiArrowSortedDown /></NavLink>
                <NavLink to='attendance' className='nav-link menu' onClick={handleClose}><span className='d-flex gap-3 align-items-center' ><FaNotesMedical /> Attendance</span> <TiArrowSortedDown /></NavLink>
                <NavLink to='leave' className='nav-link menu' onClick={handleClose}><span className='d-flex gap-3 align-items-center' ><SlCalender /> Leave</span> <TiArrowSortedDown /></NavLink>
                <NavLink to='payroll' className='nav-link menu' onClick={handleClose}><span className='d-flex gap-3 align-items-center' ><FaUsers /> Payroll</span> <TiArrowSortedDown /></NavLink>
                <NavLink to='report' className='nav-link menu' onClick={handleClose}><span className='d-flex gap-3 align-items-center' ><TbReportAnalytics /> Report</span> <TiArrowSortedDown /></NavLink>
                <NavLink to='analytics' className='nav-link menu' onClick={handleClose}><span className='d-flex gap-3 align-items-center' ><IoMdAnalytics /> Analytics</span> <TiArrowSortedDown /></NavLink>
            </div>
        </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Header
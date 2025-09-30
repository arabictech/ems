import React from 'react'
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

function Header() {
  return (
    <>
      <Container fluid className='position-fixed'>
        <Row>
          <Col lg={3} md={3} >
           <div className='sidebar text-light shadow '>
            <Image src={require('../images/logo2.png')}  className=' w-100 my-4 px-5'  fluid />
            <div className='fs-4 mt-4'>
                <NavLink to='/' className='nav-link mb-4 px-4 d-flex justify-content-between align-items-center'><span className='d-flex gap-3 align-items-center' ><MdDashboard /> Dashboard</span> <TiArrowSortedDown /></NavLink>
                <NavLink to='employee' className='nav-link mb-4 px-4 d-flex justify-content-between align-items-center'><span className='d-flex gap-3 align-items-center' ><IoPersonSharp /> Employees</span> <TiArrowSortedDown /></NavLink>
                <NavLink to='attendance' className='nav-link mb-4 px-4 d-flex justify-content-between align-items-center'><span className='d-flex gap-3 align-items-center' ><FaNotesMedical /> Attendance</span> <TiArrowSortedDown /></NavLink>
                <NavLink to='leave' className='nav-link mb-4 px-4 d-flex justify-content-between align-items-center'><span className='d-flex gap-3 align-items-center' ><SlCalender /> Leave</span> <TiArrowSortedDown /></NavLink>
                <NavLink to='payroll' className='nav-link mb-4 px-4 d-flex justify-content-between align-items-center'><span className='d-flex gap-3 align-items-center' ><FaUsers /> Payroll</span> <TiArrowSortedDown /></NavLink>
                <NavLink to='report' className='nav-link mb-4 px-4 d-flex justify-content-between align-items-center'><span className='d-flex gap-3 align-items-center' ><TbReportAnalytics /> Report</span> <TiArrowSortedDown /></NavLink>
                <NavLink to='analytics' className='nav-link mb-4 px-4 d-flex justify-content-between align-items-center'><span className='d-flex gap-3 align-items-center' ><IoMdAnalytics /> Analytics</span> <TiArrowSortedDown /></NavLink>
            </div>
        </div>
          </Col>
          <Col lg={9} className='p-0'>
                <Navbar expand="lg" className="bg-body-secondary" style={{margin:'30px',marginLeft:'0px',marginRight:'50px'}}>
                <Container>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>

              
          </Col>
        </Row>
      </Container>
     
    </>
  )
}

export default Header
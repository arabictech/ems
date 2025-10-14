import React, { useState } from 'react'
import Image from 'react-bootstrap/Image';
import { NavLink } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { FaNotesMedical,FaUsers } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
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
import { TbUserCircle } from "react-icons/tb";
import { HiBars3CenterLeft } from "react-icons/hi2";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoClose } from "react-icons/io5";
import Dropdown from 'react-bootstrap/Dropdown';
import { FaUser } from "react-icons/fa";
import { IoMdSettings,IoIosMail,IoMdNotifications,IoMdAnalytics } from "react-icons/io";
import { LuClipboardList } from "react-icons/lu";

function Slider() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  return (
    <>
                
            <div className=''><HiBars3CenterLeft onClick={handleShow} className=' border border-2 rounded-2 my-3 d-lg-none' style={{fontSize:'33px'}}/></div>
             
            <div className='sidebar text-light shadow '>
        
                    <Image src={require('../images/logo2.png')}  className=' w-100 my-4 px-5'  fluid />
                    <div className='fs-4 mt-4'>
                        <NavLink to='/' className='nav-link menu'><span className='d-flex gap-3 align-items-center' > 
                          <MdDashboard /> Dashboard</span> <TiArrowSortedDown />
                        </NavLink>
                        
                        <NavLink to='employee' className='nav-link menu sub'><span className='d-flex gap-3 align-items-center' > 
                          <IoPersonSharp /> Employees</span> <TiArrowSortedDown />
                        </NavLink>
                        
        
                        <NavLink to='attendance' className='nav-link menu'><span className='d-flex gap-3 align-items-center' > 
                          <FaNotesMedical /> Attendance</span> <TiArrowSortedDown />
                        </NavLink>
        
                        <NavLink to='leave' className='nav-link menu'><span className='d-flex gap-3 align-items-center' > 
                          <SlCalender /> Leave</span> <TiArrowSortedDown />
                        </NavLink>
        
                        <NavLink to='payroll' className='nav-link menu'><span className='d-flex gap-3 align-items-center' > 
                          <FaUsers /> Payroll</span> <TiArrowSortedDown />
                        </NavLink>
        
                        <NavLink to='report' className='nav-link menu'><span className='d-flex gap-3 align-items-center' > 
                          <TbReportAnalytics /> Report</span> <TiArrowSortedDown />
                        </NavLink>
        
                        <NavLink to='analytics' className='nav-link menu'><span className='d-flex gap-3 align-items-center' > 
                          <IoMdAnalytics /> Analytics</span> <TiArrowSortedDown />
                        </NavLink>
        
                    </div>
                </div>

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

export default Slider
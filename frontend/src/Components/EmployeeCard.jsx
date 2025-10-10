import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaPlus } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaClipboardList } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { BiBorderRadius, BiSolidReport } from "react-icons/bi";
import CommonButton from './ModelsComponent/CommonComponent/CommonButton';
import { MdDeleteForever, MdHeight } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import AddEmployeeForm from './ModelsComponent/AddEmployeeForm';
import React from "react";


const EmployeeCard = () => {
    const [modalShow, setModalShow] = React.useState(true);

    const data = [
        { imagePath: "https://bootdey.com/img/Content/avatar/avatar7.png", icon1: <FaClipboardList />, icon2: <FaStar />, icon3: <BiSolidReport />, name: "Ankit", buttonName: "Web Developer", description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices ante ipsum primis in faucibus orci luctus et ultrices" },
        { imagePath: "https://pixelwibes.com/template/my-task/html/dist/assets/images/lg/avatar8.jpg", icon1: <FaClipboardList />, icon2: <FaStar />, icon3: <BiSolidReport />, name: "Kamya", buttonName: "Web Developer", description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices ante ipsum primis in faucibus orci luctus et ultrices" },
        { imagePath: "https://pixelwibes.com/template/my-task/html/dist/assets/images/lg/avatar8.jpg", icon1: <FaClipboardList />, icon2: <FaStar />, icon3: <BiSolidReport />, name: "Radha", buttonName: "Web Developer", description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices ante ipsum primis in faucibus orci luctus et ultrices" },
        { imagePath: "https://bootdey.com/img/Content/avatar/avatar7.png", icon1: <FaClipboardList />, icon2: <FaStar />, icon3: <BiSolidReport />, name: "Naresh", buttonName: "Web Developer", description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices ante ipsum primis in faucibus orci luctus et ultrices" },
        { imagePath: "https://bootdey.com/img/Content/avatar/avatar7.png", icon1: <FaClipboardList />, icon2: <FaStar />, icon3: <BiSolidReport />, name: "Aman", buttonName: "Web Developer", description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices ante ipsum primis in faucibus orci luctus et ultrices" },
        { imagePath: "https://bootdey.com/img/Content/avatar/avatar7.png", icon1: <FaClipboardList />, icon2: <FaStar />, icon3: <BiSolidReport />, name: "Vora", buttonName: "Web Developer", description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices ante ipsum primis in faucibus orci luctus et ultrices" },
    ]

    return (
        <div className='main-content'>
            <div className='d-flex justify-content-between'>
                <h3 className='fw-bold'>Employee</h3>
                <div className='d-flex gap-2'>
                    <CommonButton classData={'btn1 align-items-center d-flex'} icon={<FaPlus />} variant={'primary'} title={"Add Employee"} buttonClick={() => setModalShow(true)} />
                    <AddEmployeeForm
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    <CommonButton classData={'btn1 align-items-center d-flex'} icon={<FaCaretDown />} variant={'secondary'} title={"Status"} />
                </div>
            </div>
            <hr />
            <div className='card-container'>
                <Row>
                    {
                        data?.map((ele, idx) => {
                            return (
                                <>
                                    <Col lg={6} md={6} style={{ marginBottom: "10px" }}>
                                        <Card>
                                            <Card.Body>
                                                <div className='d-flex justify-content-between'>
                                                    <Col xs={3} className='d-flex-column'>
                                                        <div className='d-flex justify-content-center mb-3'>
                                                            <img src={`${ele.imagePath}`} alt='profile' className='profile-image' />
                                                        </div>
                                                        <div className='gap-3 d-flex justify-content-center '>
                                                            {ele.icon1}
                                                            {ele.icon2}
                                                            {ele.icon3}
                                                        </div>
                                                    </Col>
                                                    <Col xs={1} className='vr' style={{ marginRight: '10px' }}></Col>
                                                    <Col xs={9} >
                                                        <div className='fw-bold fs-5'>{ele.name}</div>
                                                        <Button style={{ backgroundColor: '#e5daf7', color: 'black', border: 'none', fontSize: '12px', marginBottom: '0' }}>Web Developer</Button>
                                                        <hr />
                                                        <span className='text-secondary small'>
                                                            {ele.description}
                                                        </span>
                                                        <div className='d-flex mt-3 gap-2 '>
                                                            <CommonButton classData={'btn1 d-flex align-items-center gap-1'} styleData={{height:"40px", borderRadius:"40px"}} icon={<CgProfile />} />
                                                            <CommonButton classData={'btn1 d-flex align-items-center gap-1 bg-primary'} styleData={{height:"40px", borderRadius:"40px"}} icon={<FaEdit />} />
                                                            <CommonButton classData={'btn1 d-flex align-items-center gap-1 bg-danger'} styleData={{height:"40px", borderRadius:"40px"}} icon={<MdDeleteForever />} />



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




        </div>
    )
}

export default EmployeeCard

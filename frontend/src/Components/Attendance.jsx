import React from 'react';
import Table from 'react-bootstrap/Table';
import { SiTicktick } from "react-icons/si";
import { IoCloseCircleOutline } from "react-icons/io5";
import Button from 'react-bootstrap/Button';
import { FaEdit } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import MyVerticallyCenteredModal from './ModelsComponent/MyVerticallyCenteredModal';
import { IoIosTimer } from "react-icons/io";
import AdvancedExample from './ModelsComponent/ReactBPagination';


const Attendance = () => {

    const [modalShow, setModalShow] = React.useState(false);

    const employeeData = [
        { employeeName: "Ankit"},
        { employeeName: "Kamya" },
        { employeeName: "Radha" },
        { employeeName: "Naresh" },
        { employeeName: "Aman" },
        { employeeName: "Vora" },
    ]

    return (
        <div className="main-content text-bold" >
            <div className='d-flex justify-content-between mb-4' >
                <h3 className="fw-semibold" >Attendance (Admin)</h3>
                <div className='d-flex gap-2' >
                    <Button className='btn1 d-flex gap-2 align-items-center' onClick={() => setModalShow(true)} ><FaEdit size={20} />Edit Attendance</Button>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    <Button className='btn1 d-flex gap-2 align-items-center text-white' >Filter<FaCaretDown /></Button>
                </div>
            </div>
            <div style={{ padding: 20, border: '1px solid gray', borderRadius: "5px" }} >
                <div className='d-flex gap-3' style={{ paddingBottom: 15 }} >
                    <span className='d-flex align-items-center gap-2'><SiTicktick size={14} className='text-success' /> Full Day Present</span>
                    <span className='d-flex align-items-center gap-2'><IoIosTimer size={18} className='text-warning' /> Half Day Present</span>
                    <span className='d-flex align-items-center gap-2'><IoCloseCircleOutline size={18} className='text-danger' />  Full Day Absence</span>
                </div>
                <Table responsive >
                    <thead>
                        <tr>
                            <th>Employee</th>
                            {Array.from({ length: 31 }).map((_, index) => (
                                <td key={index} style={{ fontSize: "12px" }}>{index}</td>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employeeData?.sort()?.map((ele, idx) => {
                                const keyData = Object.values(ele).sort()
                                console.log("keyData-------------",keyData);
                                
                                return (
                                    <tr>
                                        <td style={{ display: 'flex-row', paddingBottom: "15px", paddingTop: "15px" }} >{ele.employeeName}</td>
                                        {Array.from({ length: 31 }).map((ele, index) => (
                                            <td key={index} style={{ paddingBottom: "15px", paddingTop: "15px" }} ><SiTicktick size={10} className='text-success' /></td>
                                        ))}
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    <AdvancedExample />
                </Table>
            </div>
        </div>
    )
}

export default Attendance
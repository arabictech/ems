import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AttendanceTable({employeeData}) {
    
    const [employeeIdx, setEmployeeIdx] = useState([])
    console.log("employeeIdx--------------",employeeIdx);
    
    const [startDate, setStartDate] = useState(new Date());

    const addAction = (employeeIndex) => {
        const { empIdx, buttonIdx, data } = employeeIndex
        setEmployeeIdx([
            ...employeeIdx,
            { empIdx, buttonIdx, data }
        ])
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th className='d-flex-row justify-content-center'>Sr No.</th>
                    <th className='d-flex-row justify-content-center'>Name</th>
                    <th className='d-flex-row justify-content-center'>Department</th>
                    <th className='d-flex justify-content-center'>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    employeeData?.map((ele, idx) => {
                        return (
                            <tr>
                                <td>{ele.empId}</td>
                                <td>{ele.employeeName}</td>
                                <td>{ele.department}</td>
                                <td className='d-flex gap-3 justify-content-center' >
                                    {[{ variantData: "primary", data: "Present" }, { variantData: "secondary", data: "Absent" }, { variantData: "warning", data: "Sick" }, { variantData: "danger", data: "Leave" }].map((el, ind) => {
                                        return (
                                            <>
                                                {/* {employeeIdx?.empIdx === idx ? <Button variant={el.variantData} >{employeeIdx.data}</Button> : <Button variant={el.variantData} onClick={()=>addAction({empIdx:idx,data:el})} >{el.data}</Button>} */}
                                                <Button variant={el.variantData} onClick={() => addAction({ empIdx: idx, buttonIdx: ind, data: el })} >{el.data}</Button>
                                            </>
                                        )
                                    })}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    );
}

export default AttendanceTable;
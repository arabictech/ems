import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AttendanceTable from './AttendanceTable';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AttendanceDatePicker from './AttendanceDatePicker';



function TextControlsExample() {

    const [searchItem, setSearchItem] = useState('');

    const navigate = useNavigate();

    const [employeeData, setEmployeeData] = useState([
        { empId: "1", employeeName: "Ankit", department: "Python", reason: "" },
        { empId: "2", employeeName: "Kamya", department: "Python", reason: "" },
        { empId: "3", employeeName: "Radha", department: "Java", reason: "" },
        { empId: "4", employeeName: "Aman", department: "Java", reason: "" },
        { empId: "5", employeeName: "Naresh", department: "React", reason: "" },
        { empId: "6", employeeName: "Vora", department: "React", reason: "" },
    ]);


  const filteredData =  employeeData?.filter((item) => item.employeeName.toLowerCase().includes(searchItem.toLowerCase()))

    return (
        <Form className='main-content' >
            <Form.Text className='d-flex justify-content-center' ><h1>Manage Attendance</h1></Form.Text>

            <Form.Group className="mb-3 d-flex justify-content-between" controlId="exampleForm.ControlInput1" >
            <AttendanceDatePicker />
                <Form.Control type="email" placeholder="Search By Employee ID" value={searchItem} onChange={(e)=>setSearchItem(e.target.value)} className='w-25' />
                <Button variant="primary" className='px-5' onClick={() => navigate('/month-attendance')} >Attendance Report</Button>
            </Form.Group>

            <Form.Group>
                <AttendanceTable employeeData={employeeData} searchItem={searchItem} />
            </Form.Group>
        </Form>
    );
}

export default TextControlsExample;
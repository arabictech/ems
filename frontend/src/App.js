import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Employee from "./Components/Employees";
import LeaveForm from "./Components/LeaveForm";
import Login from "./Components/Login";
import RegisterForm from "./Components/RegisterForm";
import Attendance from "./Components/Attendance";
// import Payroll from './Components/Payroll';
import { SalarySlip } from "./Components/SalarySlip";
import DatePicker from "./Components/DatePicker";
import EmployeeCard from "./Components/EmployeeCard";
import Profile from "./Components/Profile";
import Payroll from "./Components/Payroll";
import TextControlsExample from "./Components/AttendenceData";
import AdminDashboard from "./Components/AdminDashboard";
import Slider from "./Components/Slider";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div className="App">
      <Container fluid className="">

        <Row>

          <Col className="" lg={3} md={12} sm={12}>
            <Slider />
          </Col>

          <Col className=" px-3" lg={9} md={12} sm={12}>
              <Header/>
            <div className="mt-5">
              <Routes>
                <Route path='/' element={<AdminDashboard/>}/>
                {/* <Route path='employee' element={<Employee />}/> */}
                <Route path='/' element={<Dashboard/>}/>
                <Route path='leave' element={<LeaveForm />}/>
                <Route path='login' element={<Login />}/>
                {/* <Route path='payroll' element={<RegisterForm />}/>  */}
                <Route path='attendance' element={<Attendance />}/>
                {/* <Route path='date-picker' element={<DatePicker />}/> */}
                <Route path='attendance' element={<Login />}/>
                {/* <Route path='payroll' element={<Payroll />}/> */}
                <Route path='analytics' element={<SalarySlip />}/>
                {/* <Route path='report' element={<Profile />}/> */}
                <Route path='payroll' element={<TextControlsExample />}/>
                <Route path='employee' element={<EmployeeCard />}/>
                <Route path='profile/:id' element={<Profile />}/>
              </Routes>
            </div>

          </Col>

        </Row>
      </Container>
      </div>
)}
export default App;

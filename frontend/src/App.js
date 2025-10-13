import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Employee from './Components/Employees';
import LeaveForm from './Components/LeaveForm';
import Login from './Components/Login';
import RegisterForm from './Components/RegisterForm';
import Attendance from './Components/ModelsComponent/AttendanceComponents/Attendance';
// import Payroll from './Components/Payroll';
import { SalarySlip } from './Components/SalarySlip';
import DatePicker from './Components/DatePicker';
import EmployeeCard from './Components/EmployeeCard';
import Profile from './Components/Profile';
import Payroll from './Components/Payroll';
import TextControlsExample from './Components/ModelsComponent/AttendanceComponents/AttendenceData';
import AdminDashboard from './Components/AdminDashboard';

function App() {
  return (
    <div className="App container-flex">
      <Header />
      <Routes>
        <Route path='/' element={<AdminDashboard/>}/>
        {/* <Route path='employee' element={<Employee />}/> */}
        <Route path='/' element={<Dashboard/>}/>
        <Route path='leave' element={<LeaveForm />}/>
        <Route path='login' element={<Login />}/>
        {/* <Route path='payroll' element={<RegisterForm />}/>  */}
        <Route path='month-attendance' element={<Attendance />}/>
        {/* <Route path='date-picker' element={<DatePicker />}/> */}
        {/* <Route path='attendance' element={<Login />}/> */}
        {/* <Route path='payroll' element={<Payroll />}/> */}
        <Route path='analytics' element={<SalarySlip />}/>
        <Route path='report' element={<Profile />}/>
        <Route path='attendance' element={<TextControlsExample />}/>
        <Route path='employee' element={<EmployeeCard />}/>
        <Route path='profile/:id' element={<Profile />}/>
      </Routes>
    </div>
  );
}

export default App;

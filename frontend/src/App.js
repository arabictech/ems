import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import LeaveForm from './Components/LeaveForm';
import Attendance from './Components/Attendance';
import { SalarySlip } from './Components/SalarySlip';
import EmployeeCard from './Components/EmployeeCard';
import Profile from './Components/Profile';
import TextControlsExample from './Components/AttendenceData';
import AdminDashboard from './Components/AdminDashboard';

function App() {
  return (
    <div className="App container-flex">
      <Header />
      <Routes>
        <Route path='/' element={<AdminDashboard/>}/>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='leave' element={<LeaveForm />}/>
        <Route path='attendance' element={<Attendance />}/>
        <Route path='analytics' element={<SalarySlip />}/>
        <Route path='report' element={<Profile />}/>
        <Route path='payroll' element={<TextControlsExample />}/>
        <Route path='employee' element={<EmployeeCard />}/>
        <Route path='profile/:id' element={<Profile />}/>
      </Routes>
    </div>
  );
}

export default App;

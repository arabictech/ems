import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Employee from './Components/Employees';
import LeaveForm from './Components/LeaveForm';
import Login from './Components/Login';
import RegisterForm from './Components/RegisterForm';
import Attendance from './Components/Attendance';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='employee' element={<Employee />}/>
        <Route path='leave' element={<LeaveForm />}/>
        <Route path='attendance' element={<Attendance />}/>
        {/* <Route path='attendance' element={<Login />}/> */}
        {/* <Route path='payroll' element={<RegisterForm />}/> */}
      </Routes>
    </div>
  );
}

export default App;

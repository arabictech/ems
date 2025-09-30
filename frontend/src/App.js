import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Employee from './Components/Employees';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='employee' element={<Employee />}/>
      </Routes>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Component/Login/Login';
import Dashboard from './Component/Dashboard/Dashboad';
import Employees from './Component/Employees/Employees';
import Empdetail from './Component/PersonDetail/Empdetail';
import Profile from './Component/Profile/Profile';
import Project from './Component/Project/Project';
import Prodetail from './Component/ProjectDetails/Prodetail';
function App() {
  return (
   <>
   
    <Router>
   
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="/home" element={<Employees/>} />
        <Route path="/dashboard" element={<Employees />} />
        
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/employees" element={<Empdetail />} />
            <Route path="/profile" element={<Profile /> }/>
            <Route path="/projects" element={<Project />}/> 
            {/* <Route path='/prodetails' element={<Prodetail/>}/> */}
            <Route path="/project/:id" element={<Prodetail />} />
      </Routes>
    </Router>
   </>
  );
}

export default App;

import React from 'react'
import './Employees.css'
import { useNavigate } from 'react-router-dom'
import emp from '../Data'
import Dashboard from '../Dashboard/Dashboad'
import { FaUser, FaUsers,FaFolderOpen,FaTasks} from 'react-icons/fa';

function Employees() {
const navigate = useNavigate()
    function empClick(){
      navigate('/employees')
    }
    
function project_click(){
  navigate('/projects')
}

  return (
    <>
    <Dashboard/>
    <div className='head_dash'>
      <h1>Dashboard</h1>

    </div>
<div  className='all_box'>
   <div onClick={empClick} className='box_container'>
     <h1>05</h1>
      <div className='icon_head'>
      <h2>Total Employees </h2>
      <FaUser className='user_icon'/>
      </div>
     
    
     
</div>
<div onClick={project_click} className='box_container'>
     <h1>06</h1>
      <div className='icon_head'>
      <h2>Total Projets </h2>
      <FaFolderOpen className='user_icon'/>
      </div>
     
    
     
</div>
<div  className='box_container'>
     <h1>05</h1>
      <div className='icon_head'>
      <h2>Total Task </h2>
      <FaTasks className='user_icon'/>
      </div>
     </div>
<div className='box_container'>
     <h1>20</h1>
      <div className='icon_head'>
      <h2>Total Clients </h2>
      <FaUsers className='user_icon'/>
      </div>
     </div>
</div>
      
    </>
  )
}

export default Employees
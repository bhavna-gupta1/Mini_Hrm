import React from 'react'
import Dashboard from '../Dashboard/Dashboad'
import {FaUser} from 'react-icons/fa'
import './Profile.css'
import emp from '../Data.js'
function Profile() {
  console.log(emp)
  return (
    <>
    <Dashboard/>
    <h1 style={{marginLeft:'24rem',marginTop:'3rem'}}>Employees</h1>
    <div className='main_profile'>
     
  
       {emp.map((item)=>(
        <div className='card'>
          <FaUser className='img_icon'/>
        <p><strong>Name:</strong> {item.firstname} {item.lastname}</p>
        <p><strong>Emp id:</strong>{item.emp_id}</p>
        <p><strong>Email:</strong>{item.email}</p>
        <p><strong>Date of Joining:</strong>{item.date}</p>
        </div>
       ))}

       
        
    

    </div>
    </>
  )
}

export default Profile
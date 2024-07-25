import React from 'react'
import Dashboard from '../Dashboard/Dashboad'
import './Project.css'
import { useNavigate } from 'react-router-dom';
import {FaCar} from 'react-icons/fa';
function Project() {
    const navigate = useNavigate()

    function goToProjectDetails(id) {
        navigate(`/project/${id}`);
      }
  return (
   <>
   <Dashboard/>
   <div className='project_div'>
  <div className='All_poject'>
  <div onClick={() => goToProjectDetails(1)} className='sigleProject_div'>
        <h>VFT</h>
        <FaCar className='pro_icon'/>
        </div>
        <div onClick={() => goToProjectDetails(2)} className='sigleProject_div'>
        <h> Project2</h>
        <FaCar className='pro_icon'/>
        </div>
        <div onClick={() => goToProjectDetails(3)} className='sigleProject_div'>
        <h>Project3</h>
        <FaCar className='pro_icon'/>
        </div>
        <div onClick={() => goToProjectDetails(4)}  className='sigleProject_div'>
        <h>Project4</h>
        <FaCar className='pro_icon'/>
        </div>
        <div onClick={() => goToProjectDetails(5)} className='sigleProject_div'>
        <h>Project5</h>
        <FaCar className='pro_icon'/>
        </div>
        <div onClick={() => goToProjectDetails(6)} className='sigleProject_div'>
        <h>Project6</h>
        <FaCar className='pro_icon'/>
        </div>
       
  </div>
   </div>
   
   </>
  )
}

export default Project
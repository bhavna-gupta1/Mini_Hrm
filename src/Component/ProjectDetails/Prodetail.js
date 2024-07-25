import React from 'react'
import Dashboard from '../Dashboard/Dashboad'
import './Prodetail.css'
import { useParams } from 'react-router-dom';
function Prodetail() {
 
    const projectData = {
        1: {
          name: 'Vehicle Fitness Test',
          details: 'A comprehensive vehicle fitness test to ensure roadworthiness.',
          client: 'ABC Transport',
          company: 'XYZ Solutions',
          team: ['John Doe', 'Jane Smith', 'Alice Johnson']
        },
        2: {
          name: 'Project2',
          details: 'Details of Project2.',
          client: 'Client2',
          company: 'Company2',
          team: ['Person A', 'Person B', 'Person C']
        },
        3: {
          name: 'Project3',
          details: 'Details of Project3.',
          client: 'Client3',
          company: 'Company3',
          team: ['Person D', 'Person E', 'Person F']
        },
        4: {
          name: 'Project4',
          details: 'Details of Project4.',
          client: 'Client4',
          company: 'Company4',
          team: ['Person G', 'Person H', 'Person I']
        },
        5: {
          name: 'Project5',
          details: 'Details of Project5.',
          client: 'Client5',
          company: 'Company5',
          team: ['Person J', 'Person K', 'Person L']
        },
        6: {
          name: 'Project6',
          details: 'Details of Project6.',
          client: 'Client6',
          company: 'Company6',
          team: ['Person M', 'Person N', 'Person O']
        },
      };
      const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return <div>Project not found</div>;
  }
  return (
  <>
    <Dashboard/>
    <h1 className='pro_head'>Pojects</h1>
    <div className='main_prodetail'>
       
        <div>
        <h1 className='pro_headS'>{project.name}</h1>
      <p><strong>Project Details:</strong> {project.details}</p>
      <p><strong>Client Name:</strong> {project.client}</p>
      <p><strong>Company Name:</strong> {project.company}</p>
      <p><strong>People Working on the Project:</strong></p>
      <ul >
        {project.team.map((person, index) => (
          <li key={index}>{person}</li>
        ))}
      </ul>
            
        </div>
    </div>
  </>
  )
}

export default Prodetail
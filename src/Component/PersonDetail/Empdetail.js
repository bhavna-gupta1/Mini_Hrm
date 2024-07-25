import React from 'react';
import './Empdetail.css';
import employees from '../Data.js'; // Make sure this path is correct
import Dashboard from '../Dashboard/Dashboad'; // Ensure the path is correct
import emp from '../Data.js'

function Empdetail() {
  
  function handleAdd() {
    console.log(emp);
  }

  return (
    <>
    <Dashboard/>
      <div className='main_div'>
        <h1>Employees Detail</h1>
        <div>
          <button className='add_btn' onClick={handleAdd}>Add employee</button>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Salary</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {emp.map((employee, index) => (
                <tr key={employee.id}> {/* Use employee.id as a unique key */}
                  <td>{index + 1}</td> {/* Display index + 1 as serial number */}
                  <td>{employee.firstname}</td>
                  <td>{employee.lastname}</td>
                  <td>{employee.email}</td>
                  <td>${employee.salary.toLocaleString()}</td> {/* Format salary with comma */}
                  <td>{employee.date}</td>
                  <td>
                    <button className="action-btn">Edit</button>
                    <button className="action-btn">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Empdetail;

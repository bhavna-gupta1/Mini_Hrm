import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import { FaHome, FaUser, FaUsers, FaChartBar,FaFolderOpen } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>HRM Dashboard</h3>
      </div>
      <ul className="sidebar-list">
        <li>
          <Link to="/home">
            <FaHome className="sidebar-icon" /> Home
          </Link>
        </li>
        <li>
          <Link to="/employees">
            <FaUsers className="sidebar-icon" /> Employees
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <FaUser className="sidebar-icon" /> Profile
          </Link>
        </li>
        <li>
          <Link to="/reports">
            <FaChartBar className="sidebar-icon" /> Reports
          </Link>
          </li>
          <li>
          <Link to="/projects">
            <FaFolderOpen className="sidebar-icon" /> Projects
          </Link>
       
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

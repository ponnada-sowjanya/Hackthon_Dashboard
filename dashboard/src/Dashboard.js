import React from 'react';
import { toggleDropdown } from './toggleDropdown';
import './DashBoard.css';
const Dashboard = () => (
  <div className="sidebar">
    <div className="user-profile">
      <h3>User Name</h3>
    </div>
    <ul className="menu">
      <li><a href="#">My Profile</a></li>
      <li><a href="#">My Workshops</a></li>
      <li><a href="#">My Webinars</a></li>
      <li><a href="#">My Training</a></li>

      <li>
        <a href="#" onClick={toggleDropdown}>My Mentorship ▼</a>
        <ul className="dropdown">
          <li><a href="#">My Mentor</a></li>
          <li><a href="#">More Mentors</a></li>
        </ul>
      </li>

      <li>
        <a href="#" onClick={toggleDropdown}>My Hackathon ▼</a>
        <ul className="dropdown">
          <li><a href="#">Hackathon</a></li>
          <li><a href="#">Selection Process</a></li>
        </ul>
      </li>

      <li>
        <a href="#" onClick={toggleDropdown}>My Internships ▼</a>
        <ul className="dropdown">
          <li><a href="#">Internships</a></li>
          <li><a href="#">Selection Process</a></li>
          <li><a href="#">Internship Resources</a></li>
        </ul>
      </li>

      <li><a href="#">My Projects</a></li>

      <li>
        <a href="#" onClick={toggleDropdown}>My Placement ▼</a>
        <ul className="dropdown">
          <li><a href="#">Job Opportunities</a></li>
          <li><a href="#">Placement Resources</a></li>
          <li><a href="#">Selection Process</a></li>
        </ul>
      </li>

      <li><a href="#">My Research</a></li>

      <li>
        <a href="#" onClick={toggleDropdown}>My Certificates ▼</a>
        <ul className="dropdown">
          <li><a href="#">Webinar Certificates</a></li>
          <li><a href="#">Internship Certificates</a></li>
          <li><a href="#">Generate Certificates</a></li>
        </ul>
      </li>
    </ul>
  </div>
);

export default Dashboard;

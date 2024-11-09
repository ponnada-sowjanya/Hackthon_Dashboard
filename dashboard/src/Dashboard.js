import React from 'react';
import { toggleDropdown } from './toggleDropdown';

const Dashboard = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="user-profile">
          <h3>User Name</h3>
        </div>
        <ul className="menu">
          <li><a href="#">My Profile</a></li>
          <li>
            <a href="#" onClick={toggleDropdown}>My Mentorship ▼</a>
            <ul className="dropdown" style={{ display: 'none' }}>
              <li><a href="#">My Mentor</a></li>
              <li><a href="#">More Mentors</a></li>
            </ul>
          </li>
          <li>
            <a href="#" onClick={toggleDropdown}>My Hackathon ▼</a>
            <ul className="dropdown" style={{ display: 'none' }}>
              <li><a href="#">Hackathon</a></li>
              <li><a href="#">Selection Process</a></li>
            </ul>
          </li>
        
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;

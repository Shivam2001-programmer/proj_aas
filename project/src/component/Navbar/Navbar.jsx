
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="logo.jpeg" alt="Logo" />

      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/courses">
            <p className='collag'>Colleges</p>
          </Link>
        </li>
        <li>Courses</li>
        <li>Exams</li>
        <li>Study Abroad</li>
        <li>Get Counselling</li>
        <li>Latest News</li>

      </ul>
    </nav>
  );
}

export default Navbar;

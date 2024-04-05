import React from 'react';
import "../styles/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><FontAwesomeIcon icon={faHome} /><a href="#">Home</a></li>
        <li><FontAwesomeIcon icon={faUser} /><a href="#">About</a></li>
        <li><FontAwesomeIcon icon={faCog} /><a href="#">Services</a></li>
        <li><FontAwesomeIcon icon={faEnvelope} /><a href="#">Contact</a></li>
      </ul>
    </div>
  );
}

export default Navbar;

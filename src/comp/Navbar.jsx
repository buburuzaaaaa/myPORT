import React, { useState, useEffect } from 'react';
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import './Navbar.css'; // Assuming you have styles for the navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo"></h1>
      <div className="social-icons">
        <FaGithub />
        <FaInstagram />
        <FaFacebook />
        <FaLinkedin />
      </div>
    </nav>
  );
};

export default Navbar;

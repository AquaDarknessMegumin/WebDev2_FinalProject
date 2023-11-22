import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Nav_Bar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <img src="pictures/DentEaseNav.png" alt="Logo" className="logo" />
        {/* Burger icon for small screens */}
        <div className="burger-menu" onClick={() => setMenuOpen(!isMenuOpen)}>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
          <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
          <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
        </div>
        {/* Menu items */}
        <ul className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/dentists">Meet the Dentists</Link></li>
          <li><Link to="/service">Our Services</Link></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Make an Appointment</a></li>
        </ul>

        {/* Profile icon using Bootstrap classes */}
        <div className="dropdown">
          <button className="profileicon" type="button" id="profileDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <FontAwesomeIcon icon={faUserCircle} /> {/* Font Awesome user circle icon */}
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default NavBar;